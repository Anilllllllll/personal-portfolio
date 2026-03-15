"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Set up quickTo functions for better performance
    const xToCursor = gsap.quickTo(cursor, "x", {
      duration: 0.1,
      ease: "power3",
    });
    const yToCursor = gsap.quickTo(cursor, "y", {
      duration: 0.1,
      ease: "power3",
    });

    const xToFollower = gsap.quickTo(follower, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const yToFollower = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const onMouseMove = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    // Add interactivity hooks (hovering over links or buttons expands the follower)
    const addHoverListeners = () => {
      const interactables = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button']",
      );

      const onMouseEnter = () => {
        gsap.to(follower, { scale: 1.5, opacity: 0.3, duration: 0.3 });
        gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      };

      const onMouseLeave = () => {
        gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      };

      interactables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        interactables.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnter);
          el.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    };

    window.addEventListener("mousemove", onMouseMove);

    // Use a small timeout to let the DOM settle before querying interactables
    const cleanupHover = setTimeout(addHoverListeners, 500);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(cleanupHover);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen shadow-[0_0_10px_rgba(239,68,68,0.8)] hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-red-500/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 bg-red-500/10 mix-blend-screen hidden md:block"
      />
    </>
  );
}
