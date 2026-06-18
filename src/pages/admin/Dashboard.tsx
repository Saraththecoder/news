import { 
  Users, 
  Megaphone, 
  HeartHandshake, 
  ShoppingCart,
  Calendar,
  FileDown,
  Globe,
  Plus,
  MoreVertical,
  Store,
  Settings,
  GraduationCap
} from "lucide-react";
import { mockAdminUsers } from "@/utils/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CountUpImport from "react-countup";

// Handle Vite CJS interop issue for react-countup
const CountUp = (CountUpImport as any).default || CountUpImport;

const analyticsData = [
  { name: 'JAN', users: 4000, donations: 2400 },
  { name: 'FEB', users: 3000, donations: 1398 },
  { name: 'MAR', users: 2000, donations: 9800 },
  { name: 'APR', users: 2780, donations: 3908 },
  { name: 'MAY', users: 1890, donations: 4800 },
  { name: 'JUN', users: 2390, donations: 3800 },
  { name: 'JUL', users: 3490, donations: 4300 },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AdminDashboard() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-7xl mx-auto space-y-8"
    >
      
      {/* Header */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Analytics Overview</h1>
          <p className="text-sm text-foreground/70 mt-1">Real-time performance metrics across Social News ecosystem.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-border hover:bg-slate-50 text-secondary font-semibold text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-sm hover:shadow">
            <Calendar className="w-4 h-4" /> Last 30 Days
          </button>
          <button className="bg-destructive hover:bg-destructive/90 text-white font-semibold text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            <FileDown className="w-4 h-4" /> Export PDF
          </button>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-secondary">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">+12.5% ↗</span>
          </div>
          <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Total Users</p>
          <h3 className="text-3xl font-extrabold text-secondary"><CountUp end={1248302} duration={2.5} separator="," /></h3>
        </motion.div>

        <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
              <Megaphone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">+4.2% ↗</span>
          </div>
          <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Active Campaigns</p>
          <h3 className="text-3xl font-extrabold text-secondary"><CountUp end={342} duration={2} /></h3>
        </motion.div>

        <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-secondary">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">+28.1% ↗</span>
          </div>
          <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Total Donations</p>
          <h3 className="text-3xl font-extrabold text-secondary">$<CountUp end={4.82} decimals={2} duration={2} />M</h3>
        </motion.div>

        <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="bg-white p-6 rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-secondary">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">-2.4% ↘</span>
          </div>
          <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Marketplace Orders</p>
          <h3 className="text-3xl font-extrabold text-secondary"><CountUp end={12501} duration={2.5} separator="," /></h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth & Platform Activity */}
        <motion.div variants={fadeUp} className="lg:col-span-2 bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-bold text-secondary mb-1 tracking-tight">Growth & Platform Activity</h3>
              <p className="text-[11px] text-foreground/60">User engagement and donation trends over time</p>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-bold text-foreground/60 uppercase tracking-wider">
               <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-sm bg-[#cbd5e1]"></div> Users</div>
               <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-sm bg-[#fecdd3]"></div> Donations</div>
            </div>
          </div>
          <div className="h-[250px] w-full mt-4">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }} 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="users" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={32} />
                  <Bar dataKey="donations" fill="#fecdd3" radius={[4, 4, 0, 0]} barSize={32} />
                </BarChart>
              </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Global Impact */}
        <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#011B4A] to-secondary rounded-2xl shadow-xl p-6 text-white relative overflow-hidden flex flex-col group">
          <Globe className="absolute -right-12 -top-12 w-48 h-48 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000" />
          <h3 className="font-bold mb-6 relative z-10 flex items-center gap-2 tracking-tight">
             <Globe className="w-5 h-5 text-white/80" /> Global Impact
          </h3>
          
          <div className="space-y-6 relative z-10 flex-1">
             <div className="group/item cursor-pointer">
                <p className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-1 group-hover/item:text-white/80 transition-colors">Campaign Updated</p>
                <h4 className="font-bold text-base mb-2">Clean Water for Sahel</h4>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-1 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: '82%' }} transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-white h-full rounded-full" 
                  />
                </div>
                <p className="text-[10px] text-right font-bold"><CountUp end={82} duration={2} />% Funded</p>
             </div>

             <div className="pt-4 border-t border-white/10 group/item cursor-pointer">
                <p className="text-[9px] font-black text-destructive uppercase tracking-widest mb-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-ping absolute"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive relative"></span>
                  Urgent Call
                </p>
                <h4 className="font-bold text-base mb-2 text-white/90">Forest Restoration Initiative</h4>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden mb-1 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: '45%' }} transition={{ duration: 1.5, delay: 0.7 }}
                    className="bg-destructive h-full rounded-full" 
                  />
                </div>
                <p className="text-[10px] text-right font-bold text-white/70"><CountUp end={45} duration={2} />% Funded</p>
             </div>
          </div>

          <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-white text-secondary font-bold text-[11px] py-3 rounded-lg mt-6 transition-all shadow-lg hover:shadow-xl relative z-10">
            View All Impacts
          </motion.button>
        </motion.div>
      </div>

      {/* User Management */}
      <motion.div variants={fadeUp} className="bg-white rounded-2xl border shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h3 className="font-bold text-secondary mb-1 tracking-tight">User Management</h3>
            <p className="text-[11px] text-foreground/60">Manage accounts, permissions, and leadership roles.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input type="text" placeholder="Filter users..." className="flex-1 sm:w-64 px-4 py-2 bg-slate-50 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-secondary/20 transition-all" />
            <motion.button whileHover={{ y: -2 }} className="bg-secondary text-white font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg shrink-0">
              <Plus className="w-4 h-4" /> Add Admin
            </motion.button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar pb-2">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b text-[10px] font-black text-foreground/40 uppercase tracking-widest">
                <th className="pb-3 px-2">User</th>
                <th className="pb-3 px-2">Role</th>
                <th className="pb-3 px-2">Status</th>
                <th className="pb-3 px-2">Impact Points</th>
                <th className="pb-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {mockAdminUsers.map((user, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + (i * 0.1) }}
                  key={user.id} 
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/5 text-secondary flex items-center justify-center font-bold text-[10px] border border-secondary/10 shadow-sm">
                        {user.initials}
                      </div>
                      <div>
                        <p className="font-bold text-secondary text-xs">{user.name}</p>
                        <p className="text-[10px] text-foreground/50">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span className="bg-slate-100 text-secondary text-[10px] font-black px-2 py-1 rounded shadow-sm">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-foreground/60 uppercase tracking-widest">
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-success shadow-[0_0_5px_rgba(22,163,74,0.5)]' : 'bg-warning shadow-[0_0_5px_rgba(234,179,8,0.5)]'}`}></div>
                      {user.status}
                    </div>
                  </td>
                  <td className="py-3 px-2 text-secondary font-black text-xs">
                    {user.impactPoints.toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-right relative">
                    <button className="p-1.5 hover:bg-slate-200 rounded-md text-foreground/50 transition-colors">
                      <MoreVertical className="w-3.5 h-3.5" />
                    </button>
                    {user.id === '1' && (
                       <motion.button 
                         whileHover={{ scale: 1.1, rotate: 90 }}
                         className="absolute top-1/2 -translate-y-1/2 right-12 w-7 h-7 bg-destructive text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
                       >
                          <Plus className="w-3 h-3" />
                       </motion.button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
           <p className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest">Showing 3 of 1,248,302 users</p>
           <div className="flex gap-1.5">
             <button className="w-7 h-7 rounded border flex items-center justify-center text-foreground/30 bg-slate-50" disabled>&lt;</button>
             <button className="w-7 h-7 rounded border flex items-center justify-center text-secondary hover:bg-slate-100 shadow-sm transition-colors">&gt;</button>
           </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Website CMS */}
         <motion.div variants={fadeUp} className="bg-white rounded-2xl border shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-secondary flex items-center gap-2">
                 <Settings className="w-4 h-4 text-secondary/60" /> Website CMS
              </h3>
              <span className="text-[9px] font-black text-success bg-success/10 px-2 py-0.5 rounded shadow-sm uppercase tracking-wider">Synced</span>
            </div>
            
            <div className="space-y-3">
               <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between items-center p-3 rounded-xl border bg-slate-50/50 shadow-sm cursor-pointer transition-all hover:bg-slate-50">
                  <span className="text-xs font-bold text-secondary">Hero Banner 1</span>
                  <button className="text-[9px] font-black text-destructive hover:underline uppercase tracking-wider">Edit</button>
               </motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between items-center p-3 rounded-xl border bg-slate-50/50 shadow-sm cursor-pointer transition-all hover:bg-slate-50">
                  <span className="text-xs font-bold text-secondary">Impact Counter</span>
                  <button className="text-[9px] font-black text-destructive hover:underline uppercase tracking-wider">Edit</button>
               </motion.div>
               <motion.button whileHover={{ scale: 1.02 }} className="w-full border-2 border-dashed border-border py-3 rounded-xl text-[10px] font-black text-foreground/40 hover:bg-slate-50 hover:text-secondary hover:border-secondary/30 transition-all flex items-center justify-center gap-1.5">
                 <Plus className="w-3 h-3" /> ADD SECTION
               </motion.button>
            </div>
         </motion.div>

         {/* Education Bank */}
         <motion.div variants={fadeUp} className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-secondary flex items-center gap-2 mb-6">
               <GraduationCap className="w-4 h-4 text-secondary/60" /> Education Bank
            </h3>
            <div className="flex gap-4 mb-6">
               <motion.div whileHover={{ y: -2 }} className="flex-1 bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl p-4 text-center border shadow-sm">
                  <h4 className="text-3xl font-black text-secondary"><CountUp end={124} duration={2} /></h4>
                  <p className="text-[9px] font-black text-foreground/50 uppercase tracking-widest mt-1">Quizzes</p>
               </motion.div>
               <motion.div whileHover={{ y: -2 }} className="flex-1 bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl p-4 text-center border shadow-sm">
                  <h4 className="text-3xl font-black text-secondary"><CountUp end={8.2} decimals={1} duration={2} />k</h4>
                  <p className="text-[9px] font-black text-foreground/50 uppercase tracking-widest mt-1">Certificates</p>
               </motion.div>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-secondary text-white font-bold text-[11px] py-3 rounded-xl mt-auto shadow-md hover:shadow-lg transition-all">
               Question Editor
            </motion.button>
         </motion.div>

         {/* Donation Tracking */}
         <motion.div variants={fadeUp} className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col">
            <h3 className="font-bold text-secondary flex items-center gap-2 mb-6">
               <HeartHandshake className="w-4 h-4 text-secondary/60" /> Donation Tracking
            </h3>
            
            <div className="space-y-6 mb-8">
               <div className="group cursor-pointer">
                 <div className="flex justify-between text-[10px] font-black mb-2">
                   <span className="text-foreground/50 uppercase tracking-widest group-hover:text-secondary transition-colors">Operation Costs</span>
                   <span className="text-secondary">12%</span>
                 </div>
                 <div className="w-full bg-slate-100 rounded-full h-2 shadow-inner">
                   <motion.div initial={{ width: 0 }} whileInView={{ width: '12%' }} transition={{ duration: 1.5 }} className="bg-slate-300 h-full rounded-full" />
                 </div>
               </div>
               <div className="group cursor-pointer">
                 <div className="flex justify-between text-[10px] font-black mb-2">
                   <span className="text-secondary uppercase tracking-widest">Direct Impact</span>
                   <span className="text-destructive">88%</span>
                 </div>
                 <div className="w-full bg-slate-100 rounded-full h-2 shadow-inner">
                   <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} transition={{ duration: 1.5 }} className="bg-gradient-to-r from-destructive to-[#FF8B8B] h-full rounded-full shadow-[0_0_10px_rgba(227,6,19,0.4)]" />
                 </div>
               </div>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-white border border-border text-secondary font-bold text-[11px] py-3 rounded-xl mt-auto hover:bg-slate-50 transition-all shadow-sm hover:shadow">
               Full Financial Breakdown
            </motion.button>
         </motion.div>
      </div>

      {/* Marketplace Management */}
      <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#eff4fb] to-white rounded-2xl border border-blue-100 shadow-sm p-6 pb-8">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="font-bold text-secondary text-lg mb-0.5 tracking-tight">Marketplace Management</h3>
              <p className="text-[11px] text-foreground/60">Global inventory and merchandising for social causes.</p>
            </div>
            <div className="bg-white px-4 py-2.5 rounded-xl shadow-sm border flex items-center gap-3">
              <span className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">Revenue Today:</span>
              <span className="font-black text-destructive text-lg">$<CountUp end={12402} duration={2} separator="," />.00</span>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
               <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-center h-[100px] cursor-pointer hover:border-secondary/20 transition-all">
                  <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Active Listings</p>
                  <h3 className="text-3xl font-extrabold text-secondary"><CountUp end={1402} duration={2} separator="," /></h3>
               </motion.div>
               <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-5 rounded-xl border shadow-sm flex flex-col justify-center h-[100px] cursor-pointer hover:border-destructive/20 transition-all">
                  <p className="text-[9px] font-black text-foreground/40 uppercase tracking-widest mb-1">Orders Pending</p>
                  <h3 className="text-3xl font-extrabold text-destructive"><CountUp end={84} duration={2} /></h3>
               </motion.div>
               <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-secondary text-white font-bold text-[11px] py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <Store className="w-4 h-4" /> Add Product
               </motion.button>
            </div>

            <div className="md:col-span-2 bg-white rounded-xl border shadow-sm p-6">
               <h4 className="text-xs font-black text-foreground/50 uppercase tracking-widest mb-4">Top Selling Items</h4>
               <div className="space-y-4">
                  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-border hover:bg-slate-50/50 transition-all cursor-pointer">
                     <div className="w-14 h-14 rounded-lg bg-slate-100 border overflow-hidden shadow-sm">
                       <img src="https://picsum.photos/seed/tshirt/150/150" alt="T-Shirt" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1">
                        <h5 className="text-sm font-bold text-secondary leading-tight">Impact T-Shirt v2</h5>
                        <p className="text-[9px] text-foreground/40 font-mono tracking-widest mt-1">SKU: SN-TSH-002</p>
                     </div>
                     <div className="text-right bg-slate-50 px-3 py-2 rounded-lg border">
                        <p className="text-[11px] font-black text-secondary">482 Sales</p>
                        <p className="text-[9px] font-black text-success mt-0.5">+$4,820.00</p>
                     </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-border hover:bg-slate-50/50 transition-all cursor-pointer">
                     <div className="w-14 h-14 rounded-lg bg-slate-100 border overflow-hidden shadow-sm">
                       <img src="https://picsum.photos/seed/mug/150/150" alt="Mug" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1">
                        <h5 className="text-sm font-bold text-secondary leading-tight">Unity Ceramic Mug</h5>
                        <p className="text-[9px] text-foreground/40 font-mono tracking-widest mt-1">SKU: SN-MUG-015</p>
                     </div>
                     <div className="text-right bg-slate-50 px-3 py-2 rounded-lg border">
                        <p className="text-[11px] font-black text-secondary">315 Sales</p>
                        <p className="text-[9px] font-black text-success mt-0.5">+$2,520.00</p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </motion.div>

    </motion.div>
  );
}
