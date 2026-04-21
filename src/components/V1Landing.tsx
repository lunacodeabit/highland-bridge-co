import { motion } from 'framer-motion';
import { ArrowRight, Phone, Construction, Anchor, Waves, Truck, PhoneCall, CheckCircle2, Mountain, Droplets, ParkingSquare, Route } from 'lucide-react';
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
    icon: <Truck className="w-6 h-6 text-orange-500" />,
    img: '/blueprint_bridge.png'
  },
  {
    title: 'Excavation Services',
    description: 'Professional excavation, land clearing, and site preparation for residential and commercial projects.',
    icon: <Construction className="w-6 h-6 text-orange-500" />,
    img: '/excavation.png'
  },
  {
    title: 'Boat Docks & Boat Houses',
    description: 'Custom-built boat docks and boat houses engineered to withstand the elements and enhance your waterfront.',
    icon: <Anchor className="w-6 h-6 text-orange-500" />,
    img: '/boat_dock.png'
  },
  {
    title: 'Seawall Construction',
    description: 'Sturdy seawalls designed to prevent erosion and protect your valuable waterfront property for decades.',
    icon: <Waves className="w-6 h-6 text-orange-500" />,
    img: '/seawall.png'
  },
  {
    title: 'Retaining Walls',
    description: 'Engineered retaining walls that stabilize slopes, manage water runoff, and add structural integrity to your land.',
    icon: <Mountain className="w-6 h-6 text-orange-500" />,
    img: '/seawall.png'
  },
  {
    title: 'Rock & Asphalt Roads',
    description: 'Durable rock and asphalt road construction for private properties, ranches, and rural access routes.',
    icon: <Route className="w-6 h-6 text-orange-500" />,
    img: '/excavation.png'
  },
  {
    title: 'Parking Lots',
    description: 'Professional parking lot construction and grading for commercial and residential properties.',
    icon: <ParkingSquare className="w-6 h-6 text-orange-500" />,
    img: '/excavation.png'
  },
  {
    title: 'Drainage Systems',
    description: 'Complete drainage system design and installation to manage water flow and protect your property from flooding.',
    icon: <Droplets className="w-6 h-6 text-orange-500" />,
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

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center transform rotate-3">
              <Construction className="text-white w-6 h-6 -rotate-3" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Highland Bridge Co.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="tel:2146686311" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
              <Phone size={16} />
              (214) 668-6311
            </a>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-600 hover:bg-orange-700 text-white border-0">
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section — scroll-pinned with frame animation.
          Outer section is tall (250vh) so the sticky inner stays in view for 150vh
          of scroll, giving the user time to scrub through all 94 frames. */}
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

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/10 lg:hidden z-10" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent z-10" />

          <div className="relative z-40 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4 lg:mb-6 border border-orange-500/20">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Serving Texas & Beyond
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4 lg:mb-6 tracking-tight">
                Building Bridges,<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Connecting Futures.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                From heavy-duty bridges to excavation and waterfront seawalls. Cody Johnson and the Highland Bridge Co. team deliver rugged, engineered solutions built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold h-14 px-8 text-lg rounded-xl">
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-slate-400 h-14 px-8 text-lg rounded-xl">
                  <PhoneCall className="mr-2 w-5 h-5" /> (214) 668-6311
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Comprehensive bridge construction, excavation, marine, and civil engineering services tailored to your land's unique challenges.</p>
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
                <Card className="bg-slate-950 border-slate-800 overflow-hidden group hover:border-orange-500/50 transition-colors h-full">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10" />
                    <img src={service.img} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <CardContent className="p-6 md:p-8">
                     <div className="w-12 h-12 bg-orange-950/50 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                        {service.icon}
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Highland Bridge Co.</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Founded and led by Cody Johnson, Highland Bridge Co. is a full-service bridge and construction company based in Texas with over 20 years of experience. We specialize in building custom, heavy-duty bridges engineered to handle the toughest loads — installed anywhere in the United States.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-10">Bridge Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Weight Capacity', value: 'Up to 300,000 lbs' },
                { label: 'Bridge Length', value: "10' to 180' long" },
                { label: 'Bridge Width', value: "Up to 24' wide" },
                { label: 'Railing Designs', value: '20+ options' },
              ].map((spec, i) => (
                <div key={i} className="text-center p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <p className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">{spec.value}</p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider">{spec.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div {...fadeIn} className="p-6">
              <div className="w-12 h-12 mx-auto bg-orange-950/50 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                <Truck className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Made in the U.S.A.</h3>
              <p className="text-slate-400">Every bridge is proudly built in the United States. We install anywhere in the country — from Texas to coast to coast.</p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.1}} className="p-6">
              <div className="w-12 h-12 mx-auto bg-orange-950/50 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                <Construction className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Color Options</h3>
              <p className="text-slate-400">Available in Black, Brown, White, Grey, Green, and Patina finishes to match your property's aesthetic perfectly.</p>
            </motion.div>
            
            <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.2}} className="p-6">
              <div className="w-12 h-12 mx-auto bg-orange-950/50 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                <Waves className="text-orange-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">20+ Railing Designs</h3>
              <p className="text-slate-400">Choose from over 20 different railing designs to customize the look and safety features of your bridge installation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-slate-800">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Expertise You Can Build On.</h2>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Whether you need a heavy-duty bridge for your ranch, a reliable seawall to protect your shoreline, or excavation work done right, Highland Bridge Co. brings the machinery and 20+ years of experience to get it done the first time.
              </p>
              <ul className="space-y-4 mb-10">
                {['20+ Years of Experience', 'Heavy Machinery Fleet', 'Custom Engineering Solutions', 'Free On-site Estimates'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-orange-500 w-6 h-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="bg-slate-900 border-slate-700 shadow-2xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">Request an Estimate</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-slate-950 border-slate-800 text-white" />
                    <Input placeholder="Last Name" className="bg-slate-950 border-slate-800 text-white" />
                  </div>
                  <Input placeholder="Phone or Email" className="bg-slate-950 border-slate-800 text-white" />
                  <Textarea placeholder="Project Description..." className="bg-slate-950 border-slate-800 text-white h-32 resize-none" />
                  <Button className="w-full h-14 mt-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold rounded-xl">
                    Submit Request
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Construction className="text-orange-500 w-6 h-6" />
            <span className="text-xl font-bold text-white">Highland Bridge Co.</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Highland Bridge Co. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/Highland-Bridge-Co-100086236734310/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
            <a href="http://www.myrailcarbridge.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
