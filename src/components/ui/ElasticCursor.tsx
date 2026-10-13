"use client";

import React, {
  useEffect,
  useRef,
} from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { usePreloader } from "../preloader";
import { useMediaQuery } from "@/hooks/use-media-query";

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);
  return Math.min(distance / 735, 0.35);
}

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

const CURSOR_DIAMETER = 50;

function ElasticCursor() {
  const { loadingPercent, isLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const jellyRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || typeof window === "undefined") return;

    const jelly = jellyRef.current;
    const dot = dotRef.current;
    if (!jelly || !dot) return;

    gsap.set(jelly, { xPercent: -50, yPercent: -50 });

    const setX = gsap.quickSetter(jelly, "x", "px");
    const setY = gsap.quickSetter(jelly, "y", "px");
    const setR = gsap.quickSetter(jelly, "rotate", "deg");
    const setSx = gsap.quickSetter(jelly, "scaleX");
    const setSy = gsap.quickSetter(jelly, "scaleY");
    const setWidth = gsap.quickSetter(jelly, "width", "px");

    const targetPos = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    const vel = { x: 0, y: 0 };
    let isHovering = false;
    let hoveredEl: HTMLElement | null = null;
    let hasMoved = false;

    const updateHoverTarget = (target: HTMLElement | null) => {
      const hoverTarget = target?.closest(".cursor-can-hover, button, a") as HTMLElement | null;
      if (hoverTarget !== hoveredEl) {
        hoveredEl = hoverTarget;
        if (hoverTarget) {
          isHovering = true;
          const rect = hoverTarget.getBoundingClientRect();
          gsap.to(jelly, {
            rotate: 0,
            width: rect.width + 16,
            height: rect.height + 16,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
            borderRadius: 12,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          isHovering = false;
          gsap.to(jelly, {
            width: CURSOR_DIAMETER,
            height: CURSOR_DIAMETER,
            borderRadius: 50,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        jelly.style.opacity = "1";
        dot.style.opacity = "1";
      }

      targetPos.x = e.clientX;
      targetPos.y = e.clientY;

      // Position the center dot instantly with 0ms latency using translate3d
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      updateHoverTarget(e.target as HTMLElement | null);
    };

    // Smooth elastic ticker loop for the jelly trail
    const tickerCallback = () => {
      if (!hasMoved) return;

      if (!isHovering) {
        // High-performance spring interpolation
        const prevX = pos.x;
        const prevY = pos.y;

        pos.x += (targetPos.x - pos.x) * 0.18;
        pos.y += (targetPos.y - pos.y) * 0.18;

        vel.x = (pos.x - prevX) * 2.5;
        vel.y = (pos.y - prevY) * 2.5;

        const rotation = getAngle(vel.x, vel.y);
        const scale = getScale(vel.x, vel.y);

        setX(pos.x);
        setY(pos.y);
        setWidth(CURSOR_DIAMETER + scale * 260);
        setR(rotation);
        setSx(1 + scale);
        setSy(Math.max(0.4, 1 - scale * 1.8));
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    gsap.ticker.add(tickerCallback);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tickerCallback);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!jellyRef.current || isMobile) return;
    if (isLoading) {
      jellyRef.current.style.height = "2rem";
      jellyRef.current.style.borderRadius = "1rem";
      jellyRef.current.style.width = loadingPercent * 2 + "vw";
    }
  }, [loadingPercent, isLoading, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={jellyRef}
        id="jelly-id"
        className={cn(
          "jelly-blob fixed left-0 top-0 rounded-full pointer-events-none will-change-transform opacity-0 transition-opacity duration-200"
        )}
        style={{
          width: CURSOR_DIAMETER,
          height: CURSOR_DIAMETER,
          zIndex: 99999,
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        className="w-2.5 h-2.5 rounded-full fixed left-0 top-0 pointer-events-none z-[99999] opacity-0 transition-opacity duration-200"
        style={{
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
    </>
  );
}

export default ElasticCursor;
