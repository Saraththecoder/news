import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockDonations } from "@/utils/mockData";
import { HeartHandshake, ShieldCheck } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DonationsPage() {
  return (
    <div className="py-12 px-8 md:px-16">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeUp} className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-secondary mb-4">Transparent Giving</h1>
          <p className="text-lg text-muted-foreground">We believe in absolute transparency. View recent live donations fueling our global impact campaigns.</p>
        </motion.div>

        <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border shadow-lg overflow-hidden relative">
            <div className="p-8 bg-secondary text-white text-center">
               <ShieldCheck className="w-12 h-12 mx-auto mb-4 opacity-50" />
               <h2 className="text-2xl font-bold mb-2">100% Public Audit Log</h2>
               <p className="text-secondary-foreground/70 text-sm">Every transaction is recorded and verified.</p>
            </div>
            <div className="p-0">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-8 py-5 text-muted-foreground font-semibold">Transaction Hash</th>
                    <th className="px-8 py-5 text-muted-foreground font-semibold">Campaign Focus</th>
                    <th className="px-8 py-5 text-muted-foreground font-semibold">Date</th>
                    <th className="px-8 py-5 text-right text-muted-foreground font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockDonations.map((donation, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-5 font-mono text-xs text-muted-foreground flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-success"></div>
                         TX-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </td>
                      <td className="px-8 py-5 font-bold text-secondary">{donation.campaign}</td>
                      <td className="px-8 py-5 text-muted-foreground">{donation.date}</td>
                      <td className="px-8 py-5 font-black text-lg text-success text-right">${donation.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                  {/* Generate some extra dummy rows for the public log */}
                  {[1, 2, 3, 4, 5].map((_, idx) => (
                    <tr key={`dummy-${idx}`} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-5 font-mono text-xs text-muted-foreground flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-success"></div>
                         TX-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </td>
                      <td className="px-8 py-5 font-bold text-secondary">Global Education Fund</td>
                      <td className="px-8 py-5 text-muted-foreground">Just now</td>
                      <td className="px-8 py-5 font-black text-lg text-success text-right">${(Math.random() * 500 + 10).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 border-t text-center">
               <button className="text-secondary font-bold hover:text-primary transition-colors text-sm flex items-center gap-2 mx-auto">
                 <HeartHandshake className="w-4 h-4" /> Make a Direct Donation
               </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
