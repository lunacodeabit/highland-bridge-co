import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, ArrowRight, Menu, X, Ruler, Trophy, ShieldCheck, Clock, Star, Globe, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const services = [
  { 
    title: 'Bridge Construction', 
    description: 'Custom steel bridges engineered for capacities up to 300,000 lbs. Built in the USA and delivered nationwide.',
    img: '/hero_bridge.png' 
  },
  { 
    title: 'Excavation & Site Prep', 
    description: 'Full-service site preparation for bridges, roads, and municipal infrastructure projects.',
    img: '/excavation.png' 
  },
  { 
    title: 'Sea Walls & Retaining Walls', 
    description: 'Heavy-duty shoreline protection and soil stabilization using premium materials and expert engineering.',
    img: '/seawall.png' 
  },
  { 
    title: 'Docks & Boat Houses', 
    description: 'Commercial and residential marine structures designed for durability and aesthetic appeal.',
    img: '/boat_dock.png' 
  }
];

const benefits = [
  { 
    title: 'USA Made', 
    desc: 'Proudly manufactured in America with premium domestic steel and craftsmanship.', 
    img: '/blueprint_bridge.png',
    icon: <ShieldCheck className="w-5 h-5" /> 
  },
  { 
    title: '20+ Years', 
    desc: 'Decades of specialized experience in high-precision infrastructure projects.', 
    img: '/hero_bridge.png',
    icon: <Clock className="w-5 h-5" /> 
  },
  { 
    title: 'Nationwide', 
    desc: 'A robust logistics network providing installation services from coast to coast.', 
    img: '/boat_dock.png', 
    icon: <MapPin className="w-5 h-5" /> 
  },
  { 
    title: 'Custom Specs', 
    desc: 'Bridges from 10\' to 180\' long, custom-tailored to your exact requirements.', 
    img: '/seawall.png',
    icon: <Ruler className="w-5 h-5" /> 
  },
  { 
    title: 'Fast Lead Times', 
    desc: 'The industry\'s most efficient production cycles for rapid site deployment.', 
    img: '/excavation.png',
    icon: <Trophy className="w-5 h-5" /> 
  }
];

