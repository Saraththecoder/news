import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockCampaigns } from "@/utils/mockData";
import { Users } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CampaignsPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl font-extrabold tracking-tight">Active Campaigns</h1>
        <p className="text-muted-foreground mt-2">Discover and join campaigns making a real-world impact.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCampaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white rounded-2xl border shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="h-48 relative overflow-hidden">
              <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {campaign.tag && (
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {campaign.tag}
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 group-hover:text-destructive transition-colors">{campaign.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{campaign.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-destructive">${campaign.collected.toLocaleString()}</span>
                  <span className="text-muted-foreground">Goal: ${campaign.goal.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-destructive rounded-full" style={{ width: `${campaign.progress}%` }}></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {campaign.participants} Participants
                </div>
                <button className="text-sm font-semibold text-secondary hover:text-destructive transition-colors">
                  View Details &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
