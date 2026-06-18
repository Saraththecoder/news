import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { mockUser } from "@/utils/mockData";
import { Download } from "lucide-react";

export default function IdCardPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    
    try {
      setIsDownloading(true);
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null
      });
      
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `IDCard_${mockUser.id}.png`;
      link.click();
    } catch (error) {
      console.error("Error generating ID card:", error);
      alert("Failed to download ID card. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-secondary mb-2">Digital ID Card</h1>
        <p className="text-foreground/60 max-w-md mx-auto">
          Download your official digital ID card to verify your identity at local events and campaigns.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-3xl shadow-xl border border-border/50 relative mb-8 overflow-x-auto max-w-full">
        
        <div 
          ref={cardRef} 
          className="w-[350px] h-[550px] rounded-2xl overflow-hidden relative shadow-2xl bg-white flex flex-col"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="h-32 bg-gradient-to-br from-primary to-secondary relative flex items-center justify-center">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="z-10 text-center">
               <h2 className="text-white font-black text-2xl tracking-widest">SOCIAL NEWS</h2>
               <p className="text-white/80 text-xs font-medium uppercase tracking-[0.2em] mt-1">Official Volunteer</p>
            </div>
            
            <div className="absolute -bottom-4 w-full h-8 bg-white rounded-t-[50%]"></div>
          </div>

          <div className="flex justify-center -mt-10 relative z-20 mb-4">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
              <img src={mockUser.avatar} alt={mockUser.name} className="w-full h-full object-cover" crossOrigin="anonymous" />
            </div>
          </div>

          <div className="flex-1 px-6 text-center flex flex-col">
            <h3 className="text-2xl font-black text-secondary mb-1">{mockUser.name}</h3>
            <p className="text-destructive font-bold text-sm uppercase tracking-widest mb-4">{mockUser.role}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-auto mb-6 text-left border-y border-slate-100 py-4">
               <div>
                  <p className="text-[10px] text-foreground/50 font-bold uppercase">ID Number</p>
                  <p className="text-sm font-bold text-secondary">{mockUser.id}</p>
               </div>
               <div>
                  <p className="text-[10px] text-foreground/50 font-bold uppercase">Level</p>
                  <p className="text-sm font-bold text-secondary">{mockUser.level}</p>
               </div>
            </div>

            <div className="mt-auto mb-6 flex justify-center items-center flex-col gap-2">
               <div className="w-24 h-24 bg-slate-100 p-2 border border-slate-200 rounded">
                  <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SOCIALNEWS-USR-001')] bg-contain bg-no-repeat bg-center opacity-80 mix-blend-multiply" />
               </div>
               <p className="text-[9px] text-foreground/40 font-mono tracking-widest">SCAN TO VERIFY</p>
            </div>
          </div>
          
          <div className="h-2 w-full bg-gradient-to-r from-destructive via-warning to-success"></div>
        </div>
      </div>

      <button 
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDownloading ? "Generating..." : "Download ID Card"} <Download className="w-5 h-5" />
      </button>

    </div>
  );
}
