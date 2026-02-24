/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Route, 
  ShieldCheck, 
  Briefcase, 
  Zap, 
  GraduationCap, 
  HeartPulse, 
  Leaf, 
  ArrowRight, 
  Share2, 
  Twitter, 
  Instagram, 
  Facebook,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

const AGENDA_POINTS = [
  {
    id: 1,
    title: "LIGHTS ON OGUN",
    subtitle: "A World-Class Road Infrastructure Plan",
    icon: Route,
    description: "Ogun State sits at the gateway of Nigeria's most critical trade corridors — yet our roads tell a different story. Under OTO's administration, we will execute a comprehensive rehabilitation and expansion of all major highways, arterial roads, and last-mile routes connecting our industrial clusters, markets, and communities. From the Sagamu-Ore expressway corridor to intra-city roads in Abeokuta, Ijebu-Ode, Ota, and Agbara — no road will be left behind. A well-connected Ogun is an unstoppable Ogun."
  },
  {
    id: 2,
    title: "SAFE STATE, STRONG ECONOMY",
    subtitle: "Security as the Foundation for FDI",
    icon: ShieldCheck,
    description: "No investor puts money where they fear for their life or assets. OTO's administration will establish a Ogun State Security Trust Fund, modernize the Ogun State Vigilante Network, deploy smart surveillance infrastructure across industrial zones, and collaborate with federal security agencies to guarantee a zero-tolerance environment for crime. Security is not just a social policy — it is our number one business policy. A safe Ogun is an investable Ogun."
  },
  {
    id: 3,
    title: "OGUN OPEN FOR BUSINESS",
    subtitle: "Attracting Local and Foreign Direct Investment",
    icon: Briefcase,
    description: "Ogun State already hosts the largest concentration of manufacturing industries in Nigeria — over 50% of the nation's factories call us home. OTO will build on this edge by creating a One-Stop Investment Centre, slashing bureaucratic red tape, offering competitive tax incentives, and personally leading trade missions to attract FDI from the UK, UAE, China, and the diaspora. We will position Ogun as West Africa's premier investment destination."
  },
  {
    id: 4,
    title: "POWER TO THE PEOPLE",
    subtitle: "Energy Infrastructure for Homes and Industry",
    icon: Zap,
    description: "Businesses cannot thrive and families cannot prosper in darkness. OTO will pursue aggressive public-private partnerships to deliver stable, affordable electricity across Ogun State — prioritizing industrial corridors in Agbara, Sagamu, and Ota, while also pushing solar-powered mini-grids to rural communities. We will work with NERC and the DisCos to hold power providers accountable. Ogun will no longer accept darkness as a way of life."
  },
  {
    id: 5,
    title: "HUMAN CAPITAL REVOLUTION",
    subtitle: "Education, Skills & Youth Empowerment",
    icon: GraduationCap,
    description: "The next generation of Ogun's workforce must be ready for a modern economy. OTO will invest in STEM education, vocational training centres, and a Ogun Youth Tech Hub to build a pipeline of job-ready, globally competitive talent. We will partner with industries already operating in Ogun to create structured internship and apprenticeship pipelines, turning our youth from job-seekers into job-creators."
  },
  {
    id: 6,
    title: "HEALTHY OGUN",
    subtitle: "Accessible and Functional Healthcare for All",
    icon: HeartPulse,
    description: "Health is wealth — and Ogun's people deserve more than dilapidated primary health centres and distant referral hospitals. OTO will upgrade 100 primary healthcare centres in the first two years, establish at least two new General Hospitals in underserved zones, and launch a Ogun State Health Insurance Scheme to make quality care affordable for every family regardless of income. A healthy workforce is a productive workforce."
  },
  {
    id: 7,
    title: "GREEN AND SMART OGUN",
    subtitle: "Environmental Sustainability & Urban Planning",
    icon: Leaf,
    description: "As Ogun grows as a commercial powerhouse, we must grow responsibly. OTO's administration will enforce smart urban planning policies, protect our waterways and forests from illegal encroachment, and pioneer a Ogun Green Economy Initiative that incentivizes clean industries and sustainable agriculture. We will also invest in waste management infrastructure for Abeokuta and other fast-growing urban centres. Growth without sustainability is destruction — we will do both, and do them right."
  }
];

