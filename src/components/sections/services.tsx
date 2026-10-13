"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
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
  
  // Center letters drop faster (finish at 65% scroll), outer letters finish at 100%
  const finishProgress = 0.65 + (distance / 3.5) * 0.35;
  // Outer letters start dropping slightly later
  const startProgress = (distance / 3.5) * 0.25;

  const y = useTransform(
    scrollYProgress, 
    [startProgress, finishProgress], 
    ["-220%", "0%"]
  );

  return (
    <motion.span
      style={{ y, whiteSpace: "pre" }}
      className="inline-block will-change-transform"
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
    offset: ["start 95%", "center 50%"]
  });

  return (
    <section id="services" className="w-full relative z-10 flex flex-col">
      {/* Huge Title Area */}
      <div ref={containerRef} className="w-full h-[15vh] min-h-[100px] md:h-[35vh] bg-black text-white flex items-center justify-center relative border-t border-zinc-800 overflow-hidden">
        
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
            className="absolute left-[12%] top-[20%] md:left-[25%] md:top-[20%] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-500/80 scale-150"
          />
        </div>

        <h2 className={cn("text-[17vw] md:text-[15vw] lg:text-[276px] lg:leading-[276px] leading-[0.8] font-bold tracking-tighter flex uppercase z-10", sofiaSansCondensed.className)}>
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
        className="w-full h-auto md:h-[70vh] bg-[#F6F6F4] dark:bg-black text-black dark:text-white border-y-2 border-black/40 dark:border-white/40 flex flex-col md:flex-row overflow-hidden"
        onMouseLeave={() => {
          if (typeof window !== "undefined" && window.innerWidth >= 768) {
            setActiveIndex(null);
          }
        }}
      >
        {servicesData.map((service, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div 
              key={index}
              className={cn(
                "border-b-2 md:border-b-0 md:border-r-2 border-black/40 dark:border-white/40 relative cursor-pointer overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isActive 
                  ? "bg-white dark:bg-zinc-950 shadow-2xl z-10 md:flex-[4]" 
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-900 md:flex-[1]"
              )}
              onMouseEnter={() => {
                if (typeof window !== "undefined" && window.innerWidth >= 768) {
                  setActiveIndex(index);
                }
              }}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="p-3.5 sm:p-4 md:p-6 w-full flex flex-col min-w-[80px] md:min-w-[120px]">
                {/* Header */}
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex items-center gap-3 md:gap-0 md:block">
                    <span className={cn("text-xs sm:text-sm md:text-lg font-bold text-black/60 dark:text-white/60 whitespace-nowrap", sofiaSansCondensed.className)}>
                      00-{index + 1}
                    </span>
                    {/* Mobile Title */}
                    <h3 className={cn("font-bold uppercase tracking-tight text-[18px] sm:text-[22px] md:hidden text-left leading-tight", sofiaSansCondensed.className)}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Desktop Title when Active */}
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

                  {/* Mobile Expand / Collapse Icon */}
                  <div className="flex items-center justify-center w-6 h-6 shrink-0 md:hidden text-black/60 dark:text-white/60">
                    <motion.span 
                      animate={{ rotate: isActive ? 45 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className="text-xl font-light leading-none select-none"
                    >
                      +
                    </motion.span>
                  </div>
                </div>
                
                {/* Desktop Collapsed Title */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={cn("hidden md:block font-bold uppercase tracking-tight text-[24px] md:text-[38px] md:leading-[58px] mt-4 md:mt-12 whitespace-normal break-words text-left md:text-center w-full", sofiaSansCondensed.className)}
                    >
                      {service.title}
                    </motion.h3>
                  )}
                </AnimatePresence>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col justify-between mt-4 md:mt-12 w-full overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start justify-between w-full">
                        {/* Features List */}
                        <div className="flex flex-wrap md:flex-col gap-1.5 md:gap-1 shrink-0">
                          {service.features.map((feature, idx) => (
                            <motion.span 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + (idx * 0.05) }}
                              key={idx} 
                              className={cn("text-[12px] sm:text-[15px] md:text-[23px] leading-[18px] sm:leading-[22px] md:leading-[28px] font-semibold text-black dark:text-white uppercase tracking-tight bg-black/5 dark:bg-white/5 md:bg-transparent px-2 py-0.5 md:p-0 rounded md:rounded-none", sofiaSansCondensed.className)}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>

                        {/* Image */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="w-full md:w-[250px] lg:w-[350px] aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-sm overflow-hidden relative shadow-md shrink-0 cursor-pointer" 
                          onClick={(e) => { e.stopPropagation(); window.dispatchEvent(new CustomEvent("setCategory", { detail: service.category })); }}
                        >
                          <Image src={service.image} alt={service.title} fill className="object-cover" />
                        </motion.div>
                      </div>
                      
                      {/* Description */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 md:mt-8 pb-2 md:pb-4"
                      >
                        <p className={cn("text-[12px] sm:text-[13px] md:text-[15px] leading-[18px] sm:leading-[20px] md:leading-[23px] font-normal uppercase tracking-wider text-neutral-700 dark:text-neutral-300 max-w-xl", splineSansMono.className)}>
                          {service.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
