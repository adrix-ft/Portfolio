"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    const handleSetCategory = (e: any) => {
      if (e.detail) {
        setActiveCategory(e.detail);
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("setCategory", handleSetCategory);
    return () => window.removeEventListener("setCategory", handleSetCategory);
  }, []);

  const categories = ["All", "E-commerce", "Portfolio", "SaaS", "Freelance", "UI/UX Design & SEO"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="w-full relative z-10 bg-[#F6F6F4] dark:bg-black py-24 text-black dark:text-white border-t border-zinc-200 dark:border-zinc-800">
      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(128, 128, 128, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-24 max-w-7xl">
        <h2 
          className="text-3xl md:text-4xl font-medium mb-12 tracking-tight uppercase"
        >
          /PROJECTS
        </h2>

        <div 
          className="flex flex-wrap items-center justify-start gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                activeCategory === category 
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" 
                  : "bg-transparent text-zinc-600 border-zinc-300 hover:border-black dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      
          <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={project.src} className={cn(!showAll && index >= 3 ? "hidden md:block" : "block")}>
              <Modall project={project} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-zinc-500">
            More projects coming soon to this category!
          </div>
        )}
        </div>

        {!showAll && filteredProjects.length > 3 && (
          <div 
            className="flex justify-center mt-10 md:hidden w-full"
          >
            <Button 
              onClick={() => setShowAll(true)} 
              variant="outline" 
              className="rounded-full px-8 py-6 text-sm border-zinc-300 dark:border-zinc-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Show More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
            />
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left text-white font-medium">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            {/* <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                Visit
              </button>
            </Link> */}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
