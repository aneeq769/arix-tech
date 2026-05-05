import { Button, Box, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { B10, B20, B30, BHI, BORDER, C, G, MONO, SYNE, V, V10 } from "../../constants/design";
import type { ChatMessage } from "../../types/site";
import { getBotReply } from "../../utils/chatbot";

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMessage[]>([{ role: "bot", text: "Hi! I'm the Arix Assistant. Ask me about AI, Django, scraping, pricing, or timelines." }]);
  const [inp, setInp] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [msgs]);

  function send() {
    const v = inp.trim();
    if (!v) return;
    setMsgs((m) => [...m, { role: "user", text: v }]);
    setInp("");
    setTimeout(() => setMsgs((m) => [...m, { role: "bot", text: getBotReply(v) }]), 500);
  }

  return (
    <Box sx={{ position: "fixed", bottom: { xs: 16, sm: 24 }, right: { xs: 16, sm: 24 }, zIndex: 400, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1.5, maxWidth: "calc(100vw - 32px)" }}>
      {open && (
        <Box sx={{ width: "min(92vw,340px)", maxWidth: "100%", background: "rgba(4,10,22,.97)", border: `1px solid ${BHI}`, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", backdropFilter: "blur(28px)", animation: "fadeUp .25s ease", boxShadow: `0 0 60px rgba(0,212,255,.12),0 32px 80px rgba(0,0,0,.7)` }}>
          <Box sx={{ p: "14px 16px", background: `linear-gradient(135deg,${B10},${V10})`, borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,${C},${V})`, display: "grid", placeItems: "center", fontSize: "1rem", boxShadow: `0 0 14px rgba(0,212,255,.4)` }}>{"\u{1F916}"}</Box>
              <Box>
                <Typography sx={{ fontFamily: SYNE, fontSize: ".88rem", fontWeight: 700, color: "#f0f8ff" }}>Arix Assistant</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: .75, fontFamily: MONO, fontSize: ".58rem", letterSpacing: ".12em", color: G }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: G, boxShadow: `0 0 8px ${G}`, animation: "blink 2s ease-in-out infinite" }} />Online
                </Box>
              </Box>
            </Box>
            <Box data-hover onClick={() => setOpen(false)} sx={{ width: 28, height: 28, borderRadius: "50%", border: `1px solid rgba(255,255,255,.12)`, display: "grid", placeItems: "center", cursor: "pointer", color: "rgba(255,255,255,.45)", "&:hover": { background: "rgba(255,255,255,.08)" } }}>{"\u2715"}</Box>
          </Box>
          <Box sx={{ flex: 1, minHeight: 190, maxHeight: { xs: 240, sm: 260 }, overflowY: "auto", p: 1.75, display: "flex", flexDirection: "column", gap: 1, scrollbarWidth: "thin", scrollbarColor: `${B20} transparent` }}>
            {msgs.map((m, i) => (
              <Box key={i} sx={{ maxWidth: "86%", p: "10px 14px", borderRadius: "14px", fontSize: ".82rem", lineHeight: 1.55, color: "#eef4ff", alignSelf: m.role === "user" ? "flex-end" : "flex-start", background: m.role === "user" ? "linear-gradient(135deg,rgba(0,80,160,.8),rgba(0,40,100,.9))" : "rgba(10,25,45,.9)", border: `1px solid ${m.role === "user" ? B30 : BORDER}`, borderBottomRightRadius: m.role === "user" ? 4 : 14, borderBottomLeftRadius: m.role === "bot" ? 4 : 14 }}>{m.text}</Box>
            ))}
            <div ref={endRef} />
          </Box>
          <Box sx={{ p: "10px 12px", borderTop: `1px solid ${BORDER}`, display: "flex", gap: 1 }}>
            <TextField size="small" fullWidth value={inp} onChange={(e) => setInp(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder={"Type a message\u2026"} sx={{ "& .MuiOutlinedInput-root": { background: "rgba(255,255,255,.03)", borderRadius: 2, fontSize: ".83rem", "& fieldset": { borderColor: BORDER }, "&:hover fieldset": { borderColor: BHI }, "&.Mui-focused fieldset": { borderColor: C, boxShadow: `0 0 0 3px ${B10}` } } }} />
            <Button onClick={send} sx={{ background: `linear-gradient(135deg,${C},#0ea5e9)`, color: "#000", fontFamily: MONO, fontSize: ".66rem", letterSpacing: ".08em", fontWeight: 700, px: 2, minWidth: 0, whiteSpace: "nowrap", "&:hover": { background: `linear-gradient(135deg,#7dd3fc,${C})` } }}>Send</Button>
          </Box>
        </Box>
      )}
      <Box data-hover onClick={() => setOpen((o) => !o)} sx={{ width: { xs: 52, sm: 56 }, height: { xs: 52, sm: 56 }, borderRadius: "50%", background: open ? "rgba(10,20,40,.95)" : `linear-gradient(135deg,${C},#0284c7)`, border: `1px solid ${open ? "rgba(255,255,255,.15)" : BHI}`, display: "grid", placeItems: "center", cursor: "pointer", fontSize: { xs: "1.25rem", sm: "1.4rem" }, boxShadow: open ? "0 4px 16px rgba(0,0,0,.5)" : `0 8px 32px rgba(0,212,255,.4),0 0 0 0 rgba(0,212,255,.3)`, animation: open ? "none" : "pulsering 2.5s ease-in-out infinite", "&:hover": { transform: "scale(1.1)" }, transition: "all .25s" }}>
        {open ? "\u2715" : "\u{1F4AC}"}
      </Box>
    </Box>
  );
}
