import { useEffect, useState } from 'react';
import { ChatWidget } from './components/ChatWidget';
import WintergreenLanding from './WintergreenLanding';
import { V1Landing } from './components/V1Landing';
import V3Landing from './components/V3Landing';
import { Metadata } from './components/Metadata';

export default function App() {
  const [version, setVersion] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('v');
      if (v === '3') return 3;
      if (v === '2') return 2;
      return 1;
    }
    return 1;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (version === 3) params.set('v', '3');
    else if (version === 2) params.set('v', '2');
    else params.delete('v');
    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.replaceState({}, '', newUrl);
  }, [version]);

  // Main Return - Toggles between versions safely
  return (
    <>
      <Metadata />
      {version === 3 ? (
        <V3Landing setVersion={setVersion} />
      ) : version === 2 ? (
        <WintergreenLanding setVersion={setVersion} />
      ) : (
        <V1Landing setVersion={setVersion} />
      )}
      
      {/* FLOATING VERSION SWITCHER - REVIEWER TOOLBAR */}
      <div className="fixed bottom-6 left-6 z-[200] flex gap-2 bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl scale-90 sm:scale-100 origin-bottom-left transition-all hover:scale-105 group">
        <div className="flex flex-col gap-1 pr-2 border-r border-white/10 mr-1 hidden sm:flex">
          <span className="text-[8px] font-black uppercase text-white/50 tracking-tighter">Reviewer</span>
          <span className="text-[10px] font-black uppercase text-white tracking-widest leading-none underline decoration-[#D70C20]">Toolbar</span>
        </div>
        {[1, 2, 3].map((v) => (
          <button
            key={v}
            onClick={() => setVersion(v)}
            className={`px-4 py-2 rounded-xl font-black text-xs transition-all duration-300 flex flex-col items-center gap-0.5 ${
              version === v 
                ? 'bg-[#D70C20] text-white shadow-lg shadow-red-600/20' 
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-[10px] opacity-70">PROP</span>
            <span>V{v}</span>
          </button>
        ))}
      </div>
      
      <ChatWidget />
    </>
  );
}
