"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { MoveUpRight, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { sofiaSansCondensed, splineSansMono } from "@/lib/fonts";

const servicesData = [
  {
    title: "UI/UX DESIGN",
    fullTitle: "UI/UX DESIGN",
    description: "Crafting intuitive, accessible, and aesthetically stunning user interfaces optimized for maximum user engagement and smooth experiences.",
    image: "/assets/projects-screenshots/Adarshprojects/canvas-builds.png",
    category: "Freelance",
    features: ["/ USER FLOWS", "/ WIREFRAMES", "/ UI SYSTEMS", "/ DEV HANDOFF"]
  },
  {
    title: "WEB DEVELOPMENT",
    fullTitle: "FULL-STACK WEB APPS",
    description: "Developing custom, high-performance web applications tailored to solve unique business problems from front to back.",
    image: "/assets/projects-screenshots/Adarshprojects/onlystore.png",
    category: "SaaS",
    features: ["/ RESPONSIVE SITES", "/ FULL-STACK APPS", "/ CMS INTEGRATIONS", "/ API DESIGN"]
  },
  {
    title: "E-COMMERCE",
    fullTitle: "E-COMMERCE SOLUTIONS",
    description: "Building robust, scalable, and conversion-optimized e-commerce platforms helping local businesses transition and thrive online.",
    image: "/assets/projects-screenshots/Adarshprojects/trust-vault.png",
    category: "E-commerce",
    features: ["/ CUSTOM STORES", "/ PAYMENT INTEGRATION", "/ INVENTORY SYNC", "/ CHECKOUT OPTIMIZATION"]
  },
  {
    title: "SEO OPTIMIZATION",
    fullTitle: "SEARCH ENGINE OPTIMIZATION",
    description: "Driving organic growth with lightning-fast speeds and top-tier search engine rankings through technical and content optimization.",
    image: "/assets/projects-screenshots/Adarshprojects/canvas-builds.png",
    category: "Freelance",
    features: ["/ KEYWORD RESEARCH", "/ ON-PAGE SEO", "/ PERFORMANCE AUDITS", "/ ANALYTICS SETUP"]
  },
  {
    title: "PORTFOLIOS",
    fullTitle: "PORTFOLIO WEBSITES",
    description: "Designing sleek, modern, and highly interactive personal portfolios to showcase your work and attract high-end clients.",
    image: "/assets/projects-screenshots/Adarshprojects/portfolio-preview.png",
    category: "Portfolio",
    features: ["/ CUSTOM DESIGN", "/ INTERACTIVE UI", "/ PERFORMANCE", "/ CMS INTEGRATION"]
  },
];

