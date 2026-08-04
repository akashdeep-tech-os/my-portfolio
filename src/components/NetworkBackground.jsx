import { useEffect, useRef } from "react";
import { useTheme } from "../context/useTheme";

const DOT_COUNT = 50;

function createDot(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: 2 + Math.random() * 2,
  };
}

function updateDot(dot, width, height) {
  dot.x += dot.vx;
  dot.y += dot.vy;
  if (dot.x < 0 || dot.x > width) dot.vx *= -1;
  if (dot.y < 0 || dot.y > height) dot.vy *= -1;
}

function drawDot(ctx, dot, isDark) {
  ctx.beginPath();
  ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
  ctx.fillStyle = isDark
    ? "rgba(96, 165, 250, 0.7)"
    : "rgba(79, 142, 247, 0.6)";
  ctx.shadowBlur = 10;
  ctx.shadowColor = isDark
    ? "rgba(96, 165, 250, 0.5)"
    : "rgba(79, 142, 247, 0.4)";
  ctx.fill();
}

function drawLines(ctx, dots, isDark) {
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dx = dots[i].x - dots[j].x;
      const dy = dots[i].y - dots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.beginPath();
        ctx.strokeStyle = isDark
          ? `rgba(96, 165, 250, ${0.4 - distance / 400})`
          : `rgba(79, 142, 247, ${0.3 - distance / 400})`;
        ctx.lineWidth = 1;
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
      }
    }
  }
}

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    const isDark = theme === "dark";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    dotsRef.current = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dotsRef.current.push(createDot(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const dot of dotsRef.current) {
        updateDot(dot, canvas.width, canvas.height);
        drawDot(ctx, dot, isDark);
      }

      drawLines(ctx, dotsRef.current, isDark);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50"
    />
  );
};

export default NetworkBackground;
