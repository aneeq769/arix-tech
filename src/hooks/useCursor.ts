import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const cur = document.getElementById("ax-cur");
    const ring = document.getElementById("ax-ring");
    if (!cur || !ring) return;
    const curEl = cur;
    const ringEl = ring;
    let mx = -200, my = -200, rx = -200, ry = -200;
    const onM = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; curEl.style.left = mx + "px"; curEl.style.top = my + "px"; };
    function animate() { rx += (mx - rx) * .13; ry += (my - ry) * .13; ringEl.style.left = rx + "px"; ringEl.style.top = ry + "px"; requestAnimationFrame(animate); }
    animate();
    const addHov = () => { curEl.classList.add("hov"); ringEl.classList.add("hov"); };
    const remHov = () => { curEl.classList.remove("hov"); ringEl.classList.remove("hov"); };
    document.querySelectorAll("a,button,[role=button],[data-hover]").forEach(el => { el.addEventListener("mouseenter", addHov); el.addEventListener("mouseleave", remHov); });
    addEventListener("mousemove", onM);
    return () => removeEventListener("mousemove", onM);
  }, []);
}
