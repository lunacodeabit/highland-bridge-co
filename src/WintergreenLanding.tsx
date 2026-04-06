import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, ArrowRight, Menu, X, Scale, Ruler, Palette, Trophy, ShieldCheck, Clock, Hammer } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';

const services = [
  { title: 'Bridge Construction', img: '/hero_bridge.png' },
  { title: 'Excavation Services', img: '/excavation.png' },
  { title: 'Boat Docks & Houses', img: '/boat_dock.png' },
  { title: 'Seawall Construction', img: '/seawall.png' },
  { title: 'Retaining Walls', img: '/seawall.png' },
  { title: 'Rock & Asphalt Roads', img: '/excavation.png' },
  { title: 'Parking Lots', img: '/excavation.png' },
  { title: 'Drainage Systems', img: '/seawall.png' }
];

const specs = [
  { label: 'Weight Capacity', value: 'Up to 300,000 lbs', icon: <Scale className="w-5 h-5" /> },
  { label: 'Length Range', value: "10' to 180' Long", icon: <Ruler className="w-5 h-5" /> },
  { label: 'Width Options', value: 'Up to 24\' Wide', icon: <Ruler className="w-5 h-5 rotate-90" /> },
  { label: 'Railing Designs', value: '20+ Custom Designs', icon: <Hammer className="w-5 h-5" /> },
  { label: 'Manufacturing', value: 'Made in the U.S.A', icon: <ShieldCheck className="w-5 h-5" /> },
  { label: 'Experience', value: '20+ Years in Industry', icon: <Clock className="w-5 h-5" /> }
];

