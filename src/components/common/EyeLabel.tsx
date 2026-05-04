import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { C, MONO } from "../../constants/design";

export function EyeLabel({ children, color = C }: { children: ReactNode; color?: string }) {
  return (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.25, mb: 2,
      fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color,
      "&::before": { content: '""', display: "block", width: 24, height: 1, background: color, boxShadow: `0 0 8px ${color}` },
    }}>{children}</Box>
  );
}
