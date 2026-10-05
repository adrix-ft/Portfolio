"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import { usePreloader } from "../preloader";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { antonio } from "@/lib/fonts";

const HeroSection = () => {
  const { isLoading } = usePreloader();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="hero" className={cn("relative z-20 w-full h-[100svh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0A0A0A] text-black dark:text-white")}>
      {!isLoading && (
        <div className="w-full h-full relative flex flex-col md:block pt-24 md:pt-0">
          
          {/* Background gradients/circles (Removed purple glows as requested) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border border-zinc-500/10 rounded-full" />
            <div className="absolute w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] border border-zinc-500/10 rounded-full" />
            <div className="absolute w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] border border-zinc-500/10 rounded-full" />
          </motion.div>

          {/* SEO Optimized Hidden H1 */}
          <h1 className="sr-only">
            Adarsh Yadav - Full Stack Developer and Bioinformatics Student
          </h1>

          {/* Large background text */}
          <div className="md:absolute z-0 w-full flex items-center justify-center md:top-[22%] md:-translate-y-1/2 select-none overflow-hidden mt-4 md:mt-0" aria-hidden="true">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 1.5 }
                }
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 px-4"
            >
              {/* Outlined Text */}
              <div className="text-[12vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.8] md:leading-none font-light md:font-black tracking-widest md:tracking-tighter text-transparent text-outline flex">
                {"ADARSH".split("").map((char, index) => (
                  <motion.span 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              {/* Solid Text */}
              <div className="text-[12vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.8] md:leading-none font-light md:font-black tracking-widest md:tracking-tighter flex">
                {"YADAV".split("").map((char, index) => (
                  <motion.span 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Specific Content (Reference Design) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex md:hidden flex-col items-center text-center px-6 mt-6 z-20"
          >
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 max-w-[260px] leading-relaxed">
              Crafting scalable applications and high-performance digital experiences.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-[220px]">
              <Link href="#projects">
                <Button className="rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black w-full py-5 text-xs font-bold uppercase tracking-wider">
                  Explore Works <MoveUpRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="rounded-full w-full py-5 text-xs font-bold uppercase tracking-wider border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 bg-white/50 dark:bg-black/50 backdrop-blur-md">
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Desktop Content - Left */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden md:block absolute left-12 lg:left-24 bottom-[25%] z-20 max-w-[300px]"
          >
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Full Stack Developer
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-8">
              Designing digital products that are clear, usable, and conversion focused.
            </p>
            <Link href="#contact">
              <Button className="rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black px-8 py-6 text-base font-medium group transition-all">
                Let&apos;s collaborate 
                <MoveUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Desktop Content - Right Socials */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="hidden md:flex absolute right-12 lg:right-24 bottom-[25%] z-20 flex-col gap-4 items-end"
          >
            <Link href="https://github.com/adrix-ft" target="_blank" className="cursor-can-hover rounded-full">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <SiGithub className="w-[18px] h-[18px] text-black dark:text-white" />
                <span className="text-base font-medium">Github</span>
              </div>
            </Link>
            <Link href="https://instagram.com/adu.ft" target="_blank" className="cursor-can-hover rounded-full">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <SiInstagram className="w-[18px] h-[18px] text-black dark:text-white" />
                <span className="text-base font-medium">Instagram</span>
              </div>
            </Link>
            <Link href="https://linkedin.com/in/adrix-ft" target="_blank" className="cursor-can-hover rounded-full">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <SiLinkedin className="w-[18px] h-[18px] text-black dark:text-white" />
                <span className="text-base font-medium">LinkedIn</span>
              </div>
            </Link>
          </motion.div>

          {/* Person Image */}
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-auto md:absolute md:bottom-0 z-10 w-full flex-1 md:flex-none flex justify-center pointer-events-none min-h-0 overflow-visible"
          >
            <div className="h-full md:h-auto flex items-end justify-center w-full">
              <div 
                ref={imageContainerRef}
                className="relative pointer-events-auto cursor-crosshair w-[135%] max-w-none md:w-auto md:max-w-[100vw] flex justify-center shrink-0"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Grayscale Background Image */}
                <Image 
                  src="/assets/person.png" 
                  alt="Adarsh" 
                  width={1000} 
                  height={1000} 
                  className="object-contain object-bottom h-auto md:h-[75vh] w-full grayscale origin-bottom translate-y-0 scale-100" 
                  priority
                />

                {/* Colored Foreground Image (Masked) */}
                <Image 
                  src="/assets/person.png" 
                  alt="Adarsh" 
                  width={1000} 
                  height={1000} 
                  className="object-contain object-bottom h-auto md:h-[75vh] w-full absolute bottom-0 transition-opacity duration-300 origin-bottom translate-y-0 scale-100"
                  style={{
                    opacity: isHovering ? 1 : 0,
                    WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
                    maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
                  }}
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      )}
    </section>
  );
};

export default HeroSection;