const colors = [
  { name: 'Black', hex: '#000000' },
  { name: 'Brown', hex: '#5D4037' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Grey', hex: '#9E9E9E' },
  { name: 'Green', hex: '#2E7D32' },
  { name: 'Patina', hex: '#4DB6AC' }
];

export default function WintergreenLanding({ }: { setVersion: (v: number) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* TOP BAR */}
      <div className="bg-slate-900 text-white py-2 px-4 md:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <a href="tel:2146686311" className="flex items-center gap-1 hover:text-red-500 transition-colors">
            <Phone className="w-4 h-4" /> (214) 668-6311
          </a>
          <span className="hidden md:inline text-slate-500">|</span>
          <div className="hidden md:flex items-center gap-1 text-slate-300">
            <MapPin className="w-4 h-4" /> Installing Anywhere in the U.S.
          </div>
        </div>
        <div className="flex items-center gap-4">
           <Button variant="link" className="text-white p-0 h-auto text-sm hover:text-red-500">
             <Mail className="w-4 h-4 mr-2" /> Get Help Online!
           </Button>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D70C20] rounded flex items-center justify-center text-white font-bold text-xl">H</div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none tracking-tighter">HIGHLAND</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500">BRIDGE CO.</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
            {['Home', 'Products', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#D70C20] transition-colors">{item}</a>
            ))}
            <Button className="bg-[#D70C20] hover:bg-black text-white px-6 rounded-none">FREE ESTIMATE</Button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900 text-white p-8 flex flex-col gap-6 text-2xl font-bold">
          <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
          {['Home', 'Products', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
          ))}
          <Button className="bg-[#D70C20] text-xl py-8 rounded-none mt-4">FREE ESTIMATE</Button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/cody.mp4"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              HEAVY-DUTY <br/>
              <span className="text-[#D70C20]">STEEL BRIDGES</span> <br/>
              BUILT TO LAST
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-xl font-medium">
              Made in the U.S.A. with capacities up to 300,000 lbs. Engineered for durability, delivered nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#D70C20] hover:bg-white hover:text-black transition-all text-white px-10 py-7 text-lg font-bold rounded-none">
                VIEW OUR PRODUCTS <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-10 py-7 text-lg font-bold rounded-none bg-transparent">
                OUR SERVICES
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* RED SLANTED DECOR */}
        <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-[#D70C20] translate-y-12 -rotate-3 hidden lg:block"></div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-slate-100 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-[#D70C20] mb-3" />
              <h3 className="font-black text-2xl">20+ YEARS</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Industry Experience</p>
            </div>
            <div className="flex flex-col items-center border-x-0 md:border-x border-slate-300 px-8">
              <ShieldCheck className="w-12 h-12 text-[#D70C20] mb-3" />
              <h3 className="font-black text-2xl">U.S.A MADE</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Quality Manufacturing</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-[#D70C20] mb-3" />
              <h3 className="font-black text-2xl">NATIONWIDE</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Installation Anywhere</p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-white" id="about">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
           <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D70C20]/10 -z-10"></div>
             <img src="/hero_bridge.png" alt="Bridge Construction" className="w-full h-auto shadow-2xl skew-y-1 grayscale hover:grayscale-0 transition-all duration-700" />
             <div className="absolute -bottom-8 -right-8 bg-[#D70C20] p-8 text-white hidden md:block">
               <span className="text-4xl font-black block">300K</span>
               <span className="text-sm font-bold uppercase tracking-widest">LBS Capacity</span>
             </div>
           </div>
           <div className="lg:w-1/2">
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">
               Expert Bridge Builders & <br/>
               <span className="text-[#D70C20]">Construction Specialists</span>
             </h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               With over two decades of experience, Highland Bridge Co. provides end-to-end infrastructure solutions. From precision excavation to the installation of heavy-duty steel bridges, we deliver American-made quality that stands the test of time.
             </p>
             <div className="grid grid-cols-2 gap-6 mb-10">
               {['Bridge Construction', 'Excavation', 'Seawalls', 'Dock Building'].map((item) => (
                 <div key={item} className="flex items-center gap-2 font-bold">
                   <div className="w-5 h-5 rounded-full bg-[#D70C20] flex items-center justify-center text-white">
                     <Check size={12} />
                   </div>
                   {item}
                 </div>
               ))}
             </div>
             <Button className="bg-slate-900 hover:bg-[#D70C20] text-white px-8 py-6 rounded-none font-bold transition-all">
               LEARN MORE ABOUT US
             </Button>
           </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-900 text-white" id="services">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h6 className="text-[#D70C20] font-black tracking-[0.3em] uppercase mb-4">What We Do</h6>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Comprehensive <br/>Services</h2>
            </div>
            <p className="max-w-md text-slate-400 font-medium">
              We manage your project from site preparation to final installation. Professional results, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-80 overflow-hidden"
              >
                <img src={service.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black uppercase mb-2 leading-none">{service.title}</h3>
                  <div className="w-8 h-1 bg-[#D70C20] group-hover:w-full transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS SECTION */}
      <section className="py-24 bg-white" id="products">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-50 border-t-4 border-[#D70C20] shadow-2xl p-8 md:p-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Bridge Specifications</h2>
               <p className="text-slate-500 font-medium">Highland bridges are engineered to exceed industry standards.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
               {specs.map((spec, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 bg-white shadow-sm border-l-2 border-slate-200">
                    <div className="p-3 bg-slate-100 text-[#D70C20] rounded-lg">
                      {spec.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{spec.label}</div>
                      <div className="text-xl font-black text-slate-900">{spec.value}</div>
                    </div>
                 </div>
               ))}
             </div>

             <div className="border-t pt-12">
               <div className="text-center mb-6">
                 <h3 className="text-xl font-black uppercase flex items-center justify-center gap-2">
                   <Palette className="text-[#D70C20]" /> Available Colors
                 </h3>
               </div>
               <div className="flex flex-wrap justify-center gap-4">
                  {colors.map((color) => (
                    <div key={color.name} className="flex flex-col items-center gap-2">
                      <div 
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform cursor-pointer"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                      <span className="text-[10px] font-bold uppercase text-slate-500">{color.name}</span>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#D70C20] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8">
            Let's Start Your <br/>Project Today
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-[#D70C20] hover:bg-slate-900 hover:text-white px-10 py-8 text-xl font-black rounded-none tracking-tight">
              GET A FREE QUOTE
            </Button>
            <a href="tel:2146686311">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#D70C20] px-10 py-8 text-xl font-black rounded-none bg-transparent">
                CALL (214) 668-6311
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-20 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#D70C20] rounded flex items-center justify-center text-white font-bold text-xl">H</div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-none tracking-tighter">HIGHLAND</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500">BRIDGE CO.</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm">
              Premium bridge construction and infrastructure services since 2004. Quality craftmanship made in the U.S.A.
            </p>
            <div className="flex gap-4">
              <a href="tel:2146686311" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#D70C20] transition-colors cursor-pointer">
                <Phone size={20} />
              </a>
              <a href="mailto:info@highlandbridge.com" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#D70C20] transition-colors cursor-pointer">
                <Mail size={20} />
              </a>
              <a href="https://www.facebook.com/p/Highland-Bridge-Co-100086236734310/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-[#D70C20] transition-colors cursor-pointer text-white text-xs font-bold">
                FB
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 border-b border-[#D70C20] pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-slate-400 font-bold text-sm uppercase">
              <li className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Service Area</li>
              <li className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Gallery</li>
              <li className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors whitespace-nowrap">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase mb-6 border-b border-[#D70C20] pb-2 inline-block">Contact</h4>
            <ul className="flex flex-col gap-4 text-slate-400 font-bold text-sm">
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#D70C20]" /> (214) 668-6311</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#D70C20]" /> info@highlandbridge.com</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-[#D70C20]" /> Installing Nationwide</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-slate-900 text-slate-600 text-center font-bold text-xs tracking-widest uppercase">
          © 2026 Highland Bridge Co. | All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
