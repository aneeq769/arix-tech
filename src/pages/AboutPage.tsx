import { Box, Typography } from "@mui/material";
import { EyeLabel } from "../components/common/EyeLabel";
import { GlowDiv } from "../components/common/GlowDiv";
import { B20, BHI, BORDER, C, CARD, MONO, SYNE, TEXT3, V, V10 } from "../constants/design";
import { ABOUT_BULLETS, PROCESS } from "../data/siteData";

export function AboutPage() {
  return (
    <Box sx={{ pt: "120px", pb: "100px", px: { xs: 2, sm: 4, md: "5vw", lg: "80px" } }}>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: { xs: 6, lg: 10 }, alignItems: "center", mb: 14 }}>
        <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", justifyContent: "center", position: "relative", height: 460 }}>
          {[
            { s: 200, dur: 14, color: C, dot: "top" },
            { s: 310, dur: 22, color: V, dot: "bottom", rev: true },
            { s: 420, dur: 32, color: C, dot: "right" },
          ].map((r, i) => (
            <Box key={i} sx={{ position: "absolute", width: r.s, height: r.s, border: `1px solid ${r.color}28`, borderRadius: "50%", animation: `${r.rev ? "spinR" : "spin"} ${r.dur}s linear infinite` }}>
              <Box sx={{ position: "absolute", width: 10, height: 10, borderRadius: "50%", background: r.color, boxShadow: `0 0 14px ${r.color},0 0 28px ${r.color}60`, ...(r.dot === "top" ? { top: -5, left: "50%", transform: "translateX(-50%)" } : r.dot === "bottom" ? { bottom: -5, left: "50%", transform: "translateX(-50%)" } : { right: -5, top: "50%", transform: "translateY(-50%)" }) }} />
            </Box>
          ))}
          <Box sx={{ position: "relative", width: 90, height: 90, borderRadius: "20px", background: `linear-gradient(135deg,${B20},${V10})`, border: `1px solid ${BHI}`, display: "grid", placeItems: "center", boxShadow: `0 0 40px rgba(0,212,255,.2),0 0 80px rgba(0,212,255,.08)`, animation: "float 4s ease-in-out infinite" }}>
            <Typography sx={{ fontFamily: SYNE, fontSize: "1.9rem", fontWeight: 800, background: `linear-gradient(135deg,${C},${V})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ax</Typography>
          </Box>
          {[
            { l: "Python", style: { top: "12%", left: "8%" } },
            { l: "React", style: { top: "12%", right: "8%" } },
            { l: "AI / ML", style: { bottom: "12%", left: "8%" } },
            { l: "Django", style: { bottom: "12%", right: "8%" } },
          ].map((t, i) => (
            <Box key={i} sx={{ position: "absolute", ...t.style, fontFamily: MONO, fontSize: ".62rem", letterSpacing: ".12em", background: CARD, border: `1px solid ${BHI}`, color: C, px: "14px", py: "7px", borderRadius: 99, backdropFilter: "blur(8px)", boxShadow: `0 0 14px rgba(0,212,255,.15)` }}>{t.l}</Box>
          ))}
        </Box>

        <Box>
          <EyeLabel>About Arix Tech</EyeLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" }, letterSpacing: "-.035em", lineHeight: 1.05, mb: 2.5 }}>
            Built by engineers,<br /><Box component="span" className="grad-text">obsessed with craft</Box>
          </Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1.02rem", mb: 5 }}>
            {"Arix Tech helps brands and teams move faster with reliable software. From AI-driven products to Python backends, scraping systems, dashboards, and web apps \u2014 we build solutions that are practical, maintainable, and visually refined."}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {ABOUT_BULLETS.map((b, i) => (
              <Box key={i} className="hover-card" sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: "16px 20px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "10px", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: b.color, borderRadius: "2px 0 0 2px", boxShadow: `0 0 10px ${b.color}60` } }}>
                <Typography sx={{ color: b.color, flexShrink: 0, fontSize: ".85rem", mt: "1px" }}>{"\u25B8"}</Typography>
                <Typography sx={{ fontSize: ".9rem", color: "text.secondary", lineHeight: 1.65 }}>{b.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <GlowDiv />
      <Box sx={{ mt: 10 }}>
        <EyeLabel color={V}>How We Work</EyeLabel>
        <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" }, letterSpacing: "-.035em", lineHeight: 1.05, mb: 2 }}>
          Our <Box component="span" sx={{ background: `linear-gradient(110deg,${V},#c084fc)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>process</Box>
        </Typography>
        <Typography sx={{ color: "text.secondary", maxWidth: "52ch", lineHeight: 1.8, mb: 8 }}>
          A systematic, transparent approach from first conversation to live product.
        </Typography>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4,1fr)" }, gap: 3 }}>
          {PROCESS.map((p, i) => (
            <Box key={i} className="hover-card" sx={{ p: "32px 26px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "14px", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", inset: 0, background: `radial-gradient(ellipse at 30% 0%,${p.color}18,transparent 60%)`, opacity: 0, transition: "opacity .4s" }, "&:hover::before": { opacity: 1 } }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                <Typography sx={{ fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".2em", color: TEXT3 }}>{p.num} / PHASE</Typography>
                <Box sx={{ fontFamily: SYNE, fontSize: "1.8rem", fontWeight: 800, color: `${p.color}30`, letterSpacing: "-.04em" }}>{p.num}</Box>
              </Box>
              <Typography sx={{ fontSize: "1.7rem", mb: 1.5 }}>{p.icon}</Typography>
              <Typography sx={{ fontFamily: SYNE, fontSize: "1.08rem", fontWeight: 700, mb: 1, color: p.color }}>{p.name}</Typography>
              <Typography sx={{ fontSize: ".86rem", color: "text.secondary", lineHeight: 1.68 }}>{p.desc}</Typography>
              <Box className="glow-line" sx={{ "--lc": p.color } as object} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
