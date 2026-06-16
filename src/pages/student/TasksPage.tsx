import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockTasks } from "@/utils/mockData";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function TasksPage() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case "APPROVED": return <CheckCircle2 className="w-5 h-5 text-success" />;
      case "IN_PROGRESS": return <Clock className="w-5 h-5 text-warning" />;
      case "SUBMITTED": return <CheckCircle2 className="w-5 h-5 text-blue-500" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl font-extrabold tracking-tight">Your Tasks</h1>
        <p className="text-muted-foreground mt-2">Complete assignments to earn impact points and level up.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="divide-y">
          {mockTasks.map((task) => (
            <div key={task.id} className="p-5 flex items-start gap-4 hover:bg-slate-50 transition-colors">
              <div className="mt-1">{getStatusIcon(task.status)}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-base">{task.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    task.priority === 'High' ? 'bg-destructive/10 text-destructive' :
                    task.priority === 'Medium' ? 'bg-warning/10 text-warning-foreground' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="text-secondary bg-secondary/5 px-2 py-1 rounded">
                    +{task.points} Points
                  </span>
                  <span className="text-muted-foreground">Status: {task.status.replace('_', ' ')}</span>
                </div>
              </div>
              <button className="text-sm font-semibold bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                {task.status === "PENDING" ? "Start Task" : "View"}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
