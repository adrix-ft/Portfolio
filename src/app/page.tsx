"use client";

import React from "react";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";

function MainPage() {
  return (
    <main className={cn("bg-slate-100 dark:bg-transparent overflow-x-hidden w-full max-w-[100vw]")}>
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default MainPage;