const AnimatedLetter = ({ 
  char, 
  index, 
  scrollYProgress 
}: { 
  char: string; 
  index: number; 
  scrollYProgress: MotionValue<number>;
}) => {
  const distance = Math.abs(index - 3.5); // Center is between 3 and 4 for "SERVICES"
  
  // Center letters drop faster (finish at 60% scroll), outer letters finish at 100%
  const finishProgress = 0.6 + (distance / 3.5) * 0.4;
  // Outer letters start dropping slightly later
  const startProgress = (distance / 3.5) * 0.2;

  const y = useTransform(
    scrollYProgress, 
    [startProgress, finishProgress], 
    ["-60vh", "0vh"]
  );

  return (
    <motion.span
      style={{ y, whiteSpace: "pre" }}
      className="inline-block"
    >
      {char}
    </motion.span>
  );
};

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 20%"]
  });

  return (
    <section id="services" className="w-full relative z-10 flex flex-col">
      <style>
        {`
          @media (max-width: 768px) {
            .no-mobile-scroll-anim, .no-mobile-scroll-anim span {
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      {/* Huge Title Area */}
      <div ref={containerRef} className="w-full h-[25vh] md:h-[40vh] bg-black text-white flex items-center justify-center relative border-t border-zinc-800 overflow-hidden">
        
        {/* Background elements contained within this section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle geometric background elements inspired by the reference */}
          <div className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border-[0.5px] border-white/10 rounded-full right-[-10%] top-[-20%]" />
          <div className="absolute w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] border-[0.5px] border-white/10 rounded-full left-[-5%] bottom-[-10%]" />
          
          {/* Red triangle detail from reference image */}
          <motion.div 
            initial={{ opacity: 0, rotate: -30 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-[15%] top-[25%] md:left-[25%] md:top-[20%] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-500/80 scale-150"
          />
        </div>

        <h2 className={cn("text-[17vw] md:text-[15vw] lg:text-[276px] lg:leading-[276px] leading-[0.8] font-bold tracking-tighter no-mobile-scroll-anim flex uppercase z-10", sofiaSansCondensed.className)}>
          {"SERVICES".split("").map((char, index) => (
            <AnimatedLetter 
              key={index} 
              char={char} 
              index={index} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </h2>
      </div>

      {/* Services Horizontal Accordion */}
      <div 
        className="w-full h-[80vh] md:h-[70vh] bg-[#F6F6F4] dark:bg-black text-black dark:text-white border-y-2 border-black/40 dark:border-white/40 flex flex-col md:flex-row overflow-hidden"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {servicesData.map((service, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={index}
              className={cn(
                "border-b-2 md:border-b-0 md:border-r-2 border-black/40 dark:border-white/40 relative cursor-pointer overflow-hidden flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isActive ? "flex-[4] bg-white dark:bg-zinc-950 shadow-2xl z-10" : "flex-[1] hover:bg-zinc-100 dark:hover:bg-zinc-900"
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="p-4 md:p-6 w-full h-full flex flex-col min-w-[80px] md:min-w-[120px]">
                {/* Header */}
                <div className="flex flex-row justify-between w-full h-8 overflow-visible">
                  <span className={cn("text-base md:text-lg font-bold text-black/60 dark:text-white/60 whitespace-nowrap pt-1", sofiaSansCondensed.className)}>
                    00-{index + 1}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.h3 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4 }}
                        className={cn("font-bold uppercase tracking-tight text-[28px] md:text-[38px] md:leading-[58px] text-right whitespace-nowrap hidden md:block", sofiaSansCondensed.className)}
                      >
                        {service.fullTitle}
                      </motion.h3>
                    )}
                  </AnimatePresence>
                </div>
                
                <AnimatePresence>
                  {!isActive && (
                      <motion.h3 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cn("font-bold uppercase tracking-tight text-[24px] md:text-[38px] md:leading-[58px] mt-4 md:mt-12 whitespace-normal break-words text-left md:text-center w-full", sofiaSansCondensed.className)}
                      >
                        {service.title}
                      </motion.h3>
                  )}
                </AnimatePresence>

                {/* Expanded Content */}
                <div className={cn(
                  "flex-1 flex flex-col justify-between mt-8 md:mt-12 transition-opacity duration-500 overflow-y-auto overflow-x-hidden md:overflow-hidden w-full",
                  isActive ? "opacity-100" : "opacity-0"
                )}>
                  {isActive && (
                    <>
                      <div className="flex flex-row gap-2 sm:gap-4 md:gap-8 items-start justify-between w-full">
                        {/* Features List */}
                        <div className="flex flex-col shrink-0">
                          {service.features.map((feature, idx) => (
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + (idx * 0.1) }}
                              key={idx} 
                              className={cn("text-[14px] sm:text-[16px] md:text-[23px] leading-[20px] sm:leading-[24px] md:leading-[28px] font-semibold text-black dark:text-white uppercase tracking-tight", sofiaSansCondensed.className)}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>

                        {/* Image */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          className="w-[120px] sm:w-[160px] md:w-[250px] lg:w-[350px] aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-sm overflow-hidden relative shadow-md shrink-0 cursor-pointer" onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent("setCategory", { detail: service.category })); }}
                        >
                          <Image src={service.image} alt={service.title} fill className="object-cover" />
                        </motion.div>
                      </div>
                      
                      {/* Description */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 pb-4"
                      >
                        <p className={cn("text-[15px] leading-[23px] font-normal uppercase tracking-widest text-black dark:text-white max-w-xl", splineSansMono.className)}>
                          {service.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
