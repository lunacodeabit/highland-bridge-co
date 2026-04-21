import { useEffect, useRef } from 'react';

interface ScrollFrameCanvasProps {
  frameCount: number;
  /** Returns the URL for frame `i` (1-indexed). */
  getFrameUrl: (i: number) => string;
  /** Classes applied to the wrapping container. Canvas fills 100% of it. */
  className?: string;
  /**
   * Fraction of viewport-height over which the animation plays out.
   * e.g. `1.5` means frames advance while the user scrolls 1.5× the viewport.
   */
  scrollRange?: number;
  /** Preload first N frames eagerly (blocking). Rest are loaded on idle. */
  eagerFrames?: number;
}

/**
 * Scroll-driven canvas frame player.
 *
 * - Preloads frames progressively (eager batch first, then idle callback for the rest).
 * - Renders the current frame on a DPR-aware canvas using "object-fit: cover" math.
 * - Frame index is driven by window.scrollY, throttled through requestAnimationFrame.
 */
export function ScrollFrameCanvas({
  frameCount,
  getFrameUrl,
  className,
  scrollRange = 1.5,
  eagerFrames = 12,
}: ScrollFrameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images: HTMLImageElement[] = new Array(frameCount);
    let currentFrame = 0;
    let rafId: number | null = null;
    let disposed = false;

    const drawFrame = (idx: number) => {
      const img = images[idx];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;

      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // object-fit: cover
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = w / h;
      let dw: number, dh: number, dx: number, dy: number;
      if (ir > cr) {
        dh = h;
        dw = h * ir;
        dx = (w - dw) / 2;
        dy = 0;
      } else {
        dw = w;
        dh = w / ir;
        dx = 0;
        dy = (h - dh) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const loadImage = (i: number) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = getFrameUrl(i + 1);
        img.onload = () => {
          images[i] = img;
          if (i === 0) drawFrame(0);
          resolve();
        };
        img.onerror = () => resolve();
        images[i] = img;
      });

    // Eager preload for the opening frames so first paint is immediate.
    (async () => {
      const eager = Math.min(eagerFrames, frameCount);
      await Promise.all(Array.from({ length: eager }, (_, i) => loadImage(i)));
      if (disposed) return;

      // Idle-load the rest in background.
      const loadRest = () => {
        for (let i = eager; i < frameCount; i++) {
          if (disposed) return;
          const img = new Image();
          img.decoding = 'async';
          img.src = getFrameUrl(i + 1);
          images[i] = img;
        }
      };

      const ric = (window as unknown as {
        requestIdleCallback?: (cb: () => void) => number;
      }).requestIdleCallback;
      if (typeof ric === 'function') ric(loadRest);
      else setTimeout(loadRest, 50);
    })();

    const update = () => {
      rafId = null;
      const scrollY = window.scrollY;
      const max = window.innerHeight * scrollRange;
      const progress = Math.min(1, Math.max(0, scrollY / max));
      const target = Math.min(frameCount - 1, Math.round(progress * (frameCount - 1)));
      if (target !== currentFrame) {
        currentFrame = target;
        drawFrame(currentFrame);
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => drawFrame(currentFrame);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    update();

    return () => {
      disposed = true;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [frameCount, getFrameUrl, scrollRange, eagerFrames]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
