"use client";
import React, { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Define console magic once without CPU-polling library
    ["adarsh", "Adarsh", "ADARSH"].forEach((name) => {
      // @ts-ignore
      if (Object.hasOwn(window, name)) return;
      Object.defineProperty(window, name, {
        configurable: true,
        get() {
          console.log(
            "%c✨ Abra Kadabra! ✨\n\n" +
              "You just summoned the magic of Adarsh! 🧙‍♂️\n" +
              "What??? you're not impressed? Fine, but remember: With great power comes great responsibility! 💻⚡",
            "color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px"
          );

          const timer = setTimeout(() => {
            console.log(
              "%cPssttt! 🤫\n\n" +
                "Do you like cats?? 😺 If yes, then press 'n' on viewport and see what happens! 🐱✨",
              "color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
            );
            clearTimeout(timer);
          }, 4000);
          return "";
        },
      });
    });
  }, []);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
