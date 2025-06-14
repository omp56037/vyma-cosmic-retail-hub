
import React, { useRef, useEffect } from "react";

// Lightweight animated starfield canvas, overlaid below all content.
export default function StarfieldBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let width = window.innerWidth, height = window.innerHeight;
    const canvas = ref.current;
    if (!canvas) return;
    let dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const numStars = Math.floor(width * height / 3200);
    let stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 0.85 + 0.15,
      t: Math.random() * 10000,
      o: Math.random() * 0.5 + 0.25
    }));

    let anim = true;
    function render(ts: number) {
      if (!canvas) return;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const opacity = s.o + Math.sin(ts / 1200 + s.t) * 0.15;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(190,180,255,${opacity.toFixed(2)})`;
        ctx.fill();
      }
      if (anim) requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };

    window.addEventListener("resize", onResize);
    return () => {
      anim = false;
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 w-screen h-screen z-0"
      style={{ background: "#111928", opacity: 1 }}
      aria-hidden
    />
  );
}