const AboutPage = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl sticky top-32">
              <img 
                src="https://storage.googleapis.com/m-infra.appspot.com/public/images/429d2012-0498-472d-9669-e0b575677943.jpg" 
                className="w-full h-full object-cover" 
                alt="Otunba Dr. Adetunji Oredipe" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-ogun-green font-bold uppercase tracking-widest text-sm mb-4 block">Governorship Aspirant 2027</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Meet Otunba Dr. Adetunji Adeleke Oredipe</h1>
            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-ogun-gold pl-6 mb-8">
              "Leadership is about service to the people. Ogun State is the gateway to Nigeria's prosperity, and it is time we open that gate wide for every citizen."
            </p>
            <div className="space-y-8 text-slate-700 leading-relaxed">
              <p>
                Otunba (Dr) Adetunji Adeleke Oredipe was born in 1961. He hails paternally from Oke-Eri Ijebu and maternally from Odo Legan near Erunwon, both in Ogun State, Nigeria.
              </p>
              
              <section>
                <h2 className="text-2xl font-serif font-bold text-ogun-green uppercase tracking-wider mb-4 border-b border-ogun-gold/30 pb-2">Education</h2>
                <p>
                  Dr. Oredipe attended College of Agriculture Akure, University of Ife (now Obafemi Awolowo University), University of Bradford, United Kingdom and later to the University of Ibadan for his masters. He enrolled at Wye College, University of London, United Kingdom and later at the University of Ibadan for his Ph.D in Agricultural Economics. He also attended Maastricht School of Management, the Netherlands.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ogun-green uppercase tracking-wider mb-4 border-b border-ogun-gold/30 pb-2">Career & Professional Excellence</h2>
                <div className="space-y-4">
                  <p>
                    Dr Oredipe served as consultant to many national and international organizations. He successfully completed his term as the National Coordinator of the famous Second National Fadama Development Project (FADAMA II), one of the biggest externally financed projects in Nigeria.
                  </p>
                  <p>
                    In recognition of his outstanding achievements, the Federal Government appointed him as the National Coordinator of another important National Project—Multinational Nerica Rice Dissemination Project. Within one week of assumption of duty, the World Bank appointed him as the Senior Operation Officer at the Nigeria Country Office.
                  </p>
                  <p>
                    Between 2011 and 2013, he served as the Senior Technical Adviser to the Honourable Minister of Agriculture and Rural Development (Dr. Akinwunmi Adesina) with a mandate to spearhead the Agricultural Transformation Agenda. He is currently the Task Team Leader of five different projects in Nigeria, Liberia, and Sierra-Leone, presently on international posting at the World Bank Office in Freetown.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ogun-green uppercase tracking-wider mb-4 border-b border-ogun-gold/30 pb-2">Awards & Recognition</h2>
                <p>
                  The Second National Fadama development Project, which he managed, was declared the best in Africa by the World Bank. He has received several awards, including the Best Worker Award (2002), Award of Excellence (2007), and the Vice President’s Unit Award (2017) for his work on North-East Nigeria Recovery and Peace Building.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ogun-green uppercase tracking-wider mb-4 border-b border-ogun-gold/30 pb-2">Impact to Ijebuland Economy</h2>
                <div className="space-y-4">
                  <p>
                    Dr Oredipe established <strong>Abisola Hotel & Suites</strong>, <strong>Legan Hall Event Centre</strong> and <strong>A&G Event Centre</strong> to boost hospitality business, <strong>Fadreb Petroleum</strong>, <strong>Fadreb Farms</strong> and <strong>Cassava Processing Centre</strong>, all located within the Ijebu territory.
                  </p>
                  <p>
                    In his capacity as the National Coordinator of Fadama Project, in addition to spreading the dividends of Fadama Project to many communities in Ijebu land, he also supported Ijebu Development Initiative on Poverty Reduction.
                  </p>
                  <p>
                    He has invested in road networks, Water supply projects, Installation of Transformers, educational support services and support for mechanized farming through establishment of Tractor Hiring Centre.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ogun-green uppercase tracking-wider mb-4 border-b border-ogun-gold/30 pb-2">Community Recognition</h2>
                <p>
                  Dr Oredipe is the <strong>Baba Egbe of Egbe Jagunmolu</strong>, Akile Ijebu. His prestigious titles include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mt-4">
                  <li>• Otunba Atayese of Noforija Kingdom, Epe</li>
                  <li>• Otunba Atunluse of Ago-shasha</li>
                  <li>• Otunba Asoludero of Erunwon</li>
                  <li>• Asiwaju of Ijari</li>
                  <li>• Otunba Bobaselu of Iworo</li>
                  <li>• Otunba Bobaselu of Ise Community, Ibeju, Lekki</li>
                  <li>• Maiyederun Bobagunte, Akile Ijebu</li>
                  <li>• Otunba Moyegeso of Ago-Iwoye</li>
                  <li>• Otunba Legan of Ijebu</li>
                  <li>• ASIWAJU of Oke Eri</li>
                </ul>
                <p className="mt-4 italic">
                  Dr Oredipe holds an additional 20 Chieftaincy Titles in twenty other States in Nigeria.
                </p>
              </section>

              <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h2 className="text-2xl font-serif font-bold text-ogun-green uppercase tracking-wider mb-4">Valued Experience</h2>
                <p className="mb-6">
                  Dr Oredipe is a seasoned technocrat, an accomplished scholar, and a fine Officer of the Federal Republic of Nigeria. He is a grassroots, philanthropic, and patriotic leader who has made a significant difference in the lives of ordinary Nigerians.
                </p>
                <p className="text-2xl font-serif font-bold text-slate-900 italic text-center">
                  HE IS THE MOST QUALIFIED TO PILOT OGUN STATE TO THE NEXT LEVEL.
                </p>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'about'>('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showWpGuide, setShowWpGuide] = React.useState(false);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for re-render then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent("Check out OTO's 7-Point Agenda for a New Ogun! Our Time, Ogun. OTO 2027. " + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-ogun-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-ogun-green rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                O
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-ogun-green">
                OTO <span className="text-ogun-gold">2027</span>
                <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-[10px] rounded font-sans align-middle">APC</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => setCurrentPage('home')} className={`text-sm font-semibold hover:text-ogun-green transition-colors ${currentPage === 'home' ? 'text-ogun-green' : ''}`}>Home</button>
              <button onClick={navigateToAbout} className={`text-sm font-semibold hover:text-ogun-green transition-colors ${currentPage === 'about' ? 'text-ogun-green' : ''}`}>About OTO</button>
              <button onClick={() => scrollToSection('agenda')} className="text-sm font-semibold hover:text-ogun-green transition-colors">The Agenda</button>
              <button onClick={() => scrollToSection('movement')} className="text-sm font-semibold hover:text-ogun-green transition-colors">The Movement</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold hover:text-ogun-green transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('movement')}
                className="bg-ogun-green text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-ogun-green/20"
              >
                Join Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4"
          >
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="text-left font-semibold py-2">Home</button>
            <button onClick={navigateToAbout} className="text-left font-semibold py-2">About OTO</button>
            <button onClick={() => scrollToSection('agenda')} className="text-left font-semibold py-2">The Agenda</button>
            <button onClick={() => scrollToSection('movement')} className="text-left font-semibold py-2">The Movement</button>
            <button onClick={() => scrollToSection('contact')} className="text-left font-semibold py-2">Contact</button>
            <button 
              onClick={() => scrollToSection('movement')}
              className="bg-ogun-green text-white px-6 py-3 rounded-xl text-center font-bold"
            >
              Join the Movement
            </button>
          </motion.div>
        )}
      </nav>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 z-0 hidden lg:block" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-ogun-green/5 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-ogun-gold/5 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-black tracking-widest uppercase">
                    APC
                  </span>
                  <span className="h-px w-8 bg-slate-200"></span>
                  <span className="text-ogun-green text-sm font-bold tracking-widest uppercase">
                    Our Time, Ogun.
                  </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 leading-[0.9] mb-8">
                  ASIWAJU <br />
                  <span className="text-ogun-green">DR. ADETUNJI</span> <br />
                  <span className="text-slate-900">OREDIPE.</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-xl mb-10 font-light leading-relaxed border-l-4 border-ogun-gold pl-6">
                  A New Vision. A Stronger Ogun. <br />
                  <span className="font-semibold text-slate-900">Built for Business, Built for People.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={() => scrollToSection('agenda')}
                    className="w-full sm:w-auto bg-ogun-green text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl shadow-ogun-green/30 flex items-center justify-center gap-2"
                  >
                    The 7-Point Agenda <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('movement')}
                    className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:border-ogun-gold hover:text-ogun-gold transition-all"
                  >
                    Join the Movement
                  </button>
                </div>

                <div className="mt-12 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Political Party</span>
                    <span className="text-sm font-bold text-slate-900">All Progressives Congress</span>
                  </div>
                  <div className="h-8 w-px bg-slate-200"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-1">Election Year</span>
                    <span className="text-sm font-bold text-slate-900">Ogun 2027</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-ogun-gold rounded-[2rem] z-0" />
                
                <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img 
                    src="https://storage.googleapis.com/m-infra.appspot.com/public/images/99342738-96f3-4e89-9a2e-463806a54687.jpg"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    alt="Asiwaju Dr. Adetunji Oredipe"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-ogun-green rounded-full flex items-center justify-center text-white font-serif font-bold">O</div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Governorship Aspirant</p>
                        <p className="text-sm font-bold text-slate-900">Ogun State 2027</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ogun-green/10 rounded-full blur-2xl -z-10" />
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-200 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Meet the Candidate Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://storage.googleapis.com/m-infra.appspot.com/public/images/805e263c-3932-411a-85d0-992226210f03.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Asiwaju Dr. Adetunji Oredipe" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ogun-gold rounded-full -z-0 flex items-center justify-center p-8 text-white text-center font-serif italic font-bold leading-tight">
                "Leadership is about service to the people."
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-ogun-green font-bold uppercase tracking-widest text-sm mb-4 block">The Man, The Vision</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Meet Asiwaju Dr. Adetunji Oredipe</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Asiwaju Dr. Adetunji Oredipe is a seasoned professional and a visionary leader with a deep-rooted passion for the development of Ogun State. With decades of experience in both the public and private sectors, he brings a unique blend of technical expertise and grassroots connection.
                </p>
                <p>
                  As a proud member of the All Progressives Congress (APC), Asiwaju is committed to the party's progressive ideals. His vision for Ogun is built on the pillars of infrastructure, security, and economic prosperity for every citizen.
                </p>
                <p className="font-semibold text-slate-900">
                  "Ogun State is the gateway to Nigeria's prosperity. It is time we open that gate wide for every son and daughter of this great state."
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                 <button 
                   onClick={navigateToAbout}
                   className="bg-ogun-green text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
                 >
                   Read Full Biography
                 </button>
                 <div className="flex gap-4 items-center">
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-ogun-green">20+</span>
                      <span className="text-xs font-bold text-slate-400 uppercase">Years Experience</span>
                   </div>
                   <div className="w-px h-12 bg-slate-200"></div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-bold text-ogun-green">7</span>
                      <span className="text-xs font-bold text-slate-400 uppercase">Point Agenda</span>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7-Point Agenda Section */}
      <section id="agenda" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">The 7-Point Transformation Agenda</h2>
            <div className="w-24 h-1.5 bg-ogun-gold mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A strategic roadmap designed to unlock Ogun State's full potential as Nigeria's industrial and economic powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AGENDA_POINTS.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className={`group p-8 rounded-3xl transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2 bg-ogun-green text-white' : 'bg-white hover:shadow-2xl'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  index === 0 ? 'bg-white/20 text-white' : 'bg-ogun-green/10 text-ogun-green'
                }`}>
                  <point.icon size={28} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-black uppercase tracking-widest ${
                    index === 0 ? 'text-ogun-gold' : 'text-ogun-gold'
                  }`}>
                    Point {point.id}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1">{point.title}</h3>
                <p className={`text-sm font-semibold mb-4 uppercase tracking-wide ${
                  index === 0 ? 'text-white/80' : 'text-slate-400'
                }`}>
                  {point.subtitle}
                </p>
                <p className={`leading-relaxed ${
                  index === 0 ? 'text-white/90' : 'text-slate-600'
                }`}>
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">A Leader for All Seasons</h2>
              <p className="text-lg text-slate-600">
                From the boardroom to the grassroots, Asiwaju Dr. Adetunji Oredipe embodies the spirit of Ogun — professional, cultural, and deeply committed to the people.
              </p>
            </div>
            <div className="flex gap-2">
               <span className="w-12 h-1 bg-ogun-green rounded-full"></span>
               <span className="w-4 h-1 bg-ogun-gold rounded-full"></span>
               <span className="w-4 h-1 bg-ogun-gold rounded-full"></span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/429d2012-0498-472d-9669-e0b575677943.jpg" className="w-full h-full object-cover" alt="Candidate in Suit" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/4096055d-2490-449a-8e27-920f06f5279f.jpg" className="w-full h-full object-cover" alt="Candidate in Blue Native" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/30718507-619f-442c-a690-09328220800e.jpg" className="w-full h-full object-cover" alt="Candidate in Orange Native" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/99447a16-9289-44e2-9653-73f62803b967.jpg" className="w-full h-full object-cover" alt="Candidate in Purple Native" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/4914f620-3330-4e08-9993-471206121639.jpg" className="w-full h-full object-cover" alt="Candidate in Red Native" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/79261a8f-2838-4033-a611-6650428d0992.jpg" className="w-full h-full object-cover" alt="Candidate in Traditional Attire" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/99342738-96f3-4e89-9a2e-463806a54687.jpg" className="w-full h-full object-cover" alt="Candidate Portrait" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8"
            >
              <img src="https://storage.googleapis.com/m-infra.appspot.com/public/images/805e263c-3932-411a-85d0-992226210f03.jpg" className="w-full h-full object-cover" alt="Candidate Meeting" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section id="movement" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-ogun-green z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-ogun-gold/10 skew-x-12 translate-x-1/4" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">
              "This is not just a manifesto. <br />
              <span className="text-ogun-gold">This is a movement.</span>"
            </h2>
            <div className="mb-10 flex justify-center">
               <img 
                 src="https://storage.googleapis.com/m-infra.appspot.com/public/images/79261a8f-2838-4033-a611-6650428d0992.jpg"
                 className="w-64 h-64 object-cover rounded-2xl border-4 border-white/20 shadow-2xl"
                 alt="Asiwaju Adetunji Oredipe in Traditional Attire"
                 referrerPolicy="no-referrer"
               />
            </div>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ogun deserves leadership that matches its potential. Asiwaju Dr. Adetunji Oredipe (OTO) is that leadership. Join thousands of citizens committed to a stronger, safer, and more prosperous Ogun under the APC banner.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-white text-ogun-green px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all">
                Join OTO's Movement
              </button>
              <button 
                onClick={handleWhatsAppShare}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-ogun-green transition-all flex items-center justify-center gap-3"
              >
                <Share2 size={24} /> Share This Vision
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Have questions or want to volunteer? Our team is ready to hear from you. Let's build the Ogun of our dreams together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ogun-green/10 rounded-full flex items-center justify-center text-ogun-green">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-lg font-semibold text-slate-900">+234 (0) 800 OTO 2027</p>
                  </div>
                </div>
                {/* Add more contact info as needed */}
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-ogun-green focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-ogun-green focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-ogun-green focus:border-transparent outline-none transition-all" placeholder="How can you help the movement?"></textarea>
                </div>
                <button className="w-full bg-ogun-green text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-ogun-green/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
      ) : (
        <AboutPage />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-ogun-green rounded-full flex items-center justify-center text-white font-serif font-bold">O</div>
                <span className="font-serif font-bold text-xl">OTO <span className="text-ogun-gold">2027</span></span>
              </div>
              <p className="text-slate-400 max-w-xs">
                Asiwaju Dr. Adetunji Oredipe for Governor. <br />
                All Progressives Congress (APC) <br />
                Ogun State Transformation Project.
              </p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-ogun-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-ogun-green transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-ogun-green transition-colors"><Facebook size={20} /></a>
              <button 
                onClick={handleWhatsAppShare}
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-ogun-green transition-colors"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 OTO Campaign Organization. All rights reserved.</p>
            <button 
              onClick={() => setShowWpGuide(!showWpGuide)}
              className="text-ogun-gold font-bold hover:underline"
            >
              {showWpGuide ? "Hide WordPress Guide" : "WordPress & Elementor Export Guide"}
            </button>
            <p className="font-serif italic text-lg text-white/30">"Our Time, Ogun."</p>
          </div>

          {showWpGuide && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 p-8 bg-white/5 rounded-3xl border border-white/10 text-left"
            >
              <h3 className="text-2xl font-serif font-bold text-white mb-4">WordPress & Elementor Integration Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">
                <div>
                  <h4 className="font-bold text-ogun-gold mb-2">1. Custom Theme Method</h4>
                  <p className="text-sm mb-4">I have generated a <code className="text-white bg-white/10 px-1 rounded">/wordpress-template</code> folder in the file tree. To use it:</p>
                  <ul className="list-disc list-inside text-sm space-y-2">
                    <li>Create a new folder in <code className="text-white">wp-content/themes/oto2027</code></li>
                    <li>Upload the generated <code className="text-white">style.css</code>, <code className="text-white">functions.php</code>, etc.</li>
                    <li>Activate the theme in your WP Dashboard.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-ogun-gold mb-2">2. Elementor Method</h4>
                  <p className="text-sm mb-4">To use this design inside an existing Elementor site:</p>
                  <ul className="list-disc list-inside text-sm space-y-2">
                    <li>Open the file <code className="text-white">elementor-agenda-widget.html</code>.</li>
                    <li>Copy the code and paste it into an <strong>Elementor HTML Widget</strong>.</li>
                    <li>Ensure Tailwind CSS is loaded (I've included a CDN link in the guide).</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </footer>
    </div>
  );
}
