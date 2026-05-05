import { AppBar, Box, Drawer, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import arixLogo from "../../assets/arix-logo.png";
import { B10, B20, BHI, BORDER, C, MONO, NAV } from "../../constants/design";
import type { Navigate } from "../../types/site";

export function Navbar({ current, navigate }: { current: string; navigate: Navigate }) {
  const th = useTheme();
  const isMob = useMediaQuery(th.breakpoints.down("md"));
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(scrollY > 20);
    addEventListener("scroll", fn);
    return () => removeEventListener("scroll", fn);
  }, []);

  function go(p: string) {
    navigate(p);
    setDrawer(false);
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ background: scrolled ? "rgba(2,4,8,.92)" : "rgba(2,4,8,.7)", backdropFilter: "blur(28px)", borderBottom: `1px solid ${scrolled ? BHI : BORDER}`, transition: "all .4s", boxShadow: scrolled ? `0 1px 40px rgba(0,212,255,.08)` : "none" }}>
        <Toolbar sx={{ px: { xs: 2, sm: 3, md: "5vw", lg: "72px" }, minHeight: { xs: 64, md: 68 }, height: { xs: 64, md: 68 }, justifyContent: "space-between" }}>
          <Box data-hover onClick={() => go("Home")} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <Box component="img" src={arixLogo} alt="Arix Tech" sx={{ height: { xs: 116, sm: 136, md: 170 }, width: "auto", objectFit: "contain", filter: "drop-shadow(0 0 10px rgba(0,212,255,0.35))", transition: "filter .3s", "&:hover": { filter: "drop-shadow(0 0 16px rgba(0,212,255,0.6))" } }} />
          </Box>

          {!isMob && (
            <Box sx={{ display: "flex", gap: "32px" }}>
              {NAV.map((l) => (
                <Box key={l} data-hover onClick={() => go(l)} sx={{ fontFamily: MONO, fontSize: ".67rem", letterSpacing: ".14em", textTransform: "uppercase", cursor: "pointer", color: current === l ? C : "text.secondary", transition: "color .2s", "&:hover": { color: C }, position: "relative", pb: "3px", "&::after": { content: '""', position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg,transparent,${C},transparent)`, opacity: current === l ? 1 : 0, transition: "opacity .3s" } }}>{l}</Box>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {!isMob && (
              <Box data-hover onClick={() => go("Contact")} sx={{ fontFamily: MONO, fontSize: ".67rem", letterSpacing: ".1em", textTransform: "uppercase", color: C, background: B10, border: `1px solid ${BHI}`, px: "18px", py: "9px", borderRadius: "6px", cursor: "pointer", transition: "all .25s", "&:hover": { background: B20, boxShadow: `0 0 24px rgba(0,212,255,.25)` } }}>{"Start Project \u2192"}</Box>
            )}
            {isMob && (
              <Box data-hover onClick={() => setDrawer(true)} sx={{ display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer", p: 1 }}>
                {[0, 1, 2].map((i) => <Box key={i} sx={{ width: 22, height: "1.5px", background: "rgba(180,220,255,.6)" }} />)}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)} PaperProps={{ sx: { width: { xs: "min(82vw, 300px)", sm: 270 }, background: "rgba(2,6,16,.98)", backdropFilter: "blur(28px)", borderLeft: `1px solid ${BORDER}` } }}>
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 1 }}>
          <Box onClick={() => go("Home")} sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer" }}>
            <Box component="img" src={arixLogo} alt="Arix Tech" sx={{ height: 32, width: "auto", objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(0,212,255,0.3))" }} />
          </Box>
          {NAV.map((l) => (
            <Box key={l} onClick={() => go(l)} sx={{ fontFamily: MONO, fontSize: ".68rem", letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer", color: current === l ? C : "text.secondary", p: "12px 16px", borderRadius: 2, background: current === l ? B10 : "transparent", border: `1px solid ${current === l ? BHI : "transparent"}`, transition: "all .2s", "&:hover": { color: C, background: B10 } }}>{l}</Box>
          ))}
          <Box onClick={() => go("Contact")} sx={{ mt: 1.5, background: `linear-gradient(135deg,${C},#0ea5e9)`, color: "#000", fontFamily: MONO, fontWeight: 700, fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", p: "12px 20px", borderRadius: 2, cursor: "pointer", textAlign: "center", "&:hover": { background: `linear-gradient(135deg,#7dd3fc,${C})` } }}>{"Start Project \u2192"}</Box>
        </Box>
      </Drawer>
    </>
  );
}
