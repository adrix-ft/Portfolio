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
    <section id="hero" className={cn("relative w-full h-[70vh] md:h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black text-black dark:text-white")}>
      {!isLoading && (
        <div className="w-full h-full relative">
          
          {/* Background gradients/circles */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-purple-600/30 rounded-full blur-[100px] absolute" />
            <div className="w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-purple-900/40 rounded-full blur-[80px] absolute" />
            <div className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border border-zinc-500/20 rounded-full" />
            <div className="absolute w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] border border-zinc-500/20 rounded-full" />
            <div className="absolute w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] border border-zinc-500/30 rounded-full" />
          </motion.div>

          {/* SEO Optimized Hidden H1 */}
          <h1 className="sr-only">
            Adarsh Yadav - Full Stack Developer and Bioinformatics Student
          </h1>

          {/* Large background text */}
          <div className="absolute z-0 w-full flex items-center justify-center top-[25%] md:top-[22%] -translate-y-1/2 select-none overflow-hidden h-[300px] md:h-[300px]" aria-hidden="true">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 px-4 mt-12 md:mt-0"
            >
              {/* Outlined Text */}
              <div className="text-[15vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.85] md:leading-none font-bold tracking-tighter text-transparent text-outline flex">
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
              <div className="text-[15vw] md:text-[8vw] lg:text-[120px] xl:text-[150px] leading-[0.85] md:leading-none font-bold tracking-tighter flex">
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

          {/* Person Image with Mask Reveal */}
          <motion.div 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute bottom-0 z-10 w-full flex justify-center pointer-events-none"
          >
            <div 
              ref={imageContainerRef}
              className="relative pointer-events-auto cursor-crosshair"
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
                className="object-contain object-bottom h-[75vh] md:h-[75vh] w-auto grayscale scale-[1.6] sm:scale-125 md:scale-100 origin-bottom translate-y-0" 
                priority
              />

              {/* Colored Foreground Image (Masked) */}
              <Image 
                src="/assets/person.png" 
                alt="Adarsh" 
                width={1000} 
                height={1000} 
                className="object-contain object-bottom h-[75vh] md:h-[75vh] w-auto absolute bottom-0 left-0 transition-opacity duration-300 scale-[1.6] sm:scale-125 md:scale-100 origin-bottom translate-y-0"
                style={{
                  opacity: isHovering ? 1 : 0,
                  WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`,
                }}
                priority
              />
            </div>
          </motion.div>

          {/* Left Content - Title, Subtitle, CTA */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden md:block absolute left-4 md:left-12 lg:left-24 bottom-6 md:bottom-[25%] z-20 max-w-[220px] md:max-w-[300px] 
              bg-white/70 dark:bg-black/70 backdrop-blur-xl md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none 
              p-5 md:p-0 rounded-3xl md:rounded-none border border-black/5 dark:border-white/10 md:border-none shadow-xl md:shadow-none"
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-black dark:text-white">
              Full Stack Developer
            </h2>
            <p className="text-[11px] md:text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-4 md:mb-8">
              Designing digital products that are clear, usable, and conversion focused.
            </p>
            <Link href="#contact">
              <Button className="rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-black px-5 py-4 md:px-8 md:py-6 text-xs md:text-base font-medium group transition-all w-full md:w-auto">
                Let&apos;s collaborate 
                <MoveUpRight className="ml-2 w-3 h-3 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute right-4 md:right-12 lg:right-24 bottom-8 md:bottom-[25%] z-20 flex flex-col gap-3 md:gap-4 items-end"
          >
            <Link href="https://github.com/adrix-ft" target="_blank" className="cursor-can-hover rounded-full shadow-lg md:shadow-none">
              <div className="flex items-center gap-3 p-3 md:px-6 md:py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <SiGithub className="w-5 h-5 md:w-[18px] md:h-[18px] text-black dark:text-white" />
                <span className="hidden md:inline text-sm md:text-base font-medium">Github</span>
              </div>
            </Link>
            <Link href="https://instagram.com/adu.ft" target="_blank" className="cursor-can-hover rounded-full shadow-lg md:shadow-none">
              <div className="flex items-center gap-3 p-3 md:px-6 md:py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <SiInstagram className="w-5 h-5 md:w-[18px] md:h-[18px] text-black dark:text-white" />
                <span className="hidden md:inline text-sm md:text-base font-medium">Instagram</span>
              </div>
            </Link>
            <Link href="https://linkedin.com/in/adrix-ft" target="_blank" className="cursor-can-hover rounded-full shadow-lg md:shadow-none">
              <div className="flex items-center gap-3 p-3 md:px-6 md:py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <SiLinkedin className="w-5 h-5 md:w-[18px] md:h-[18px] text-black dark:text-white" />
                <span className="hidden md:inline text-sm md:text-base font-medium">LinkedIn</span>
              </div>
            </Link>
          </motion.div>

        </div>
      )}
    </section>
  );
};

export default HeroSection;
