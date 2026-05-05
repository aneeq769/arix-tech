import { Box, Typography } from "@mui/material";
import { BORDER, C, MONO, TEXT3 } from "../../constants/design";
import type { Navigate } from "../../types/site";

export function Footer({ navigate }: { navigate: Navigate }) {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: "5vw", lg: "80px" }, py: { xs: "32px", sm: "40px", md: "48px" }, borderTop: `1px solid ${BORDER}`, display: "flex", alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", flexWrap: "wrap", gap: { xs: 1.5, md: 2 }, position: "relative", "&::before": { content: '""', position: "absolute", top: 0, left: "20%", right: "20%", height: 1, background: `linear-gradient(90deg,transparent,${C},transparent)`, opacity: .35 } }}>
      <Box>
        <Typography sx={{ fontFamily: MONO, fontSize: ".63rem", letterSpacing: ".12em", color: TEXT3 }}>{"\u00A9 2025 Arix Tech \u2014 All rights reserved"}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 }, flexWrap: "wrap" }}>
        {["Privacy", "Terms", "Contact"].map((l) => (
          <Typography key={l} onClick={() => l === "Contact" && navigate("Contact")} sx={{ fontFamily: MONO, fontSize: ".63rem", letterSpacing: ".1em", color: TEXT3, cursor: "pointer", "&:hover": { color: C }, transition: "color .2s" }}>{l}</Typography>
        ))}
      </Box>
      <Typography sx={{ fontFamily: MONO, fontSize: ".63rem", letterSpacing: ".08em", color: TEXT3, maxWidth: { xs: "100%", md: "none" } }}>
        Built with <Box component="span" sx={{ color: C }}>{"\u2666"}</Box> by{" "}
        <Box component="span" onClick={() => navigate("Home")} sx={{ color: C, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>Arix Tech</Box>
      </Typography>
    </Box>
  );
}
