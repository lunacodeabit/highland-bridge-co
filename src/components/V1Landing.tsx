import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Phone, Construction, Anchor, Waves, Truck, PhoneCall, CheckCircle2, Mountain, Droplets, ParkingSquare, Route, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ScrollFrameCanvas } from './ScrollFrameCanvas';

// Scroll-frame sequence lives in /public/frames-webp/, 94 webp frames (optimized).
// Pattern: "frame_N.webp" (1..94). The original JPGs in /public/frames/ are gitignored.
const V1_FRAME_COUNT = 94;
const getV1FrameUrl = (i: number) => `/frames-webp/frame_${i}.webp`;

const services = [
  {
    title: 'Bridge Construction',
    description: 'Custom-built bridges with weight capacities up to 300,000 lbs. Lengths from 10\' to 180\' and widths up to 24\'. Made in the U.S.A.',
    icon: <Truck className="w-6 h-6 text-red-500" />,
    img: '/blueprint_bridge.png'
  },
  {
    title: 'Excavation Services',
    description: 'Professional excavation, land clearing, and site preparation for residential and commercial projects.',
    icon: <Construction className="w-6 h-6 text-red-500" />,
    img: '/excavation.png'
  },
  {
    title: 'Boat Docks & Boat Houses',
    description: 'Custom-built boat docks and boat houses engineered to withstand the elements and enhance your waterfront.',
    icon: <Anchor className="w-6 h-6 text-red-500" />,
    img: '/boat_dock.png'
  },
  {
    title: 'Seawall Construction',
    description: 'Sturdy seawalls designed to prevent erosion and protect your valuable waterfront property for decades.',
    icon: <Waves className="w-6 h-6 text-red-500" />,
    img: '/seawall.png'
  },
  {
    title: 'Retaining Walls',
    description: 'Engineered retaining walls that stabilize slopes, manage water runoff, and add structural integrity to your land.',
    icon: <Mountain className="w-6 h-6 text-red-500" />,
    img: '/seawall.png'
  },
  {
    title: 'Rock & Asphalt Roads',
    description: 'Durable rock and asphalt road construction for private properties, ranches, and rural access routes.',
    icon: <Route className="w-6 h-6 text-red-500" />,
    img: '/excavation.png'
  },
  {
    title: 'Parking Lots',
    description: 'Professional parking lot construction and grading for commercial and residential properties.',
    icon: <ParkingSquare className="w-6 h-6 text-red-500" />,
    img: '/excavation.png'
  },
  {
    title: 'Drainage Systems',
    description: 'Complete drainage system design and installation to manage water flow and protect your property from flooding.',
    icon: <Droplets className="w-6 h-6 text-red-500" />,
    img: '/seawall.png'
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function V1Landing({ }: { setVersion: (v: number) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-svh bg-slate-950 font-sans text-slate-200 overflow-x-clip">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 md:gap-3 min-w-0">
            <img src="/logo.jpg" alt="US Specialized" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover shrink-0" />
            <span className="text-base md:text-xl font-bold tracking-tight text-white truncate">US Specialized</span>
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="tel:4694004200" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
              <Phone size={16} />
              (469) 400-4200
            </a>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-red-600 hover:bg-red-700 text-white border-0">
              Get a Quote
            </Button>
          </div>
          {/* Mobile controls: quick-call + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <a href="tel:4694004200" aria-label="Call (469) 400-4200" className="w-11 h-11 flex items-center justify-center rounded-full bg-red-600 text-white active:scale-95 transition-transform">
              <Phone size={18} />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}
              className="w-11 h-11 flex items-center justify-center rounded-full text-white hover:bg-white/10 active:scale-95 transition-all"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-slate-950/98 backdrop-blur-xl pt-20 px-6 safe-bottom"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="flex flex-col gap-2 text-white"
              onClick={e => e.stopPropagation()}
            >
              {[
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 px-2 text-2xl font-bold border-b border-slate-800 active:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:4694004200"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-3 h-14 bg-white/5 border border-white/10 rounded-xl text-lg font-semibold"
              >
                <Phone size={18} /> (469) 400-4200
              </a>
              <Button
                onClick={() => { setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-2 h-14 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-xl"
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section — scroll-pinned with frame animation.
          Outer section is 250vh tall so the sticky inner stays in view for 150vh
          of scroll, matching ScrollFrameCanvas `scrollRange={1.5}`. */}
      <section className="relative h-[250vh] bg-slate-950">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <ScrollFrameCanvas
              frameCount={V1_FRAME_COUNT}
              getFrameUrl={getV1FrameUrl}
              className="w-full h-full opacity-60"
              scrollRange={1.5}
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/30 lg:hidden z-10" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[70%] bg-linear-to-r from-slate-950 via-slate-950/95 to-transparent z-10" />

          <div className="relative z-40 max-w-7xl mx-auto px-5 md:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs md:text-sm font-medium mb-4 lg:mb-6 border border-red-500/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Serving Texas & Beyond
              </div>
              <h1 className="font-extrabold text-white leading-[1.05] mb-4 lg:mb-6 tracking-tight text-[clamp(2.25rem,9vw,4.5rem)] lg:text-7xl">
                Building Bridges,<br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600">
                  Connecting Futures.
                </span>
              </h1>
              <p className="text-base md:text-xl text-slate-400 mb-6 md:mb-8 max-w-xl leading-relaxed">
                From heavy-duty bridges to excavation and waterfront seawalls. The US Specialized team delivers rugged, engineered solutions built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl w-full sm:w-auto">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a
                  href="tel:4694004200"
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-slate-400 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl w-full sm:w-auto font-medium transition-colors"
                >
                  <PhoneCall className="w-5 h-5" /> (469) 400-4200
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">Comprehensive bridge construction, excavation, marine, and civil engineering services tailored to your land's unique challenges.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card className="bg-slate-950 border-slate-800 overflow-hidden group hover:border-red-500/50 transition-colors h-full">
                  <div className="h-40 md:h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10" />
                    <img src={service.img} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-5 md:p-8">
                     <div className="w-11 h-11 md:w-12 md:h-12 bg-red-950/50 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-red-500/20">
                        {service.icon}
                     </div>
                     <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{service.title}</h3>
                     <p className="text-slate-400 text-sm md:text-base leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">About US Specialized</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              US Specialized is a full-service bridge and construction company based in Texas with over 20 years of experience. We specialize in building custom, heavy-duty bridges engineered to handle the toughest loads — installed anywhere in the United States.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6 md:mb-10">Bridge Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {[
                { label: 'Weight Capacity', value: 'Up to 300,000 lbs' },
                { label: 'Bridge Length', value: "10' to 180' long" },
                { label: 'Bridge Width', value: "Up to 24' wide" },
                { label: 'Railing Designs', value: '20+ options' },
              ].map((spec, i) => (
                <div key={i} className="text-center p-4 md:p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <p className="text-lg md:text-3xl font-bold text-red-500 mb-1 md:mb-2 leading-tight">{spec.value}</p>
                  <p className="text-slate-400 text-[10px] md:text-sm uppercase tracking-wider">{spec.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <motion.div {...fadeIn} className="p-4 md:p-6">
              <div className="w-12 h-12 mx-auto bg-red-950/50 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-red-500/20">
                <Truck className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Made in the U.S.A.</h3>
              <p className="text-slate-400 text-sm md:text-base">Every bridge is proudly built in the United States. We install anywhere in the country — from Texas to coast to coast.</p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.1}} className="p-4 md:p-6">
              <div className="w-12 h-12 mx-auto bg-red-950/50 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-red-500/20">
                <Construction className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Color Options</h3>
              <p className="text-slate-400 text-sm md:text-base">Available in Black, Brown, White, Grey, Green, and Patina finishes to match your property's aesthetic perfectly.</p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.2}} className="p-4 md:p-6">
              <div className="w-12 h-12 mx-auto bg-red-950/50 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-red-500/20">
                <Waves className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">20+ Railing Designs</h3>
              <p className="text-slate-400 text-sm md:text-base">Choose from over 20 different railing designs to customize the look and safety features of your bridge installation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
        <div className="absolute top-0 right-0 w-200 h-200 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Expertise You Can Build On.</h2>
              <p className="text-slate-400 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                Whether you need a heavy-duty bridge for your ranch, a reliable seawall to protect your shoreline, or excavation work done right, US Specialized brings the machinery and 20+ years of experience to get it done the first time.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                {['20+ Years of Experience', 'Heavy Machinery Fleet', 'Custom Engineering Solutions', 'Free On-site Estimates'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-red-500 w-5 h-5 md:w-6 md:h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900 border-slate-700 shadow-2xl p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Request an Estimate</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Input placeholder="First Name" className="bg-slate-950 border-slate-800 text-white h-12" />
                    <Input placeholder="Last Name" className="bg-slate-950 border-slate-800 text-white h-12" />
                  </div>
                  <Input placeholder="Phone or Email" inputMode="email" className="bg-slate-950 border-slate-800 text-white h-12" />
                  <Textarea placeholder="Project Description..." className="bg-slate-950 border-slate-800 text-white h-28 md:h-32 resize-none" />
                  <Button className="w-full h-14 mt-2 bg-red-600 hover:bg-red-700 text-white text-base md:text-lg font-semibold rounded-xl">
                    Submit Request
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 md:py-12 safe-bottom">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src="/logo.jpg" alt="US Specialized" className="w-10 h-10 rounded-lg object-cover" />
            <span className="text-lg md:text-xl font-bold text-white">US Specialized</span>
          </div>
          <p className="text-slate-500 text-xs md:text-sm">© {new Date().getFullYear()} US Specialized. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/usspecialized" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
            <a href="https://www.usspecialized.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
