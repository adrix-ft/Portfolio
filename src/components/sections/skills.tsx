import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SKILLS = [
  { name: "React", logo: "react.svg", category: "User interfaces", color: "#00d8ff" },
  { name: "Node.js", logo: "nodejs.svg", category: "Server-side JavaScript", color: "#3c873a" },
  { name: "Express.js", logo: "express.svg", category: "Backend development", color: "#a3a3a3" },
  { name: "JavaScript", logo: "javascript.svg", category: "Web development", color: "#f7df1e" },
  { name: "TypeScript", logo: "typescript.svg", category: "Typed development", color: "#007acc" },
  { name: "HTML5", logo: "html5.svg", category: "Web foundations", color: "#e34f26" },
  { name: "Tailwind CSS", logo: "tailwindcss.svg", category: "Interface styling", color: "#38b2ac" },
  { name: "Vite", logo: "vitejs.svg", category: "Build tools", color: "#646cff" },
  { name: "MySQL", logo: "mysql.svg", category: "Databases", color: "#00758f" },
  { name: "Supabase", logo: "supabase.svg", category: "Backend as a Service", color: "#3ecf8e" },
];

const CassetteWheel = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("animate-spin", className)} style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}>
    <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e5e5e5" strokeWidth="4" />
    <circle cx="50" cy="50" r="25" fill="#f4f4f5" />
    <path d="M 50 5 L 50 35 M 89 27.5 L 63 42.5 M 89 72.5 L 63 57.5 M 50 95 L 50 65 M 11 72.5 L 37 57.5 M 11 27.5 L 37 42.5" stroke="#e5e5e5" strokeWidth="8" strokeLinecap="round" />
    <circle cx="50" cy="50" r="12" fill="#ffffff" />
  </svg>
);

const CassetteCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <div className="relative flex flex-col items-center group w-[220px] sm:w-[320px] md:w-[420px] m-4 sm:m-6">
      {/* Hanging string */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[140px] sm:w-[200px] h-[48px] z-0">
        <svg viewBox="0 0 100 50" className="w-full h-full stroke-neutral-400 stroke-[1.5] fill-none drop-shadow-sm">
          <path d="M 5 50 L 50 10 L 95 50" />
          <circle cx="50" cy="10" r="4" className="fill-neutral-600 stroke-none" />
          <circle cx="48" cy="8" r="1.5" className="fill-white stroke-none opacity-60" />
        </svg>
      </div>
      
      {/* Cassette Body */}
      <div className="relative w-full aspect-[1.58] transition-transform duration-700 ease-out origin-[50%_-48px] group-hover:rotate-3 group-hover:-translate-y-1 z-10">
        
        {/* Wheels at z-0 */}
        <div className="absolute top-[39%] left-[23.5%] w-[17%] h-[27%] z-0 flex items-center justify-center">
          <CassetteWheel className="w-full h-full drop-shadow-sm" />
        </div>
        <div className="absolute top-[39%] right-[23.5%] w-[17%] h-[27%] z-0 flex items-center justify-center">
          <CassetteWheel className="w-full h-full drop-shadow-sm" />
        </div>

        {/* Color Tint Background (Behind Image) */}
        <div 
          className="absolute inset-0 z-10 opacity-100" 
          style={{ 
            backgroundColor: skill.color,
            WebkitMaskImage: 'url(/assets/skills/cassette-shell-560.webp)',
            WebkitMaskSize: '100% 100%',
            maskImage: 'url(/assets/skills/cassette-shell-560.webp)',
            maskSize: '100% 100%'
          }}
        ></div>

        {/* Cassette Image (unoptimized) */}
        <Image 
          src="/assets/skills/cassette-shell-560.webp" 
          alt="Cassette" 
          fill 
          unoptimized
          sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, 420px"
          className="object-cover z-20 pointer-events-none drop-shadow-2xl" 
        />
        
        {/* Color Overlay (Over Image, for extra vibrancy on the plastic) */}
        <div 
          className="absolute inset-0 z-25 pointer-events-none mix-blend-overlay opacity-60" 
          style={{ 
            backgroundColor: skill.color,
            WebkitMaskImage: 'url(/assets/skills/cassette-shell-560.webp)',
            WebkitMaskSize: '100% 100%',
            maskImage: 'url(/assets/skills/cassette-shell-560.webp)',
            maskSize: '100% 100%'
          }}
        ></div>
        
        {/* Content on the top sticker */}
        <div className="absolute top-[16%] left-[10%] w-[80%] h-[24%] z-30 flex items-center justify-between px-3 sm:px-4">
          <div className="w-[20px] h-[20px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px] relative shrink-0">
            <Image src={`/assets/skills/${skill.logo}`} alt={skill.name} fill className="object-contain" />
          </div>
          <span className="font-serif text-base sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight truncate px-2">{skill.name}</span>
          <span className="text-[7px] sm:text-[10px] md:text-xs font-mono text-gray-600 font-bold leading-tight text-right shrink-0">A<br/>{index + 1}</span>
        </div>
        
        {/* Category on the bottom sticker */}
        <div className="absolute bottom-[16%] left-[15%] w-[70%] h-[12%] z-30 flex items-center justify-center">
          <span className="font-serif text-[8px] sm:text-xs md:text-sm font-semibold text-gray-800 tracking-wider truncate">{skill.category}</span>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="w-full min-h-screen relative flex flex-col items-center justify-center py-32 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: ` 
        @keyframes grain-jiggle {
          0%, 100% { background-position: 0 0; }
          20% { background-position: 10px 15px; }
          40% { background-position: -15px -20px; }
          60% { background-position: 5px -10px; }
          80% { background-position: -5px 15px; }
        }
        .animate-grain {
          animation: grain-jiggle 0.4s steps(2) infinite;
        }
      ` }} />
      <div 
        className="absolute inset-0 z-0 opacity-100 dark:opacity-30 animate-grain" 
        style={{ 
          backgroundImage: 'url(/assets/live-grain.webp)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }} 
      />
      <div className="z-10 w-full max-w-[95vw] lg:max-w-[1400px] px-4 flex flex-col items-center">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-5xl text-center text-transparent md:text-8xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              Skills.
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 mb-16 sm:mb-24 font-serif text-xl sm:text-3xl text-center text-neutral-600 dark:text-neutral-300 tracking-wide">
          The tools behind the work.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 sm:gap-y-24 sm:gap-x-12 md:gap-y-32">
          {SKILLS.map((skill, i) => (
            <CassetteCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


