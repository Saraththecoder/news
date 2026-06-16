import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockProducts } from "@/utils/mockData";
import { ShoppingCart } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function MarketplacePage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp} className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Marketplace</h1>
          <p className="text-muted-foreground mt-2">Support causes by purchasing sustainable products.</p>
        </div>
        <button className="bg-white border rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors">
          <ShoppingCart className="w-4 h-4" />
          Cart (0)
        </button>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <div className="h-48 relative overflow-hidden bg-slate-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 group-hover:text-destructive transition-colors">{product.name}</h3>
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-xl">${product.price.toFixed(2)}</span>
                <button className="bg-secondary text-white p-2 rounded-lg hover:bg-destructive transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
