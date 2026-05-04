import { Box } from "@mui/material";
import { BORDER, C, G, MONO, TEXT3, V } from "../../constants/design";
import { STACK } from "../../data/siteData";

export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <Box sx={{ py: 3, background: "rgba(3,8,18,.95)", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, overflow: "hidden", position: "relative",
      "&::before,&::after": { content: '""', position: "absolute", top: 0, bottom: 0, width: 100, zIndex: 2 },
      "&::before": { left: 0, background: "linear-gradient(to right,rgba(3,8,18,.95),transparent)" },
      "&::after": { right: 0, background: "linear-gradient(to left,rgba(3,8,18,.95),transparent)" },
    }}>
      <Box sx={{ display: "flex", width: "max-content", animation: "marqueeX 30s linear infinite" }}>
        {items.map((s, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5, px: "36px", fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: TEXT3, borderRight: `1px solid ${BORDER}`, whiteSpace: "nowrap" }}>
            <Box sx={{ width: 4, height: 4, borderRadius: "50%", background: i % 3 === 0 ? C : i % 3 === 1 ? V : G, boxShadow: `0 0 6px ${i % 3 === 0 ? C : i % 3 === 1 ? V : G}` }} />
            {s}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
