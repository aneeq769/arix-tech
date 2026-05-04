import { Box, Typography } from "@mui/material";
import { EyeLabel } from "../components/common/EyeLabel";
import { BORDER, MONO, SYNE, V } from "../constants/design";
import { AI_FEATURES, SERVICES } from "../data/siteData";

export function ServicesPage() {
  return (
    <Box sx={{ pt: "120px", pb: "100px", px: { xs: 2, sm: 4, md: "5vw", lg: "80px" }, position: "relative" }}>
      <Box sx={{ position: "absolute", top: "15%", right: "5%", width: "40vw", height: "40vh", borderRadius: "50%", background: `radial-gradient(ellipse,${V}08,transparent 70%)`, pointerEvents: "none" }} />

      <EyeLabel>What We Build</EyeLabel>
      <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.8rem" }, letterSpacing: "-.035em", lineHeight: 1.05, mb: 2 }}>
        Services crafted for<br /><Box component="span" className="grad-text">modern software teams</Box>
      </Typography>
      <Typography sx={{ color: "text.secondary", maxWidth: "52ch", lineHeight: 1.8, fontSize: "1.02rem", mb: 8 }}>
        {"Clean engineering, smart automation, and thoughtful interface design \u2014 delivered end-to-end."}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: "1px", background: BORDER, border: `1px solid ${BORDER}`, borderRadius: "16px", overflow: "hidden", mb: 12 }}>
        {SERVICES.map((s, i) => (
          <Box key={i} className="srv-card hover-card" sx={{ "--ac": `${s.accent}22`, "--acs": `${s.accent}66`, background: "#040d1a", p: "36px 30px", position: "relative", overflow: "hidden", transition: "background .3s" } as object}>
            <Box className="srv-icon-wrap" sx={{ width: 48, height: 48, borderRadius: "12px", background: `${s.accent}12`, border: `1px solid ${s.accent}40`, display: "grid", placeItems: "center", mb: 2.5, fontSize: "1.3rem", transition: "box-shadow .3s" }}>{s.icon}</Box>
            <Typography sx={{ fontFamily: SYNE, fontSize: "1.12rem", fontWeight: 700, mb: 1.25, letterSpacing: "-.01em" }}>{s.name}</Typography>
            <Typography sx={{ fontSize: ".88rem", color: "text.secondary", lineHeight: 1.72, mb: 2 }}>{s.desc}</Typography>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: .75, fontFamily: MONO, fontSize: ".58rem", letterSpacing: ".12em", textTransform: "uppercase", color: s.accent, background: `${s.accent}10`, border: `1px solid ${s.accent}28`, px: "10px", py: "5px", borderRadius: 99 }}>
              <Box sx={{ width: 4, height: 4, borderRadius: "50%", background: s.accent, boxShadow: `0 0 6px ${s.accent}` }} />
              {s.tag}
            </Box>
            <Box className="glow-line" sx={{ "--lc": s.accent } as object} />
          </Box>
        ))}
      </Box>

      <EyeLabel color={V}>AI Advantage</EyeLabel>
      <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3.4rem" }, letterSpacing: "-.035em", lineHeight: 1.05, mb: 2 }}>
        Intelligence built<br /><Box component="span" sx={{ background: `linear-gradient(110deg,${V},#c084fc)`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>into every layer</Box>
      </Typography>
      <Typography sx={{ color: "text.secondary", maxWidth: "52ch", lineHeight: 1.8, mb: 7 }}>
        {"We don't bolt AI on \u2014 we architect it in from the start, so your product gets smarter over time."}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: "1px", background: `${V}22`, border: `1px solid ${V}30`, borderRadius: "16px", overflow: "hidden" }}>
        {AI_FEATURES.map((f, i) => (
          <Box key={i} className="hover-card" sx={{ background: "#040d1a", p: "40px 34px", position: "relative", overflow: "hidden", transition: "background .3s", "&::before": { content: '""', position: "absolute", inset: 0, background: `radial-gradient(ellipse at 25% 25%,${f.color}14,transparent 65%)`, opacity: 0, transition: "opacity .4s" }, "&:hover::before": { opacity: 1 }, "&:hover": { background: "#050f20", borderColor: "transparent !important" } }}>
            <Typography sx={{ fontSize: "2.2rem", mb: 2.5 }}>{f.icon}</Typography>
            <Typography sx={{ fontFamily: SYNE, fontSize: "1.15rem", fontWeight: 700, mb: 1.5 }}>{f.name}</Typography>
            <Typography sx={{ fontSize: ".9rem", color: "text.secondary", lineHeight: 1.75, mb: 3 }}>{f.desc}</Typography>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".12em", textTransform: "uppercase", color: f.color, background: `${f.color}10`, border: `1px solid ${f.color}30`, px: "12px", py: "6px", borderRadius: 99 }}>
              <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: f.color, boxShadow: `0 0 8px ${f.color}`, animation: "blink 2s ease-in-out infinite" }} />
              {f.badge}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
