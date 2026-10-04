"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in"
      )}
      style={{
        background: isActive ? "hsl(var(--background) / .8)" : "transparent",
        // backgroundImage:
        //   "linear-gradient(0deg, rgba(0, 0, 0, 0), rgb(0, 0, 0))",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
      <div className="flex items-center justify-between w-full relative z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="hidden md:flex items-center justify-center">
            <Button variant="link" className="text-md p-0 h-auto">
              {config.author}
            </Button>
          </Link>
          <Link href="https://docs.google.com/document/d/1KKt95Nb4_d_sik6flxJL03f-sZgrDkRJ4Txq6vtgHQg/edit?tab=t.0#heading=h.vhytaeubzzj5" target="_blank" className="flex">
            <Button 
              variant="outline" 
              className="rounded-full px-4 text-xs h-8 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Resume
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <OnlineUsers />
          </div>
          <FunnyThemeToggle className="w-6 h-6" />
          <Button
            variant="ghost"
            onClick={() => setIsActive(!isActive)}
            className="m-0 p-0 h-6 bg-transparent hover:bg-transparent flex items-center justify-center relative"
          >
            <div className="relative flex items-center justify-center w-10">
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
                className="m-0 text-sm font-medium"
              >
                Menu
              </motion.p>
              <motion.p 
                variants={opacity} 
                animate={isActive ? "open" : "closed"}
                className="absolute m-0 text-sm font-medium"
              >
                Close
              </motion.p>
            </div>
          </Button>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
