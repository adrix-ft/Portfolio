"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full relative z-10 bg-[#F6F6F4] dark:bg-[#111] py-24 text-black dark:text-white border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start mt-10 md:mt-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 pt-4 md:pr-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight uppercase mb-4 text-zinc-500 dark:text-zinc-400">
              /LET&apos;S WORK TOGETHER
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              Got a project in <br className="hidden lg:block"/> mind?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-md mt-4 leading-relaxed">
              Let&apos;s build something amazing together. Feel free to reach out for collaborations, freelance projects, or just a friendly hello.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-black dark:text-white text-xl md:text-2xl font-medium cursor-can-hover hover:underline underline-offset-8 decoration-zinc-400 dark:decoration-zinc-700 w-fit"
              >
                {config.email}
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Card className="w-full bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 rounded-xl text-black dark:text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">Send a message</CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400 text-base">
                  Drop your info below and I will get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default ContactSection;
