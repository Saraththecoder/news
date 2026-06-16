import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockCertificates } from "@/utils/mockData";
import { Award, Share2, Download } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CertificatesPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl font-extrabold tracking-tight">Your Certificates</h1>
        <p className="text-muted-foreground mt-2">Verified records of your civic achievements and training.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCertificates.map((cert) => (
          <div key={cert.id} className="bg-gradient-to-br from-secondary to-[#011B4A] rounded-2xl shadow-lg p-8 relative overflow-hidden text-white flex flex-col justify-between aspect-[1.6/1]">
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
              <Award className="w-32 h-32" />
            </div>
            
            <div className="relative z-10">
              <img src="/logo.png" alt="SOCIAL NEWS" className="h-6 w-auto object-contain opacity-90 invert brightness-0 mb-6" />
              <h4 className="text-white/60 text-xs font-bold tracking-widest uppercase mb-1">Certificate of Completion</h4>
              <h2 className="text-2xl font-extrabold">{cert.title}</h2>
            </div>
            
            <div className="relative z-10 flex justify-between items-end">
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Verified Date</p>
                <p className="font-mono text-sm">{cert.verifiedDate}</p>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