export default function V3Landing({ }: { setVersion: (v: number) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* TOP BAR - Identical to Wintergreen */}
      <div className="bg-slate-950 text-white py-2 px-4 md:px-8 flex justify-between items-center text-xs relative z-50">
        <div className="flex items-center gap-6">
          <a href="tel:2146686311" className="flex items-center gap-2 hover:text-[#D70C20] transition-colors font-bold">
            <div className="bg-[#D70C20] p-1.5 rounded-sm"><Phone className="w-3 h-3 fill-white" /></div> (214) 668-6311
          </a>
          <span className="hidden md:inline text-slate-700">|</span>
          <div className="hidden md:flex items-center gap-2 text-slate-300 font-bold uppercase tracking-wider">
            <div className="bg-slate-800 p-1.5 rounded-sm"><MapPin className="w-3 h-3" /></div> Installing Nationwide
          </div>
        </div>
        <div className="flex items-center gap-2">
           <a href="#contact" className="bg-[#D70C20] text-white px-4 py-1.5 rounded-sm font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all">
             <Mail className="w-3 h-3" /> Get Help Online!
           </a>
        </div>
      </div>

      {/* MAIN NAV - Sticky */}
      <nav className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1' : 'bg-white/80 backdrop-blur-sm py-3'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white font-black text-2xl">H</div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none tracking-tighter">HIGHLAND</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500">BRIDGE CO.</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-black text-sm uppercase tracking-tight">
            {['Home', 'Products', 'Services', 'Gallery', 'About Us', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#D70C20] transition-colors py-4 px-2">{item}</a>
            ))}
            <Button className="bg-[#D70C20] hover:bg-slate-900 text-white px-8 py-6 rounded-sm font-black text-sm shadow-lg shadow-red-900/20 active:scale-95 transition-all">
              GET A FREE ESTIMATE
            </Button>
          </div>

          <button className="lg:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-slate-950 text-white p-8 flex flex-col gap-8 text-3xl font-black">
          <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X className="w-10 h-10" /></button>
          {['Home', 'Products', 'Services', 'Gallery', 'About Us', 'Contact Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
          ))}
          <Button className="bg-[#D70C20] text-2xl py-10 rounded-sm mt-4">FREE ESTIMATE</Button>
        </div>
      )}

      {/* HERO SECTION - True Wintergreen Style */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="/hero_bridge.png"
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/codyvideo.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black tracking-tight leading-[0.85] mb-6 drop-shadow-2xl"
            >
              HEAVY-DUTY <br/>
              <span className="text-[#D70C20]">STEEL BRIDGES</span> <br/>
              BUILT TO LAST
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-slate-100 mb-10 max-w-2xl font-bold uppercase tracking-tight"
            >
              20+ Years of Experience in Precision Infrastructure & Commercial Construction.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-[#D70C20] hover:bg-white hover:text-black transition-all text-white px-12 py-9 text-2xl font-black rounded-sm shadow-2xl flex items-center gap-4">
                GET A FREE ESTIMATE <ArrowRight className="w-8 h-8" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* TRUST STRIP (STAR RATING) */}
        <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end gap-2 text-white">
          <div className="flex gap-1">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#D70C20] text-[#D70C20]" />)}
          </div>
          <p className="font-black text-xl uppercase tracking-tighter">5.0 Rating / 250+ Projects</p>
        </div>
      </section>

      {/* FEATURE CARDS - Redesigned to match Wintergreen Product Aesthetic */}
      <section className="py-24 bg-slate-50 relative">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h6 className="text-[#D70C20] font-black uppercase tracking-[0.3em] text-sm mb-4">Why Choose Highland</h6>
             <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Unmatched <span className="text-slate-400">Capabilities</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {benefits.map((b, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col border border-slate-100"
                >
                 <div className="h-56 relative overflow-hidden">
                   <img src={b.img} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl text-[#2E7731]">
                     {b.icon}
                   </div>
                 </div>
                 <div className="p-8 pb-10 flex-grow">
                   <h4 className="font-black text-2xl uppercase tracking-tight mb-4 text-[#2E7731] group-hover:text-[#D70C20] transition-colors">
                     {b.title}
                   </h4>
                   <p className="text-slate-500 font-bold leading-relaxed text-sm">
                     {b.desc}
                   </p>
                 </div>
                 <div className="h-1.5 w-0 bg-[#2E7731] group-hover:w-full transition-all duration-500"></div>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* SERVICES BLOCK 1 - Alternating */}
      <section className="py-24 bg-white" id="services">
        {services.map((s, i) => (
          <div key={i} className={`container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 mb-24 last:mb-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video overflow-hidden rounded-sm shadow-2xl group">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D70C20]/10 -z-10 rounded-full"></div>
            </div>
            <div className="w-full md:w-1/2">
              <h6 className="text-[#D70C20] font-black uppercase tracking-[0.3em] text-sm mb-4">Highland Core Service</h6>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none mb-6">{s.title}</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                {s.description}
              </p>
              <div className="flex flex-col gap-4 mb-10">
                 {['Precision Engineering', 'Heavy Capacity', 'Turnkey Solutions'].map(item => (
                   <div key={item} className="flex items-center gap-3 font-bold text-slate-800 uppercase text-sm">
                     <div className="bg-[#2E7731] p-1 rounded-full text-white"><Check size={12} /></div> {item}
                   </div>
                 ))}
              </div>
              <Button className="bg-[#2E7731] hover:bg-black text-white px-10 py-7 text-lg font-black rounded-sm shadow-xl transition-all">
                LEARN MORE
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* FINAL CTA - Red Section */}
      <section className="py-24 bg-[#D70C20] text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[url('/blueprint_bridge.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 drop-shadow-lg">
            Ready to Build?
          </h2>
          <p className="text-2xl md:text-3xl font-bold mb-12 max-w-3xl mx-auto opacity-90 uppercase tracking-tight">
            Consult with our engineering team today for your nationwide infrastructure project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-black hover:bg-white hover:text-black transition-all text-white px-12 py-9 text-2xl font-black rounded-sm shadow-2xl uppercase">
              GET A FREE QUOTE
            </Button>
            <a href="tel:2146686311">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-9 text-2xl font-black rounded-sm bg-transparent uppercase">
              CALL (214) 668-6311
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER - True Wintergreen Detail */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#D70C20] rounded flex items-center justify-center text-white font-black text-2xl">H</div>
                <div className="flex flex-col">
                  <span className="font-black text-xl leading-none tracking-tighter">HIGHLAND</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500">BRIDGE CO.</span>
                </div>
              </div>
              <p className="text-slate-500 font-bold text-sm leading-relaxed mb-8 uppercase tracking-tight">
                Premium infrastructure and commercial construction services in the DFW metroplex and nationwide. Quality craftsmanship you can trust.
              </p>
              <div className="flex gap-4">
                {[Globe, Activity, Mail, Phone].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#D70C20] transition-colors cursor-pointer group">
                    <Icon size={18} className="text-slate-400 group-hover:text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest text-[#D70C20] mb-8">Navigation</h4>
              <ul className="flex flex-col gap-4 text-slate-400 font-black text-xs uppercase tracking-widest">
                <li className="hover:text-white cursor-pointer transition-colors">Residential Projects</li>
                <li className="hover:text-white cursor-pointer transition-colors">Commercial Scale</li>
                <li className="hover:text-white cursor-pointer transition-colors">Our Gallery</li>
                <li className="hover:text-white cursor-pointer transition-colors">About Highland</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest text-[#D70C20] mb-8">Contact Us</h4>
              <ul className="flex flex-col gap-6 text-slate-400 font-bold text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="text-[#D70C20] w-5 h-5 shrink-0" />
                  <span>Installing Nationwide</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-[#D70C20] w-5 h-5 shrink-0" />
                  <span>(214) 668-6311</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-[#D70C20] w-5 h-5 shrink-0" />
                  <span>info@highlandbridge.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase tracking-widest text-[#D70C20] mb-8">Installation Map</h4>
              <div className="aspect-square bg-slate-900 rounded-sm overflow-hidden grayscale border border-slate-800 opacity-50 hover:opacity-100 transition-opacity">
                <iframe 
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107297.05432675971!2d-97.41162799999999!3d32.7554883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e6e122dc807ad%3A0xa4af85993730570a!2sFort%20Worth%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.2em]">
              © 2026 Highland Bridge Co. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase text-slate-700 tracking-widest">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
              <span className="hover:text-white cursor-pointer transition-colors italic">Powered by Galaxy SEO</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
