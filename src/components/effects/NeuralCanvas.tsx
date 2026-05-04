import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const nodes = useRef<Node[]>([]);
  const raf = useRef<number>(0);
  useEffect(() => {
    if (!ref.current) return;
    const canvas = ref.current;
    const maybeContext = canvas.getContext("2d");
    if (!maybeContext) return;
    const context = maybeContext;
    let W = 0, H = 0;
    function resize() {
      W = canvas.width = innerWidth;
      H = canvas.height = innerHeight;
      const n = Math.floor(W * H / 12000);
      nodes.current = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, r: Math.random() * 2 + .5 }));
    }
    function draw() {
      context.clearRect(0, 0, W, H);
      const ns = nodes.current, md = 150;
      ns.forEach(n => { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > W) n.vx *= -1; if (n.y < 0 || n.y > H) n.vy *= -1; });
      for (let i = 0; i < ns.length; i++) for (let j = i + 1; j < ns.length; j++) { const dx = ns[i].x - ns[j].x, dy = ns[i].y - ns[j].y, d = Math.sqrt(dx * dx + dy * dy); if (d < md) { context.beginPath(); context.moveTo(ns[i].x, ns[i].y); context.lineTo(ns[j].x, ns[j].y); context.strokeStyle = `rgba(0,212,255,${(1 - d / md) * .3})`; context.lineWidth = .6; context.stroke(); } }
      ns.forEach(n => { context.beginPath(); context.arc(n.x, n.y, n.r, 0, Math.PI * 2); context.fillStyle = "rgba(0,212,255,0.55)"; context.fill(); });
      ns.forEach(n => { const dx = mouse.current.x - n.x, dy = mouse.current.y - n.y, d = Math.sqrt(dx * dx + dy * dy); if (d < 180) { n.vx += dx * .00004; n.vy += dy * .00004; } const sp = Math.sqrt(n.vx * n.vx + n.vy * n.vy); if (sp > .9) { n.vx = n.vx / sp * .9; n.vy = n.vy / sp * .9; } });
      raf.current = requestAnimationFrame(draw);
    }
    const onM = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onR = () => { cancelAnimationFrame(raf.current); resize(); draw(); };
    resize(); draw();
    addEventListener("mousemove", onM); addEventListener("resize", onR);
    return () => { cancelAnimationFrame(raf.current); removeEventListener("mousemove", onM); removeEventListener("resize", onR); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: .55 }} />;
}
