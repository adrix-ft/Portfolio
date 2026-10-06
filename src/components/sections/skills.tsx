import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="w-full min-h-screen relative flex flex-col items-center justify-center py-24"
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
      <div className="z-10 w-full max-w-7xl px-4">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-4 line-clamp-4 max-w-3xl font-normal text-base text-center text-neutral-500 dark:text-neutral-300">
          The tools behind the work.
        </p>
        
        {/* Placeholder for cassette cards or other skill representations */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
