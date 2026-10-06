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

const CassetteCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <div className="relative flex flex-col items-center group w-[180px] sm:w-[260px] md:w-[300px] m-4">
      {/* Hanging string */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[100px] sm:w-[140px] h-[32px] z-0">
        <svg viewBox="0 0 100 50" className="w-full h-full stroke-gray-400 stroke-[2] fill-none drop-shadow-sm">
          <path d="M 5 50 L 50 10 L 95 50" />
          <circle cx="50" cy="10" r="5" className="fill-gray-600 stroke-none" />
          <circle cx="48" cy="8" r="2" className="fill-white stroke-none opacity-60" />
        </svg>
      </div>
      
      {/* Cassette Body */}
      <div className="relative w-full aspect-[1.58] rounded-md sm:rounded-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-2 z-10 overflow-hidden">
        
        {/* Cassette Image (unoptimized to allow animated webp to play) */}
        <Image 
          src="/assets/skills/cassette-shell-560.webp" 
          alt="Cassette" 
          fill 
          unoptimized
          sizes="(max-width: 640px) 180px, (max-width: 768px) 260px, 300px"
          className="object-cover z-10 pointer-events-none drop-shadow-md" 
        />
        
        {/* Color Tint Overlay (placed over the image to tint the plastic) */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-80" 
          style={{ backgroundColor: skill.color }}
        ></div>
        <div 
          className="absolute inset-0 z-20 pointer-events-none mix-blend-color opacity-30" 
          style={{ backgroundColor: skill.color }}
        ></div>
        
        {/* Content on the top sticker */}
        <div className="absolute top-[16%] left-[10%] w-[80%] h-[24%] z-30 flex items-center justify-between px-2">
          <div className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] relative shrink-0">
            <Image src={`/assets/skills/${skill.logo}`} alt={skill.name} fill className="object-contain" />
          </div>
          <span className="font-serif text-sm sm:text-xl md:text-2xl font-bold text-gray-800 tracking-tight truncate px-2">{skill.name}</span>
          <span className="text-[6px] sm:text-[9px] font-mono text-gray-600 font-bold leading-tight text-right shrink-0">A<br/>{index + 1}</span>
        </div>
        
        {/* Category on the bottom sticker */}
        <div className="absolute bottom-[16%] left-[15%] w-[70%] h-[12%] z-30 flex items-center justify-center">
          <span className="font-serif text-[7px] sm:text-[11px] md:text-xs font-semibold text-gray-800 tracking-wider truncate">{skill.category}</span>
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="w-full min-h-screen relative flex flex-col items-center justify-center py-24 overflow-hidden"
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
      <div className="z-10 w-full max-w-6xl px-4 flex flex-col items-center">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              Skills.
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-2 sm:mt-4 mb-12 sm:mb-20 font-serif text-lg sm:text-2xl text-center text-neutral-600 dark:text-neutral-300 tracking-wide">
          The tools behind the work.
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 sm:gap-y-16 sm:gap-x-12 md:gap-y-20">
          {SKILLS.map((skill, i) => (
            <CassetteCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

