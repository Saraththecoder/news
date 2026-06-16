import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockDonations } from "@/utils/mockData";
import { Download } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function DonationsPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl font-extrabold tracking-tight">Donation History</h1>
        <p className="text-muted-foreground mt-2">Track your financial impact and download receipts.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-muted-foreground font-semibold">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Campaign</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {mockDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{donation.id}</td>
                  <td className="px-6 py-4 font-medium">{donation.campaign}</td>
                  <td className="px-6 py-4">{donation.date}</td>
                  <td className="px-6 py-4 font-bold text-success">${donation.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-secondary hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
