import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PublicLayout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Campaigns", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Marketplace", path: "/marketplace" },
    { label: "Donations", path: "/donations" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <header className="w-full h-[72px] bg-background border-b flex items-center justify-between px-6 md:px-16 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="SOCIAL NEWS" className="h-8 w-auto object-contain" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link 
                key={item.label} 
                to={item.path} 
                className={`pb-1 ${isActive ? "text-destructive border-b-2 border-destructive" : "hover:text-primary transition-colors"}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-primary">Log In</Link>
          <Link to="/register" className="bg-destructive text-destructive-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-destructive/90 transition-colors">
            Join Campaign
          </Link>
        </div>
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-50 flex flex-col px-6 py-6 md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/logo.png" alt="SOCIAL NEWS" className="h-8 w-auto object-contain" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-xl font-bold">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
                return (
                  <Link 
                    key={item.label} 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${isActive ? "text-destructive" : "text-foreground"}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            
            <div className="mt-auto pt-12 flex flex-col gap-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold py-3 border rounded-lg">Log In</Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="text-center font-bold py-3 bg-destructive text-white rounded-lg">Join Campaign</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>

      <footer className="w-full bg-secondary text-white pt-16 pb-8 px-8 md:px-16 mt-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="bg-white/10 p-2 rounded-lg inline-block mb-4">
              <img src="/logo.png" alt="SOCIAL NEWS" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed pr-4">
              Empowering global citizens to create local change through information, resources, and community action.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-70 hover:opacity-100 cursor-pointer">
                 <span className="text-xs">fb</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-70 hover:opacity-100 cursor-pointer">
                 <span className="text-xs">tw</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xs tracking-wider mb-6 text-white/50">PLATFORM</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/" className="hover:text-white transition-colors">Campaigns</Link></li>
              <li><Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/donations" className="hover:text-white transition-colors">Impact Report</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs tracking-wider mb-6 text-white/50">ORGANIZATION</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Press Kit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xs tracking-wider mb-6 text-white/50">LEGAL</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2024 SOCIAL NEWS. All rights reserved. Empowerment through information.</p>
          <p className="mt-4 md:mt-0">System Status: <span className="text-success font-medium">All Systems Operational</span></p>
        </div>
      </footer>
    </div>
  );
}
