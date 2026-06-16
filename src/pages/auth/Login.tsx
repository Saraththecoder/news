import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen flex w-full font-sans">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 bg-[#011638] text-white flex-col justify-between p-12 lg:p-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} 
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-destructive/30 rounded-full blur-[120px]"
           />
           <motion.div 
             animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }} 
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
             className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] bg-blue-600/30 rounded-full blur-[150px]"
           />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <Link to="/" className="inline-block">
            <img src="/logo.png" alt="SOCIAL NEWS" className="h-10 w-auto object-contain" />
          </Link>
          <div className="w-8 h-1 bg-destructive mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-lg mt-24 mb-auto"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Where information meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8B8B] to-destructive">impact.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-md font-light">
            Join a global network of civic leaders. Access real-time campaign data, verify impact stories, and drive social change through informed action.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 flex items-center gap-4 mt-12"
        >
          <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
             <img src="https://i.pravatar.cc/150?u=a" alt="User" className="w-10 h-10 rounded-full border-2 border-[#011638] shadow-md transition-transform hover:scale-110" />
             <img src="https://i.pravatar.cc/150?u=b" alt="User" className="w-10 h-10 rounded-full border-2 border-[#011638] shadow-md transition-transform hover:scale-110" />
             <img src="https://i.pravatar.cc/150?u=c" alt="User" className="w-10 h-10 rounded-full border-2 border-[#011638] shadow-md transition-transform hover:scale-110" />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-white/90">Join 12,000+ Leaders</span>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col p-8 lg:p-24 relative overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md mx-auto flex flex-col h-full"
        >
          
          <Link to="/" className="lg:hidden flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors mb-8 -mt-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex bg-slate-100/80 backdrop-blur-md p-1 rounded-lg mb-16 shadow-sm border">
            <Link to="/login" className="flex-1 text-center py-2.5 bg-white shadow-md rounded-md text-sm font-semibold text-secondary">
              Log In
            </Link>
            <Link to="/register" className="flex-1 text-center py-2.5 text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Register
            </Link>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-secondary mb-3 tracking-tight">Welcome Back</h2>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Access your portal to track impact stories and ongoing campaigns.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-secondary mb-2 uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                defaultValue="name@organization.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/70 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-secondary uppercase tracking-wider">Password</label>
                <a href="#" className="text-[10px] font-bold text-destructive hover:underline uppercase tracking-wider">Forgot password?</a>
              </div>
              <input 
                type="password" 
                defaultValue="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white/70 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all font-mono tracking-widest shadow-sm"
              />
            </div>

            <div className="flex items-center gap-2 pt-2 pb-4">
              <input type="checkbox" id="keepLogged" className="w-4 h-4 rounded border-border text-secondary focus:ring-secondary/20 transition-all cursor-pointer" />
              <label htmlFor="keepLogged" className="text-sm text-foreground cursor-pointer select-none">Keep me logged in for 30 days</label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-secondary text-white font-bold py-3.5 rounded-lg transition-all shadow-lg hover:shadow-secondary/30 relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative">Access Dashboard</span>
            </motion.button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-slate-50 px-4 font-bold text-foreground/50 uppercase tracking-widest backdrop-blur-sm">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.button whileHover={{ y: -2 }} className="flex items-center justify-center gap-2 bg-white border border-border py-2.5 rounded-lg text-sm font-semibold text-secondary hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
              Google
            </motion.button>
            <motion.button whileHover={{ y: -2 }} className="flex items-center justify-center gap-2 bg-white border border-border py-2.5 rounded-lg text-sm font-semibold text-secondary hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              SSO
            </motion.button>
          </div>

          <div className="mt-auto pt-12 text-center">
            <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3">Secured by Enterprise Protocol 4.0</p>
            <div className="flex justify-center gap-4 text-[11px] font-medium text-foreground/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Information</a>
              <a href="#" className="hover:text-secondary transition-colors">Help Center</a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
