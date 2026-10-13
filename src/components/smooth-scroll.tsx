"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function GlobalLenisBinder() {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis && typeof window !== "undefined") {
      (window as any).__lenis = lenis;
    }
  }, [lenis]);
  return null;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.8,
        prevent: (node) => {
          if (isInsideModal) return true;
          const modalOpen = 
            node.classList.contains("modall") || 
            Boolean(node.closest("[role='dialog']")) ||
            Boolean(node.closest("[data-lenis-prevent]"));
          return modalOpen;
        },
      }}
    >
      <GlobalLenisBinder />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

