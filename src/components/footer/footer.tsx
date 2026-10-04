"use client";

import React from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative overflow-hidden pt-12 md:pt-32 flex flex-col border-t border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 max-w-7xl relative z-10 pb-8 md:pb-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 mb-12 md:mb-24">
          
          {/* Brand & Short Bio */}
          <div className="col-span-2 flex flex-col gap-4 md:gap-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-white">
              Adarsh Yadav
            </h3>
            <p className="text-sm md:text-base text-zinc-400 max-w-sm leading-relaxed">
              Full Stack Web Developer and Bioinformatics student focused on creating digital products that are clear, usable, and conversion focused.
            </p>
            <a 
              href={`mailto:${config.email}`}
              className="text-base md:text-lg font-medium text-white hover:underline underline-offset-4 decoration-zinc-500 w-fit mt-1 md:mt-2"
            >
              {config.email}
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 md:gap-4 col-span-1">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1 md:mb-2">Explore</h4>
            <Link href="#services" className="w-fit text-zinc-300 hover:text-white transition-colors">Services</Link>
            <Link href="#skills" className="w-fit text-zinc-300 hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="w-fit text-zinc-300 hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="w-fit text-zinc-300 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3 md:gap-4 col-span-1">
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-500 mb-1 md:mb-2">Connect</h4>
            <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="group w-fit flex items-center gap-1 text-zinc-300 hover:text-white transition-colors">
              Github <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="group w-fit flex items-center gap-1 text-zinc-300 hover:text-white transition-colors">
              LinkedIn <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="group w-fit flex items-center gap-1 text-zinc-300 hover:text-white transition-colors">
              Instagram <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            {config.social.twitter && (
              <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="group w-fit flex items-center gap-1 text-zinc-300 hover:text-white transition-colors">
                Twitter <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
          
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 md:pt-8 border-t border-zinc-800 gap-4">
          <p className="text-xs md:text-sm text-zinc-500">
            © {year} {config.author}. All rights reserved.
          </p>
          <a href="#" onClick={scrollToTop} className="text-sm font-medium text-zinc-500 hover:text-white transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="w-full flex justify-center items-end pointer-events-none select-none mt-auto">
        <h1 className="text-[11vw] font-bold tracking-tighter leading-[0.8] text-white/5 uppercase whitespace-nowrap">
          Adarsh Yadav
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
