import { Link } from "react-router-dom";
import { mockCampaigns, mockProducts, mockEvents } from "@/utils/mockData";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#011638] text-white pt-24 pb-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-destructive rounded-full blur-[120px]"
           />
           <motion.div 
             animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }} 
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[150px]"
           />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Empowering Action, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B8B] to-destructive">
                Inspiring Change.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light">
              SOCIAL NEWS is a global platform that connects volunteers, tracks real-time impact, and empowers communities to drive sustainable change.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link to="/login" className="bg-destructive hover:bg-destructive/90 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-destructive/30 hover:shadow-destructive/50 hover:-translate-y-1 flex items-center gap-2">
                Join the Movement <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW / COLLECTIVE REACH */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl border p-8 md:p-12 -mt-40 relative z-20 backdrop-blur-xl bg-white/90"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-12 text-center">Our Collective Reach</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
              <div className="text-center group">
                <p className="text-5xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">12K+</p>
                <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Active Leaders</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl font-black text-destructive mb-2 group-hover:scale-110 transition-transform duration-500">342</p>
                <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Ongoing Campaigns</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">8.2K</p>
                <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Verified Certificates</p>
              </div>
              <div className="text-center group">
                <p className="text-5xl font-black text-destructive mb-2 group-hover:scale-110 transition-transform duration-500">$4.8M</p>
                <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest">Funds Raised</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CAMPAIGNS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex justify-between items-end mb-12">
              <div>
                <motion.span variants={fadeUp} className="text-destructive font-bold tracking-widest uppercase text-sm mb-2 block">Take Action</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">Featured Campaigns</motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link to="/campaigns" className="text-secondary font-bold hover:text-destructive transition-colors flex items-center gap-1 group">
                  View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockCampaigns.slice(0, 3).map((campaign) => (
                <motion.div 
                  variants={fadeUp}
                  key={campaign.id} 
                  className="bg-white border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {campaign.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-secondary mb-2 group-hover:text-destructive transition-colors">{campaign.title}</h3>
                    <p className="text-sm text-foreground/70 mb-6 line-clamp-2">{campaign.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-secondary">Progress</span>
                        <span className="text-destructive">{campaign.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${campaign.progress}%` }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                          className="bg-destructive h-full rounded-full"
                        />
                      </div>
                    </div>
                    <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 rounded-xl transition-colors">
                      Support Campaign
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* UPCOMING EVENTS TIMELINE */}
      <section className="py-24 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
           >
              <div className="text-center mb-16">
                <motion.span variants={fadeUp} className="text-destructive font-bold tracking-widest uppercase text-sm mb-2 block">Get Involved</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-secondary">Upcoming Events</motion.h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                 {mockEvents.map((event) => (
                    <motion.div 
                      variants={fadeUp}
                      key={event.id} 
                      className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center gap-6 hover:shadow-md transition-shadow group cursor-pointer"
                    >
                       <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-xl flex flex-col items-center justify-center shrink-0 group-hover:bg-destructive group-hover:border-destructive transition-colors">
                          <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest group-hover:text-white/80">{event.date.split(' ')[0]}</span>
                          <span className="text-2xl font-black text-secondary group-hover:text-white">{event.date.split(' ')[1]}</span>
                       </div>
                       <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-[10px] font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded uppercase tracking-wider">{event.type}</span>
                             <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest">Virtual/In-Person</span>
                          </div>
                          <h3 className="font-bold text-lg text-secondary group-hover:text-destructive transition-colors">{event.title}</h3>
                       </div>
                       <div>
                          <button className="hidden md:flex items-center gap-1 text-sm font-bold text-secondary group-hover:text-destructive transition-colors">
                             Register <ChevronRight className="w-4 h-4" />
                          </button>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* MARKETPLACE HIGHLIGHT */}
      <section className="py-24 bg-[#011638] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <motion.span variants={fadeUp} className="text-[#FF8B8B] font-bold tracking-widest uppercase text-sm mb-2 block">Impact Store</motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Support Through Merch</motion.h2>
                <motion.p variants={fadeUp} className="text-white/70 text-lg font-light">Every purchase directly funds community projects and verified social initiatives.</motion.p>
              </div>
              <motion.div variants={fadeUp}>
                <Link to="/marketplace" className="bg-white hover:bg-slate-100 text-secondary font-bold py-3 px-6 rounded-lg transition-colors inline-block">
                  Shop Collection
                </Link>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.slice(0,4).map((product) => (
                <motion.div variants={fadeUp} key={product.id} className="group relative">
                  <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden relative mb-4">
                     <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                     <div className="absolute top-3 right-3 bg-[#011638]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10">
                       ${product.price}
                     </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-[#FF8B8B] transition-colors">{product.name}</h3>
                    <p className="text-xs text-white/50 uppercase tracking-widest">Merchandise</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
