import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!fine) {
      setEnabled(false);
      return;
    }

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // move the small dot immediately (no lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%,-50%)`;
        dotRef.current.style.opacity = "1";
      }
      // ring will follow with slight smoothing in RAF loop
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "0.85";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    const interactiveSelector =
      'a, button, input, textarea, select, label, [role="button"], .interactive, .cursor-enlarge';

    const setActiveOn = () => setActive(true);
    const setActiveOff = () => setActive(false);

    const addHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", setActiveOn);
        el.addEventListener("mouseleave", setActiveOff);
      });
    };
    const removeHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener("mouseenter", setActiveOn);
        el.removeEventListener("mouseleave", setActiveOff);
      });
    };

    addHoverListeners();

    // ring animation: faster follow (higher lerp) to reduce perceived lag
    const animate = () => {
      // lerp factor: closer to 1 => less lag
      const lerp = 0.36;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        const scale = active ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%,-50%) scale(${scale})`;
        ringRef.current.style.opacity = active ? "0.95" : "0.6";
      }

      requestRef.current = requestAnimationFrame(animate);
    };
    animate();

    // observe DOM changes to rebind interactive listeners
    const mo = new MutationObserver(() => {
      removeHoverListeners();
      addHoverListeners();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      removeHoverListeners();
      cancelAnimationFrame(requestRef.current);
      mo.disconnect();
    };
  }, [active]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${active ? "active" : ""}`}
        aria-hidden
      />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden />
    </>
  );
}