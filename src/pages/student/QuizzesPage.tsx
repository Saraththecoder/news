import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { mockQuizzes } from "@/utils/mockData";
import { BookOpen, Lock, CheckCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function QuizzesPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-3xl font-extrabold tracking-tight">Learning Modules</h1>
        <p className="text-muted-foreground mt-2">Complete quizzes to unlock specialized certificates.</p>
      </motion.div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockQuizzes.map((quiz) => (
          <div key={quiz.id} className={`bg-white rounded-2xl border shadow-sm p-6 relative overflow-hidden transition-all ${quiz.status === 'LOCKED' ? 'opacity-75 grayscale bg-slate-50' : 'hover:shadow-md'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                quiz.status === 'COMPLETED' ? 'bg-success/10 text-success' :
                quiz.status === 'LOCKED' ? 'bg-slate-200 text-slate-400' :
                'bg-secondary/10 text-secondary'
              }`}>
                {quiz.status === 'LOCKED' ? <Lock className="w-5 h-5" /> : 
                 quiz.status === 'COMPLETED' ? <CheckCircle className="w-5 h-5" /> : 
                 <BookOpen className="w-5 h-5" />}
              </div>
              {quiz.score && (
                <div className="text-xs font-bold bg-success/10 text-success px-2 py-1 rounded">
                  Score: {quiz.score}%
                </div>
              )}
            </div>
            
            <h3 className="font-bold text-lg mb-2">{quiz.title}</h3>
            <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{quiz.description}</p>
            
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xs font-medium text-muted-foreground">{quiz.questions} Questions</span>
              <button 
                disabled={quiz.status === 'LOCKED'}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                  quiz.status === 'LOCKED' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' :
                  quiz.status === 'COMPLETED' ? 'bg-success/10 text-success hover:bg-success/20' :
                  'bg-destructive text-white hover:bg-destructive/90'
                }`}
              >
                {quiz.status === 'COMPLETED' ? 'Review' : quiz.status === 'LOCKED' ? 'Locked' : 'Start Quiz'}
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
