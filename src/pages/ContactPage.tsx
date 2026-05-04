import { Box, TextField, Typography } from "@mui/material";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { EyeLabel } from "../components/common/EyeLabel";
import { BHI, BORDER, C, CARD, G, MONO, TEXT3, V } from "../constants/design";
import { CONTACT_ITEMS } from "../data/siteData";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", subject: "", msg: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e?: FormEvent) {
    e?.preventDefault();

    const name = form.name.trim() || "Arix Tech Website Visitor";
    const subject = form.subject.trim() || "Project Inquiry from Arix Tech Website";
    const msg = form.msg.trim() || "Hello, I would like to discuss a project with Arix Tech.";

    const body = [
      "Hello Arix Tech,",
      "",
      "I am reaching out through your website and would like to discuss a project.",
      "",
      `Name: ${name}`,
      "",
      "Project Details:",
      msg,
      "",
      "Please let me know the next best step to move forward.",
      "",
      "Best regards,",
      name,
    ].join("\n");

    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=support.arixtech@gmail.com` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => {
      window.location.href = gmailComposeUrl;
    }, 100);
    setTimeout(() => setSent(false), 4000);
  }

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      background: "rgba(0,212,255,.03)",
      borderRadius: "10px",
      fontSize: ".92rem",
      "& fieldset": { borderColor: BORDER, borderWidth: "1px" },
      "&:hover fieldset": { borderColor: BHI },
      "&.Mui-focused fieldset": { borderColor: C, boxShadow: `0 0 0 3px rgba(0,212,255,.08)` },
    },
    "& label": { fontFamily: MONO, fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", color: TEXT3 },
    "& label.Mui-focused": { color: C },
    "& .MuiInputBase-input": { color: "text.primary" },
  };

  return (
    <Box sx={{ pt: "120px", pb: "100px", px: { xs: 2, sm: 4, md: "5vw", lg: "80px" }, position: "relative" }}>
      <Box sx={{ position: "absolute", top: "10%", left: "-5%", width: "45vw", height: "45vh", borderRadius: "50%", background: `radial-gradient(ellipse,rgba(0,212,255,.04),transparent 70%)`, pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "10%", right: "-5%", width: "40vw", height: "40vh", borderRadius: "50%", background: `radial-gradient(ellipse,${V}06,transparent 70%)`, pointerEvents: "none" }} />

      <Box sx={{ textAlign: "center", mb: 10 }}>
        <EyeLabel>Get In Touch</EyeLabel>
        <Typography variant="h2" sx={{ fontSize: { xs: "2.5rem", md: "4.2rem" }, letterSpacing: "-.04em", lineHeight: 1, mb: 2.5 }}>
          Let's build your<br /><Box component="span" className="grad-text">next product</Box>
        </Typography>
        <Typography sx={{ color: "text.secondary", maxWidth: "48ch", mx: "auto", lineHeight: 1.8, fontSize: "1.05rem" }}>
          Share your idea or requirement and Arix Tech can shape the right solution for your team.
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1.6fr" }, gap: { xs: 6, lg: 8 }, alignItems: "start" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {CONTACT_ITEMS.map((c, i) => (
            <Box key={i} className="hover-card" sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: "22px 24px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "14px", position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", inset: 0, background: `radial-gradient(ellipse at 20% 50%,${c.color}12,transparent 60%)`, opacity: 0, transition: "opacity .4s" }, "&:hover::before": { opacity: 1 } }}>
              <Box sx={{ width: 40, height: 40, borderRadius: "10px", background: `${c.color}12`, border: `1px solid ${c.color}30`, display: "grid", placeItems: "center", fontSize: "1.05rem", flexShrink: 0, boxShadow: `0 0 14px ${c.color}20` }}>{c.icon}</Box>
              <Box>
                <Typography sx={{ fontFamily: MONO, fontSize: ".58rem", letterSpacing: ".15em", textTransform: "uppercase", color: TEXT3, mb: .5 }}>{c.label}</Typography>
                <Typography sx={{ fontSize: ".92rem", color: "text.secondary" }}>{c.val}</Typography>
              </Box>
            </Box>
          ))}

          <Box sx={{ p: "22px 24px", background: `rgba(16,185,129,.06)`, border: `1px solid rgba(16,185,129,.2)`, borderRadius: "14px", display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ width: 40, height: 40, borderRadius: "50%", background: `rgba(16,185,129,.12)`, border: `1px solid rgba(16,185,129,.3)`, display: "grid", placeItems: "center", flexShrink: 0 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", background: G, boxShadow: `0 0 10px ${G}`, animation: "pulsering 2.5s ease-in-out infinite" }} />
            </Box>
            <Box>
              <Typography sx={{ fontFamily: MONO, fontSize: ".58rem", letterSpacing: ".15em", textTransform: "uppercase", color: "rgba(16,185,129,.5)", mb: .5 }}>Status</Typography>
              <Typography sx={{ fontSize: ".92rem", color: G }}>Available for new projects</Typography>
            </Box>
          </Box>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "20px", p: { xs: 3, md: 5 }, position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", top: 0, left: "20%", right: "20%", height: "1px", background: `linear-gradient(90deg,transparent,${C},transparent)`, opacity: .4 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 2.5, mb: 2.5 }}>
            <TextField name="name" label="Your Name" placeholder="John Doe" value={form.name} onChange={handleChange} fullWidth sx={fieldSx} />
            <TextField name="subject" label="Subject" placeholder="Project inquiry" value={form.subject} onChange={handleChange} fullWidth sx={fieldSx} />
          </Box>
          <TextField name="msg" label="Message" placeholder={"Tell us about your project, timeline, goals, and anything important we should know\u2026"} multiline rows={6} value={form.msg} onChange={handleChange} fullWidth sx={{ ...fieldSx, mb: 3.5 }} />

          <Box data-hover component="button" type="submit" className="hover-btn" sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 1, fontFamily: MONO, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#000", background: sent ? `linear-gradient(135deg,${G},#059669)` : `linear-gradient(135deg,${C},#0ea5e9)`, border: "none", py: "16px", borderRadius: "10px", cursor: "pointer", fontWeight: 700, boxShadow: sent ? `0 0 28px rgba(16,185,129,.4)` : `0 0 28px rgba(0,212,255,.4)`, transition: "all .3s", "&:hover": { boxShadow: sent ? `0 0 48px rgba(16,185,129,.6)` : `0 0 48px rgba(0,212,255,.6)` } }}>
            {sent ? "Opening Gmail \u2713" : "Send Message \u2192"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
