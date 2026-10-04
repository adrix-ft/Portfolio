"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MoveUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    title: "E-COMMERCE SOLUTIONS",
    description: "Building robust, scalable, and conversion-optimized e-commerce platforms helping local businesses transition and thrive online.",
    image: "/assets/projects-screenshots/Adarshprojects/trust-vault.png",
    category: "E-commerce"
  },
  {
    title: "PORTFOLIO WEBSITES",
    description: "Designing sleek, modern, and highly interactive personal portfolios to showcase your work and attract high-end clients.",
    image: "/assets/projects-screenshots/Adarshprojects/portfolio-preview.png",
    category: "Portfolio"
  },
  {
    title: "FULL-STACK WEB APPS",
    description: "Developing custom, high-performance web applications tailored to solve unique business problems from front to back.",
    image: "/assets/projects-screenshots/Adarshprojects/onlystore.png",
    category: "SaaS"
  },
  {
    title: "UI/UX DESIGN & SEO",
    description: "Crafting intuitive, accessible, and aesthetically stunning user interfaces optimized for lightning-fast speeds and top-tier search engine rankings.",
    image: "/assets/projects-screenshots/Adarshprojects/canvas-builds.png",
    category: "Freelance"
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full relative z-10 bg-[#F6F6F4] dark:bg-black py-24 text-black dark:text-white border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 max-w-5xl">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium mb-12 tracking-tight"
        >
          /SERVICE
        </motion.h2>
        
        <div className="flex flex-col border-t border-zinc-200 dark:border-zinc-800">
          {servicesData.map((service, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={index} 
                className={cn(
                  "border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500 relative",
                  isActive ? "bg-[#18181b] text-white rounded-lg my-3 overflow-visible shadow-2xl" : "hover:bg-zinc-50 dark:hover:bg-zinc-900 cursor-pointer"
                )}
                onClick={() => !isActive && setActiveIndex(index)}
              >
                <div className="flex items-start md:items-center justify-between p-6 md:p-10 relative">
                  {/* Left Side: Title & Description */}
                  <div className="flex flex-col z-10 w-full max-w-lg">
                    <h3 className={cn(
                      "text-3xl md:text-5xl font-medium tracking-tight transition-all duration-300",
                      isActive ? "md:mb-4" : "",
                      "mb-4 md:mb-0" // Always add margin bottom on mobile since description is always there
                    )}>
                      {service.title}
                    </h3>
                    
                    {/* Desktop Accordion Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="hidden md:block text-zinc-400 text-sm md:text-base leading-relaxed"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Mobile Always-Visible Description */}
                    <p className="md:hidden text-zinc-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Desktop Floating Image Component */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="hidden md:block absolute right-[25%] top-[-30%] z-20 pointer-events-auto cursor-pointer drop-shadow-2xl -rotate-[10deg] transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.dispatchEvent(new CustomEvent('setCategory', { detail: service.category }));
                          }}
                        >
                          <div className="w-72 h-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden border-[6px] border-white shadow-xl relative hover:scale-105 transition-transform duration-300">
                            <Image src={service.image} alt={service.title} fill className="w-full h-full object-cover" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile Always-Visible Image */}
                    <div 
                      className="md:hidden block z-20 pointer-events-auto cursor-pointer drop-shadow-2xl w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.dispatchEvent(new CustomEvent('setCategory', { detail: service.category }));
                      }}
                    >
                      <div className="w-full h-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden border-[4px] border-white shadow-xl relative hover:scale-105 transition-transform duration-300">
                        <Image src={service.image} alt={service.title} fill className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Icon (Desktop Only) */}
                  <div className="hidden md:flex z-10 ml-4 flex-shrink-0 cursor-pointer" onClick={(e) => {
                    if (isActive) {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }
                  }}>
                    {isActive ? (
                      <X className="w-8 h-8 text-white" strokeWidth={1} />
                    ) : (
                      <MoveUpRight className="w-8 h-8 text-black dark:text-white" strokeWidth={1} />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
