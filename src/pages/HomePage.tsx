import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { Marquee } from "../components/common/Marquee";
import { AM, BHI, BORDER, C, CARD, G, MONO, SYNE, TEXT3, V } from "../constants/design";
import type { Navigate } from "../types/site";

export function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <Box>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", px: { xs: 2, sm: 4, md: "5vw", lg: "80px" }, pt: "110px", pb: "80px", position: "relative" }}>
        <Box sx={{ position: "absolute", top: "10%", left: "-10%", width: "55vw", height: "55vh", borderRadius: "50%", background: `radial-gradient(ellipse,rgba(0,212,255,.06),transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
        <Box sx={{ position: "absolute", top: "30%", right: "-5%", width: "40vw", height: "40vh", borderRadius: "50%", background: `radial-gradient(ellipse,rgba(168,85,247,.05),transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />

        <Box className="anim-up-1" sx={{ display: "inline-flex", alignItems: "center", gap: 1.25, mb: 3.5 }}>
          <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: C, boxShadow: `0 0 12px ${C},0 0 24px rgba(0,212,255,.5)`, animation: "blink 2.2s ease-in-out infinite" }} />
          <Typography sx={{ fontFamily: MONO, fontSize: ".66rem", letterSpacing: ".22em", textTransform: "uppercase", color: C }}>AI-Powered Software Studio</Typography>
        </Box>

        <Typography variant="h1" className="anim-up-2" sx={{ fontSize: { xs: "3.2rem", sm: "5rem", md: "7rem", lg: "8.5rem" }, lineHeight: .9, letterSpacing: "-.04em", maxWidth: "14ch", mb: 4 }}>
          We Build<br />
          <Box component="span" className="grad-text">Intelligent</Box><br />
          <Box component="span" sx={{ color: "text.primary", WebkitTextFillColor: "unset" }}>Digital</Box>{" "}
          <Box component="span" sx={{ color: "text.secondary", WebkitTextFillColor: "unset", fontSize: { xs: "2.2rem", sm: "3.5rem", md: "5rem", lg: "6rem" } }}>Products</Box>
        </Typography>

        <Typography className="anim-up-3" sx={{ fontSize: { xs: ".95rem", md: "1.1rem" }, color: "text.secondary", maxWidth: "52ch", lineHeight: 1.8, mb: 5.5 }}>
          Arix Tech engineers AI systems, Python & Django platforms, web scraping engines, and premium web experiences that perform in the real world.
        </Typography>

        <Box className="anim-up-4" sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box data-hover onClick={() => navigate("Contact")} className="hover-btn" sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontFamily: MONO, fontSize: ".72rem", letterSpacing: ".08em", textTransform: "uppercase", color: "#000", background: `linear-gradient(135deg,${C},#0ea5e9)`, px: "28px", py: "14px", borderRadius: "7px", cursor: "pointer", fontWeight: 700, boxShadow: `0 0 28px rgba(0,212,255,.4)`, transition: "all .25s", "&:hover": { boxShadow: `0 0 48px rgba(0,212,255,.6)`, transform: "translateY(-3px)" } }}>
            Start a Project <span>{"\u2192"}</span>
          </Box>
          <Box data-hover onClick={() => navigate("Portfolio")} className="hover-btn" sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontFamily: MONO, fontSize: ".72rem", letterSpacing: ".08em", textTransform: "uppercase", color: "text.secondary", background: "transparent", border: `1px solid rgba(120,170,220,.22)`, px: "28px", py: "14px", borderRadius: "7px", cursor: "pointer", transition: "all .25s", "&:hover": { borderColor: BHI, color: C } }}>
            View Our Work
          </Box>
        </Box>

        <Box className="anim-up-5" sx={{ display: "flex", gap: { xs: 3, md: 6 }, flexWrap: "wrap", mt: 9, pt: 5, borderTop: `1px solid ${BORDER}` }}>
          {[
            { val: <><Box component="span" sx={{ color: C }}>20</Box><Box component="span" sx={{ color: C, fontSize: ".55em" }}>+</Box></>, lbl: "Projects Delivered" },
            { val: <Box component="span" sx={{ background: `linear-gradient(90deg,${C},${V})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</Box>, lbl: "Core Expertise" },
            { val: "E2E", lbl: "Product Execution" },
          ].map((m, i) => (
            <Box key={i} sx={{ animation: `countUp .5s ${.1 * i + .8}s ease both` }}>
              <Typography sx={{ fontFamily: SYNE, fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-.03em", lineHeight: 1, mb: .5 }}>{m.val}</Typography>
              <Typography sx={{ fontFamily: MONO, fontSize: ".63rem", letterSpacing: ".15em", textTransform: "uppercase", color: TEXT3 }}>{m.lbl}</Typography>
            </Box>
          ))}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontFamily: MONO, fontSize: ".65rem", letterSpacing: ".1em", color: G, border: `1px solid rgba(16,185,129,.2)`, px: 2, py: 1, borderRadius: 99, background: "rgba(16,185,129,.06)" }}>
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: G, boxShadow: `0 0 8px ${G}`, animation: "blink 2s ease-in-out infinite" }} />
            Available for Projects
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", xl: "block" }, position: "absolute", right: "80px", top: "50%", transform: "translateY(-50%)", width: "min(34vw,400px)", background: CARD, border: `1px solid ${BHI}`, borderRadius: "14px", overflow: "hidden", boxShadow: `0 0 80px rgba(0,212,255,.1),0 0 0 1px rgba(0,212,255,.05),0 40px 100px rgba(0,0,0,.6)`, animation: "fadeUp 1s .9s ease both" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "7px", p: "11px 16px", background: `rgba(0,212,255,.04)`, borderBottom: `1px solid ${BORDER}` }}>
            {["#ef4444", "#f59e0b", "#10b981"].map((c, i) => <Box key={i} sx={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
            <Typography sx={{ fontFamily: MONO, fontSize: ".58rem", color: TEXT3, ml: 1, letterSpacing: ".1em" }}>arix_ai_engine.py</Typography>
          </Box>
          <Box sx={{ p: "18px 20px 22px", fontFamily: MONO, fontSize: ".7rem", lineHeight: 2, color: "text.secondary" }}>
            {([
              [TEXT3, "01", null, <><span style={{ color: C }}>import</span> <span style={{ color: "#f0f8ff" }}>arix</span></>],
              [TEXT3, "02", null, <><span style={{ color: C }}>from</span> <span style={{ color: "#f0f8ff" }}>arix.ai</span> <span style={{ color: C }}>import</span> <span style={{ color: V }}>SmartEngine</span></>],
              [TEXT3, "03", null, ""],
              [TEXT3, "04", null, <><span style={{ color: V }}>engine</span> <span style={{ color: "#f0f8ff" }}>=</span> <span style={{ color: G }}>SmartEngine</span><span style={{ color: "#f0f8ff" }}>(</span></>],
              [TEXT3, "05", "   ", <><span style={{ color: AM }}>model</span><span style={{ color: "#f0f8ff" }}>=</span><span style={{ color: G }}>"arix-pro-v2"</span><span style={{ color: "#f0f8ff" }}>,</span></>],
              [TEXT3, "06", "   ", <><span style={{ color: AM }}>stack</span><span style={{ color: "#f0f8ff" }}>[</span><span style={{ color: G }}>"django"</span><span style={{ color: "#f0f8ff" }}>,</span><span style={{ color: G }}>"react"</span><span style={{ color: "#f0f8ff" }}>],</span></>],
              [TEXT3, "07", "   ", <><span style={{ color: AM }}>deploy</span><span style={{ color: "#f0f8ff" }}>=</span><span style={{ color: V }}>True</span></>],
              [TEXT3, "08", null, <span style={{ color: "#f0f8ff" }}>)</span>],
              [TEXT3, "09", null, ""],
              [TEXT3, "10", null, <><span style={{ color: C }}>{"# \u2713 Build complete in 2.3s"}</span></>],
              [TEXT3, "11", null, <><span style={{ color: C }}>{"# \u2713 AI layers: 4 active"}</span></>],
              [TEXT3, "12", null, <><span style={{ color: C }}>{"# \u2713 Deployed to production"}</span></>],
            ] as [string, string, string | null, ReactNode][]).map(([nc, num, indent, content], i) => (
              <Box key={i} sx={{ display: "flex", gap: 1 }}>
                <span style={{ color: nc, minWidth: "2ch" }}>{num}</span>
                <span>{indent}</span>
                <span>{content}</span>
              </Box>
            ))}
            <Box sx={{ mt: .5, display: "flex", gap: 1 }}>
              <Box component="span" sx={{ color: G }}>{"\u25B6"}</Box>
              <Box component="span" sx={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap", borderRight: `2px solid ${C}`, animation: "typing 2.2s steps(30,end) 1.2s both, barcursor .75s step-end 1.2s infinite" }}>Running Arix engine v2.1...</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Marquee />

      <Box sx={{ px: { xs: 2, sm: 4, md: "5vw", lg: "80px" }, py: "80px", display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4,1fr)" }, gap: 2 }}>
        {[
          { n: "20+", lbl: "Projects Delivered", icon: "\u{1F680}", color: C },
          { n: "100%", lbl: "Remote Delivery", icon: "\u{1F30D}", color: V },
          { n: "24h", lbl: "Response Time", icon: "\u26A1", color: G },
          { n: "E2E", lbl: "Full Stack Execution", icon: "\u{1F527}", color: AM },
        ].map((s, i) => (
          <Box key={i} className="hover-card" sx={{ p: 3, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 3, position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", inset: 0, background: `radial-gradient(ellipse at 30% 0%,${s.color}18,transparent 65%)`, opacity: 0, transition: "opacity .4s" }, "&:hover::before": { opacity: 1 } }}>
            <Typography sx={{ fontSize: "1.5rem", mb: 1.5 }}>{s.icon}</Typography>
            <Typography sx={{ fontFamily: SYNE, fontSize: "2rem", fontWeight: 800, letterSpacing: "-.03em", color: s.color, mb: .5, textShadow: `0 0 20px ${s.color}60` }}>{s.n}</Typography>
            <Typography sx={{ fontFamily: MONO, fontSize: ".62rem", letterSpacing: ".12em", textTransform: "uppercase", color: TEXT3 }}>{s.lbl}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
