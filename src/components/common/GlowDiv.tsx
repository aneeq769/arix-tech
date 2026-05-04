import { Box } from "@mui/material";
import { C } from "../../constants/design";

export function GlowDiv({ color = C }: { color?: string }) {
  return <Box sx={{ height: 1, background: `linear-gradient(90deg,transparent,${color},transparent)`, opacity: .25, my: 0 }} />;
}
