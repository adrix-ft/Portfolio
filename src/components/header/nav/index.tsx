import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { config } from "@/data/config";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, ArrowUpRight } from "lucide-react";
import { sofiaSansCondensed, splineSansMono, greatVibes } from "@/lib/fonts";
import { links } from "@/components/header/config";

const menuSlide = {
  initial: { x: "100%" },
  enter: { x: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

const fade = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const textSlide = {
  initial: { opacity: 0, x: 40 },
  enter: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 + (i * 0.1), ease: [0.33, 1, 0.68, 1] } }),
  exit: { opacity: 0, x: 40, transition: { duration: 0.2 } }
};

const lineSlide = {
  initial: { opacity: 0, y: "20%", scale: 2 },
  enter: (i: number) => ({ 
    opacity: 1, 
    y: "0%", 
    scale: 1, 
    transition: { duration: 0.8, delay: 0.6 + (i * 0.1), ease: [0.16, 1, 0.3, 1] } 
  }),
  exit: { opacity: 0, y: "20%", scale: 1.1, transition: { duration: 0.3 } }
};

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

const Index = ({ setIsActive }: IndexProps) => {
  const [currentHref, setCurrentHref] = useState("/");
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentHref(window.location.pathname + window.location.hash);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 w-full h-[100svh] flex flex-col md:flex-row z-[10000] bg-[#0A0A0A]"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {/* Left Panel (White) */}
      <div className="hidden md:flex w-[60%] h-full bg-white rounded-r-[40px] p-12 flex-col justify-center relative overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full w-full">
           <h2 className="text-black text-[38px] xl:text-[42px] leading-[56px] xl:leading-[64px] font-bold font-sans uppercase text-center tracking-tight flex flex-col items-center gap-2">
                <motion.div custom={0} variants={lineSlide} initial="initial" animate="enter" exit="exit" className="flex items-center justify-center flex-wrap pt-2">
                  HELLO, I&apos;M <span className={cn("text-black/90 text-[56px] xl:text-[64px] leading-none font-normal normal-case ml-1", greatVibes.className)}>Adarsh</span>
                </motion.div>
                <motion.div custom={1} variants={lineSlide} initial="initial" animate="enter" exit="exit" className="flex items-center justify-center flex-wrap">
                  A <Image src="/laptop.webp" alt="Laptop" width={90} height={48} className="inline-block rounded-full align-middle mx-3 shadow-sm object-cover h-[42px] w-[75px] lg:h-[48px] lg:w-[90px]" /> SOFTWARE DEVELOPER
                </motion.div>
                <motion.div custom={2} variants={lineSlide} initial="initial" animate="enter" exit="exit" className="flex items-center justify-center flex-wrap">
                  WHO <span className="inline-flex items-center justify-center bg-[#8b5cf6] text-white rounded-full w-[42px] h-[42px] lg:w-[48px] lg:h-[48px] align-middle mx-3 shadow-sm"><ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} /></span> CRAFTS <span className={cn("text-black/90 text-[56px] xl:text-[64px] leading-none font-normal normal-case mx-2 lowercase", greatVibes.className)}>creative</span>
                </motion.div>
                <motion.div custom={3} variants={lineSlide} initial="initial" animate="enter" exit="exit" className="flex items-center justify-center flex-wrap">
                  DIGITAL <Image src="/abstract.webp" alt="Abstract" width={90} height={48} className="inline-block rounded-full align-middle mx-3 shadow-sm object-cover h-[42px] w-[75px] lg:h-[48px] lg:w-[90px]" /> EXPERIENCES
                </motion.div>
           </h2>
        </div>
      </div>

      {/* Right Panel (Black) */}
      <div className="w-full md:w-[40%] h-full p-8 md:p-12 md:pl-16 flex flex-col justify-between relative">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsActive(false)}
          className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer z-50"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Links */}
        <div className="flex flex-col mt-16 md:mt-24">
          <p className="text-zinc-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8">Sitemap</p>
          <div className="flex flex-col gap-2 md:gap-4">
            {links.map((link, i) => {
              // Exact match or partial match for hash links
              const isMatch = currentHref === link.href || (currentHref === '/' && link.href === '/#hero');
              return (
              <Link 
                key={i} 
                href={link.href}
                onClick={() => setIsActive(false)}
                className="group w-fit overflow-hidden"
              >
                <motion.span 
                  custom={i}
                  variants={textSlide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className={cn(
                    "text-[36px] leading-[40px] md:text-[48px] md:leading-[48px] font-light md:font-medium font-sans tracking-wide transition-transform duration-300 inline-block group-hover:translate-x-4", 
                    isMatch ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {link.title}
                </motion.span>
              </Link>
            )})}
            {/* Bouncing Luffy Graphic */}
            <motion.div 
              className="mt-12 md:mt-16 pointer-events-none"
              style={{ transformOrigin: "bottom center" }}
              initial={{ y: 0, scaleY: 1, scaleX: 1 }}
              animate={{ 
                y: [0, -40, 0], 
                scaleY: [0.9, 1.05, 0.9],
                scaleX: [1.1, 0.95, 1.1],
                filter: [
                  "drop-shadow(0px 0px 10px rgba(255,255,255,0.2))",
                  "drop-shadow(0px 0px 25px rgba(255,255,255,0.6))",
                  "drop-shadow(0px 0px 10px rgba(255,255,255,0.2))"
                ]
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: ["easeOut", "easeIn"] }}
            >
              <Image src="/luffy.png" alt="Luffy" width={120} height={120} className="w-[140px] md:w-[180px] h-auto object-contain ml-2" />
            </motion.div>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-auto">
          <motion.div variants={fade} initial="initial" animate="enter" exit="exit">
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">Follow</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href={config.social.github} target="_blank" className="text-white/70 hover:text-white text-[12px] leading-[16px] font-bold font-sans uppercase tracking-[0.2em] transition-colors">Github</a>
              <a href={config.social.linkedin} target="_blank" className="text-white/70 hover:text-white text-[12px] leading-[16px] font-bold font-sans uppercase tracking-[0.2em] transition-colors">LinkedIn</a>
              <a href={config.social.instagram} target="_blank" className="text-white/70 hover:text-white text-[12px] leading-[16px] font-bold font-sans uppercase tracking-[0.2em] transition-colors">Instagram</a>
              <a href={`mailto:${config.email}`} className="text-white/70 hover:text-white text-[12px] leading-[16px] font-bold font-sans uppercase tracking-[0.2em] transition-colors">Email</a>
            </div>
          </motion.div>
          
          <motion.div variants={fade} initial="initial" animate="enter" exit="exit" className="flex items-center gap-6 pt-6 border-t border-white/10 relative">
             <Link href="#contact" onClick={() => setIsActive(false)} className="text-white/70 hover:text-white text-[12px] leading-[16px] font-bold font-sans uppercase tracking-[0.2em] transition-colors">Get in touch</Link>
             <Link href="https://docs.google.com/document/d/1KKt95Nb4_d_sik6flxJL03f-sZgrDkRJ4Txq6vtgHQg/edit?tab=t.0#heading=h.vhytaeubzzj5" target="_blank" className="text-white/70 hover:text-white text-[12px] leading-[16px] font-bold font-sans uppercase tracking-[0.2em] transition-colors">Resume</Link>
          </motion.div>
        </div>



      </div>
    </motion.div>
  );
};

export default Index;
