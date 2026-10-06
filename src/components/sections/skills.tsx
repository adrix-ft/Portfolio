import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SKILLS = [
  { name: "React", logo: "react.svg", category: "User interfaces", color: "bg-[#00d8ff]" },
  { name: "Node.js", logo: "nodejs.svg", category: "Server-side JavaScript", color: "bg-[#3c873a]" },
  { name: "Express.js", logo: "express.svg", category: "Backend development", color: "bg-[#a3a3a3]" },
  { name: "JavaScript", logo: "javascript.svg", category: "Web development", color: "bg-[#f7df1e]" },
  { name: "TypeScript", logo: "typescript.svg", category: "Typed development", color: "bg-[#007acc]" },
  { name: "HTML5", logo: "html5.svg", category: "Web foundations", color: "bg-[#e34f26]" },
  { name: "Tailwind CSS", logo: "tailwindcss.svg", category: "Interface styling", color: "bg-[#38b2ac]" },
  { name: "Vite", logo: "vitejs.svg", category: "Build tools", color: "bg-[#646cff]" },
  { name: "MySQL", logo: "mysql.svg", category: "Databases", color: "bg-[#00758f]" },
  { name: "Supabase", logo: "supabase.svg", category: "Backend as a Service", color: "bg-[#3ecf8e]" },
];

const CassetteCard = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <div className="relative flex flex-col items-center group w-[160px] sm:w-[240px] md:w-[280px] m-4">
      {/* Hanging string (nail and string) */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[80px] sm:w-[120px] h-[32px] z-0">
        <svg viewBox="0 0 100 50" className="w-full h-full stroke-gray-500 stroke-[2] fill-none drop-shadow-sm">
          <path d="M 5 50 L 50 10 L 95 50" />
          <circle cx="50" cy="10" r="4" className="fill-gray-700 stroke-none" />
          <circle cx="48" cy="8" r="1.5" className="fill-white stroke-none opacity-50" />
        </svg>
      </div>
      
      {/* Cassette Body */}
      <div className="relative w-full aspect-[1.58] rounded-md sm:rounded-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-2 z-10 overflow-hidden">
        {/* Color Tint Background */}
        <div className={"absolute inset-0 rounded-md sm:rounded-xl opacity-90 z-0 "}></div>
        
        {/* Cassette Image */}
        <Image 
          src="/assets/skills/cassette-shell-560.webp" 
          alt="Cassette" 
          fill 
          sizes="(max-width: 640px) 160px, (max-width: 768px) 240px, 280px"
          className="object-cover z-20 pointer-events-none drop-shadow-md" 
        />
        
        {/* Content on the top sticker */}
        <div className="absolute top-[22%] left-[12%] right-[12%] h-[28%] z-30 flex items-center px-1 sm:px-2">
          <div className="w-[16px] h-[16px] sm:w-[28px] sm:h-[28px] mr-1 sm:mr-3 relative shrink-0">
            <Image src={"/assets/skills/"} alt={skill.name} fill className="object-contain" />
          </div>
          <span className="font-serif text-[10px] sm:text-base md:text-xl font-bold text-gray-800 tracking-tight truncate">{skill.name}</span>
          <span className="absolute right-1 sm:right-2 top-0 sm:top-1 text-[5px] sm:text-[8px] font-mono text-gray-600 font-bold leading-tight">A<br/>{index + 1}</span>
        </div>
        
        {/* Category on the bottom sticker */}
        <div className="absolute bottom-[20%] left-[18%] right-[18%] h-[12%] z-30 flex items-center justify-center">
          <span className="font-serif text-[6px] sm:text-[10px] md:text-xs font-semibold text-gray-800 tracking-wider truncate">{skill.category}</span>
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
      <div 
        className="absolute inset-0 z-0 opacity-100 dark:opacity-30" 
        style={{ 
          backgroundImage: 'url(/assets/live-grain.webp)',
          backgroundSize: '150px',
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
        
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-12 sm:gap-y-16 sm:gap-x-8 md:gap-y-20">
          {SKILLS.map((skill, i) => (
            <CassetteCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
