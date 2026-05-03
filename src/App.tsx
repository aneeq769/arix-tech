const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.cdnfonts.com/css/nasalization";
document.head.appendChild(fontLink);

import { useState, useEffect, useRef, useCallback } from "react";
import arixLogo from "./assets/arix-logo.png";
import emailjs from "@emailjs/browser";
import {
  Box, Typography, Button, AppBar, Toolbar, TextField,
  Drawer, useMediaQuery, useTheme,
  ThemeProvider, createTheme, CssBaseline,
} from "@mui/material";

// ─── THEME ───────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: "dark",
    primary:    { main: "#00d4ff" },
    secondary:  { main: "#a855f7" },
    background: { default: "#020408", paper: "#050c14" },
    text:       { primary: "#f0f8ff", secondary: "rgba(180,220,255,0.65)" },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
    h2: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
    h3: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
    h4: { fontFamily: "'Nasalization Rg', 'Nasalization', sans-serif", fontWeight: 400 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: 8 } } },
    MuiCssBaseline: { styleOverrides: { body: { overflowX: "hidden" } } },
  },
});

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const C  = "#00d4ff";
const V  = "#a855f7";
const G  = "#10b981";
const AM = "#f59e0b";
const MONO = "'Space Mono', monospace";
const SYNE = "'Nasalization Rg', 'Nasalization', sans-serif";
const B0  = "rgba(0,212,255,0)";
const B10 = "rgba(0,212,255,0.10)";
const B20 = "rgba(0,212,255,0.20)";
const B30 = "rgba(0,212,255,0.30)";
const V10 = "rgba(168,85,247,0.10)";
const V20 = "rgba(168,85,247,0.20)";
const CARD = "rgba(5,15,30,0.85)";
const BORDER = "rgba(0,212,255,0.12)";
const BHI   = "rgba(0,212,255,0.35)";
const TEXT3  = "rgba(100,160,210,0.4)";

// Suppress unused variable warnings for tokens used in template literals
void B0; void V20;

const NAV = ["Home","Services","Portfolio","About","Contact"];

interface Service {
  icon: string;
  name: string;
  desc: string;
  tag: string;
  accent: string;
}

interface PortfolioItem {
  type: string;
  name: string;
  desc: string;
  idx: string;
  color: string;
  full?: boolean;
}

interface ProcessStep {
  num: string;
  icon: string;
  name: string;
  desc: string;
  color: string;
}

interface AIFeature {
  icon: string;
  name: string;
  desc: string;
  badge: string;
  color: string;
}

interface AboutBullet {
  text: string;
  color: string;
}

interface ContactItem {
  icon: string;
  label: string;
  val: string;
  color: string;
}

const SERVICES: Service[] = [
  { icon:"🤖", name:"AI Solutions",         desc:"Custom AI tools, smart assistants, workflow automation, and model-driven features designed for real business impact.",          tag:"LLM · Automation · Agents",          accent: C },
  { icon:"🐍", name:"Django & Python",      desc:"Scalable backends, APIs, dashboards, admin systems, and business logic engineered with clean Python architecture.",            tag:"Python · Django · FastAPI",            accent: G },
  { icon:"⚛️", name:"Web Applications",    desc:"Modern, responsive frontend experiences using React and MUI with product-focused UX and polished UI systems.",                tag:"React · MUI · TypeScript",            accent: V },
  { icon:"🕷️", name:"Web Scraping",        desc:"Reliable data extraction, automation bots, monitoring pipelines, and structured delivery from complex sources.",             tag:"Scrapy · Selenium · Playwright",      accent: AM },
  { icon:"📱", name:"Mobile-Ready Systems", desc:"Interfaces and platforms built to feel smooth across desktop, tablet, and mobile from day one.",                             tag:"Responsive · PWA · Cross-Platform",   accent: C },
  { icon:"⚙️", name:"Custom Automation",   desc:"Internal tools, workflow engines, reporting systems, and integrations that reduce manual work and speed up teams.",          tag:"Bots · Pipelines · Integrations",     accent: V },
];

const PORTFOLIO: PortfolioItem[] = [
  { type:"Artificial Intelligence", name:"AI Business Assistant",   desc:"Conversational assistant for operations, support, and decision workflows with role-based capabilities and live backend integrations.", idx:"01", color: C },
  { type:"Python / Django",         name:"Django ERP Dashboard",    desc:"Admin-heavy platform for reporting, analytics, inventory flow, and business management with role-based access control.",              idx:"02", color: G },
  { type:"Web Scraping",            name:"Data Scraping Engine",    desc:"Automated pipeline for collecting market data, validating records, and exporting structured datasets to downstream systems.",         idx:"03", color: V },
  { type:"Frontend / UI",           name:"Company Web Platform",    desc:"High-end responsive product website with branded interface design, conversion-focused sections, and AI-powered chatbot.",            idx:"04", color: AM },
  { type:"Delivery Model",          name:"End-to-End Execution",    desc:"We transform ideas into launched products through discovery, design, backend engineering, deployment, and iteration — handling the entire stack.", idx:"05", color: C, full: true },
];

const PROCESS: ProcessStep[] = [
  { num:"01", icon:"🔭", name:"Discovery",   desc:"We map your goals, constraints, and users to define exactly what to build and why.", color: C },
  { num:"02", icon:"🎨", name:"Design",      desc:"High-fidelity interfaces that balance premium aesthetics with usability and your brand.", color: V },
  { num:"03", icon:"🔧", name:"Engineering", desc:"Clean, maintainable code with tested APIs, solid architecture, and AI integrations built in.", color: G },
  { num:"04", icon:"🚀", name:"Deployment",  desc:"Ship with confidence — staging, production, monitoring, and weekly progress check-ins.", color: AM },
];

const AI_FEATURES: AIFeature[] = [
  { icon:"🧠", name:"LLM-Powered Workflows",       desc:"Embed large language models directly into your business processes — from intelligent document parsing to automated decision-making pipelines.", badge:"Active Integration", color: V },
  { icon:"🔍", name:"Intelligent Data Extraction",  desc:"AI-enhanced scraping that understands context, adapts to site changes, validates records, and delivers structured, clean datasets automatically.", badge:"Self-Healing Pipelines", color: C },
  { icon:"💬", name:"Conversational Interfaces",    desc:"Build AI assistants and chatbots that understand your domain, integrate with your backend, and deliver real value beyond scripted FAQs.", badge:"Context-Aware", color: G },
  { icon:"📊", name:"AI Analytics Dashboards",      desc:"Dashboards that don't just display — they interpret. Get anomaly detection, smart summaries, and predictive insights alongside your metrics.", badge:"Predictive Engine", color: AM },
];

const ABOUT_BULLETS: AboutBullet[] = [
  { text:"Premium UI with a product-first feel — every screen earns its place", color: C },
  { text:"Deep Python, Django, and AI expertise across every project", color: V },
  { text:"Custom scraping and automation pipelines built for reliability", color: G },
  { text:"Responsive-first development for modern web platforms", color: AM },
  { text:"Transparent delivery with weekly updates and clean handoffs", color: C },
];

const CONTACT_ITEMS: ContactItem[] = [
  { icon:"✉️", label:"Email",         val:"support.arixtech@gmail.com", color: C },
  { icon:"⚡", label:"Response Time", val:"Usually within 24 hours",     color: V },
  { icon:"🌍", label:"Work Type",     val:"Remote — clients worldwide",  color: G },
];

const STACK = ["AI","FastAPI","Flask","Python","Django","Java","SDK","Web Scraping","Automation","APIs","React","MUI","TypeScript","Playwright","Scrapy","LangChain","OpenAI","PostgreSQL","Redis","Docker"];

const BOT_REPLIES: Record<string, string> = {
  ai:"We build AI assistants, workflow automation, and model-powered business tools tailored to your operations.",
  django:"Our Python/Django services cover scalable backends, APIs, dashboards, and custom business platforms.",
  python:"Our Python/Django services cover scalable backends, APIs, dashboards, and custom business platforms.",
  scrap:"We create reliable web scraping pipelines with validation, monitoring, and structured data delivery.",
  price:"Pricing depends on scope and timeline. Drop your requirements in Contact for a clear estimate.",
  cost:"Pricing depends on scope and timeline. Drop your requirements in Contact for a clear estimate.",
  react:"We build polished React frontends with MUI, TypeScript, and mobile-first responsive design.",
  default:"Thanks! Please share your project goal and we'll suggest the right solution for you.",
};

function getBotReply(msg: string): string {
  const t = msg.toLowerCase();
  for (const [k,v] of Object.entries(BOT_REPLIES)) if (k!=="default"&&t.includes(k)) return v;
  return BOT_REPLIES.default;
}

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.cdnfonts.com/css/nasalization');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{cursor:none;overflow-x:hidden;background:#020408;}
#ax-cur{position:fixed;width:8px;height:8px;border-radius:50%;background:#00d4ff;box-shadow:0 0 12px #00d4ff,0 0 24px rgba(0,212,255,0.5);pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s;}
#ax-ring{position:fixed;width:36px;height:36px;border-radius:50%;border:1px solid rgba(0,212,255,0.45);pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:width .3s,height .3s,border-color .3s;}
#ax-cur.hov{width:14px;height:14px;background:#a855f7;box-shadow:0 0 16px #a855f7;}
#ax-ring.hov{width:48px;height:48px;border-color:rgba(168,85,247,0.5);}

@keyframes fadeUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:none;}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes shimmer{0%{background-position:0% 50%;}100%{background-position:200% 50%;}}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:.25;}}
@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes spinR{from{transform:rotate(360deg);}to{transform:rotate(0deg);}}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
@keyframes marqueeX{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
@keyframes pulsering{0%,100%{box-shadow:0 0 0 0 rgba(0,212,255,0.4);}50%{box-shadow:0 0 0 12px rgba(0,212,255,0);}}
@keyframes glowPulse{0%,100%{opacity:.6;}50%{opacity:1;}}
@keyframes countUp{from{transform:scale(.7);opacity:0;}to{transform:scale(1);opacity:1;}}
@keyframes pageIn{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:none;}}
@keyframes typing{from{width:0;}to{width:100%;}}
@keyframes barcursor{0%,100%{opacity:1;}50%{opacity:0;}}
@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

.anim-up{animation:fadeUp .7s ease both;}
.anim-up-1{animation:fadeUp .7s .15s ease both;}
.anim-up-2{animation:fadeUp .7s .3s ease both;}
.anim-up-3{animation:fadeUp .7s .45s ease both;}
.anim-up-4{animation:fadeUp .7s .6s ease both;}
.anim-up-5{animation:fadeUp .7s .75s ease both;}

.grad-text{
  background:linear-gradient(110deg,#00d4ff 0%,#7dd3fc 25%,#a855f7 55%,#c084fc 75%,#00d4ff 100%);
  background-size:300%;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;
  animation:shimmer 6s linear infinite;
}
.glow-line{
  position:absolute;left:0;right:0;bottom:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--lc,#00d4ff),transparent);
  opacity:0;transition:opacity .35s;
}
.hover-card:hover .glow-line{opacity:1;}
.hover-card{transition:transform .3s,border-color .3s,box-shadow .3s;}
.hover-card:hover{transform:translateY(-6px);border-color:rgba(0,212,255,.35)!important;box-shadow:0 24px 60px rgba(0,0,0,.5),0 0 40px rgba(0,212,255,.07)!important;}

.hover-btn{transition:all .25s;}
.hover-btn:hover{transform:translateY(-2px);}

.scanlines{position:fixed;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.018) 3px,rgba(0,0,0,.018) 4px);}
.noise{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.022;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:220px;}

.srv-card::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 20% 20%,var(--ac,rgba(0,212,255,.14)),transparent 55%);opacity:0;transition:opacity .4s;}
.srv-card:hover::before{opacity:1;}
.srv-card:hover .srv-icon-wrap{box-shadow:0 0 24px var(--acs,rgba(0,212,255,.4));}

.port-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--pc,#00d4ff),transparent);opacity:0;transition:opacity .35s;}
.port-card:hover::after{opacity:1;}

input,textarea{caret-color:#00d4ff;}
`;

// ─── NEURAL CANVAS ────────────────────────────────────────────────────────────
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({x:-999,y:-999});
  const nodes = useRef<Node[]>([]);
  const raf   = useRef<number>(0);
  useEffect(()=>{
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    let W = 0, H = 0;
    function resize(){
      W=cv.width=innerWidth;
      H=cv.height=innerHeight;
      const n=Math.floor(W*H/12000);
      nodes.current=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+.5}));
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      const ns=nodes.current,md=150;
      ns.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>W)n.vx*=-1;if(n.y<0||n.y>H)n.vy*=-1;});
      for(let i=0;i<ns.length;i++)for(let j=i+1;j<ns.length;j++){const dx=ns[i].x-ns[j].x,dy=ns[i].y-ns[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<md){ctx.beginPath();ctx.moveTo(ns[i].x,ns[i].y);ctx.lineTo(ns[j].x,ns[j].y);ctx.strokeStyle=`rgba(0,212,255,${(1-d/md)*.3})`;ctx.lineWidth=.6;ctx.stroke();}}
      ns.forEach(n=>{ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle="rgba(0,212,255,0.55)";ctx.fill();});
      ns.forEach(n=>{const dx=mouse.current.x-n.x,dy=mouse.current.y-n.y,d=Math.sqrt(dx*dx+dy*dy);if(d<180){n.vx+=dx*.00004;n.vy+=dy*.00004;}const sp=Math.sqrt(n.vx*n.vx+n.vy*n.vy);if(sp>.9){n.vx=n.vx/sp*.9;n.vy=n.vy/sp*.9;}});
      raf.current=requestAnimationFrame(draw);
    }
    const onM=(e: MouseEvent)=>{mouse.current={x:e.clientX,y:e.clientY};};
    const onR=()=>{cancelAnimationFrame(raf.current);resize();draw();};
    resize();draw();
    addEventListener("mousemove",onM);addEventListener("resize",onR);
    return()=>{cancelAnimationFrame(raf.current);removeEventListener("mousemove",onM);removeEventListener("resize",onR);};
  },[]);
  return <canvas ref={ref} style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",opacity:.55}}/>;
}

// ─── CURSOR ───────────────────────────────────────────────────────────────────
function useCursor() {
  useEffect(()=>{
    const cur=document.getElementById("ax-cur"),ring=document.getElementById("ax-ring");
    if(!cur||!ring)return;
    let mx=-200,my=-200,rx=-200,ry=-200;
    const onM=(e: MouseEvent)=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+"px";cur.style.top=my+"px";};
    function animate(){rx+=(mx-rx)*.13;ry+=(my-ry)*.13;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(animate);}
    animate();
    const addHov=()=>{cur.classList.add("hov");ring.classList.add("hov");};
    const remHov=()=>{cur.classList.remove("hov");ring.classList.remove("hov");};
    document.querySelectorAll("a,button,[role=button],[data-hover]").forEach(el=>{el.addEventListener("mouseenter",addHov);el.addEventListener("mouseleave",remHov);});
    addEventListener("mousemove",onM);
    return()=>removeEventListener("mousemove",onM);
  },[]);
}

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
function Marquee() {
  const items=[...STACK,...STACK];
  return(
    <Box sx={{py:3,background:"rgba(3,8,18,.95)",borderTop:`1px solid ${BORDER}`,borderBottom:`1px solid ${BORDER}`,overflow:"hidden",position:"relative",
      "&::before,&::after":{content:'""',position:"absolute",top:0,bottom:0,width:100,zIndex:2},
      "&::before":{left:0,background:"linear-gradient(to right,rgba(3,8,18,.95),transparent)"},
      "&::after":{right:0,background:"linear-gradient(to left,rgba(3,8,18,.95),transparent)"},
    }}>
      <Box sx={{display:"flex",width:"max-content",animation:"marqueeX 30s linear infinite"}}>
        {items.map((s,i)=>(
          <Box key={i} sx={{display:"flex",alignItems:"center",gap:1.5,px:"36px",fontFamily:MONO,fontSize:"0.7rem",letterSpacing:"0.1em",textTransform:"uppercase",color:TEXT3,borderRight:`1px solid ${BORDER}`,whiteSpace:"nowrap"}}>
            <Box sx={{width:4,height:4,borderRadius:"50%",background:i%3===0?C:i%3===1?V:G,boxShadow:`0 0 6px ${i%3===0?C:i%3===1?V:G}`}}/>
            {s}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ─── EYE LABEL ────────────────────────────────────────────────────────────────
function EyeLabel({children, color=C}: {children: React.ReactNode; color?: string}) {
  return(
    <Box sx={{display:"inline-flex",alignItems:"center",gap:1.25,mb:2,
      fontFamily:MONO,fontSize:"0.65rem",letterSpacing:"0.22em",textTransform:"uppercase",color,
      "&::before":{content:'""',display:"block",width:24,height:1,background:color,boxShadow:`0 0 8px ${color}`},
    }}>{children}</Box>
  );
}

// ─── GLOWING DIVIDER ─────────────────────────────────────────────────────────
function GlowDiv({color=C}: {color?: string}) {
  return <Box sx={{height:1,background:`linear-gradient(90deg,transparent,${color},transparent)`,opacity:.25,my:0}}/>;
}

// ─── CHATBOT ──────────────────────────────────────────────────────────────────
interface ChatMessage {
  role: "bot" | "user";
  text: string;
}

function ChatBot() {
  const [open,setOpen]=useState(false);
  const [msgs,setMsgs]=useState<ChatMessage[]>([{role:"bot",text:"Hi! I'm the Arix Assistant. Ask me about AI, Django, scraping, pricing, or timelines."}]);
  const [inp,setInp]=useState("");
  const endRef=useRef<HTMLDivElement>(null);
  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[msgs]);
  function send(){const v=inp.trim();if(!v)return;setMsgs(m=>[...m,{role:"user",text:v}]);setInp("");setTimeout(()=>setMsgs(m=>[...m,{role:"bot",text:getBotReply(v)}]),500);}
  return(
    <Box sx={{position:"fixed",bottom:24,right:24,zIndex:400,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1.5}}>
      {open&&(
        <Box sx={{width:"min(92vw,340px)",background:"rgba(4,10,22,.97)",border:`1px solid ${BHI}`,borderRadius:4,overflow:"hidden",display:"flex",flexDirection:"column",backdropFilter:"blur(28px)",animation:"fadeUp .25s ease",boxShadow:`0 0 60px rgba(0,212,255,.12),0 32px 80px rgba(0,0,0,.7)`}}>
          <Box sx={{p:"14px 16px",background:`linear-gradient(135deg,${B10},${V10})`,borderBottom:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:1.5}}>
              <Box sx={{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg,${C},${V})`,display:"grid",placeItems:"center",fontSize:"1rem",boxShadow:`0 0 14px rgba(0,212,255,.4)`}}>🤖</Box>
              <Box>
                <Typography sx={{fontFamily:SYNE,fontSize:".88rem",fontWeight:700,color:"#f0f8ff"}}>Arix Assistant</Typography>
                <Box sx={{display:"flex",alignItems:"center",gap:.75,fontFamily:MONO,fontSize:".58rem",letterSpacing:".12em",color:G}}>
                  <Box sx={{width:5,height:5,borderRadius:"50%",background:G,boxShadow:`0 0 8px ${G}`,animation:"blink 2s ease-in-out infinite"}}/>Online
                </Box>
              </Box>
            </Box>
            <Box data-hover onClick={()=>setOpen(false)} sx={{width:28,height:28,borderRadius:"50%",border:`1px solid rgba(255,255,255,.12)`,display:"grid",placeItems:"center",cursor:"pointer",color:"rgba(255,255,255,.45)","&:hover":{background:"rgba(255,255,255,.08)"}}}>✕</Box>
          </Box>
          <Box sx={{flex:1,minHeight:190,maxHeight:260,overflowY:"auto",p:1.75,display:"flex",flexDirection:"column",gap:1,scrollbarWidth:"thin",scrollbarColor:`${B20} transparent`}}>
            {msgs.map((m,i)=>(
              <Box key={i} sx={{maxWidth:"86%",p:"10px 14px",borderRadius:"14px",fontSize:".82rem",lineHeight:1.55,color:"#eef4ff",alignSelf:m.role==="user"?"flex-end":"flex-start",background:m.role==="user"?"linear-gradient(135deg,rgba(0,80,160,.8),rgba(0,40,100,.9))":"rgba(10,25,45,.9)",border:`1px solid ${m.role==="user"?B30:BORDER}`,borderBottomRightRadius:m.role==="user"?4:14,borderBottomLeftRadius:m.role==="bot"?4:14}}>{m.text}</Box>
            ))}
            <div ref={endRef}/>
          </Box>
          <Box sx={{p:"10px 12px",borderTop:`1px solid ${BORDER}`,display:"flex",gap:1}}>
            <TextField size="small" fullWidth value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Type a message…" sx={{"& .MuiOutlinedInput-root":{background:"rgba(255,255,255,.03)",borderRadius:2,fontSize:".83rem","& fieldset":{borderColor:BORDER},"&:hover fieldset":{borderColor:BHI},"&.Mui-focused fieldset":{borderColor:C,boxShadow:`0 0 0 3px ${B10}`}}}}/>
            <Button onClick={send} sx={{background:`linear-gradient(135deg,${C},#0ea5e9)`,color:"#000",fontFamily:MONO,fontSize:".66rem",letterSpacing:".08em",fontWeight:700,px:2,minWidth:0,whiteSpace:"nowrap","&:hover":{background:`linear-gradient(135deg,#7dd3fc,${C})`}}}>Send</Button>
          </Box>
        </Box>
      )}
      <Box data-hover onClick={()=>setOpen(o=>!o)} sx={{width:56,height:56,borderRadius:"50%",background:open?"rgba(10,20,40,.95)":`linear-gradient(135deg,${C},#0284c7)`,border:`1px solid ${open?"rgba(255,255,255,.15)":BHI}`,display:"grid",placeItems:"center",cursor:"pointer",fontSize:"1.4rem",boxShadow:open?"0 4px 16px rgba(0,0,0,.5)":`0 8px 32px rgba(0,212,255,.4),0 0 0 0 rgba(0,212,255,.3)`,animation:open?"none":"pulsering 2.5s ease-in-out infinite","&:hover":{transform:"scale(1.1)"},transition:"all .25s"}}>
        {open?"✕":"💬"}
      </Box>
    </Box>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({current,navigate}: {current: string; navigate: (p: string) => void}) {
  const th=useTheme(),isMob=useMediaQuery(th.breakpoints.down("md"));
  const [drawer,setDrawer]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(scrollY>20);addEventListener("scroll",fn);return()=>removeEventListener("scroll",fn);},[]);
  function go(p: string){navigate(p);setDrawer(false);}
  return(
    <>
      <AppBar position="fixed" elevation={0} sx={{
        background:scrolled?"rgba(2,4,8,.92)":"rgba(2,4,8,.7)",
        backdropFilter:"blur(28px)",
        borderBottom:`1px solid ${scrolled?BHI:BORDER}`,
        transition:"all .4s",
        boxShadow:scrolled?`0 1px 40px rgba(0,212,255,.08)`:"none",
      }}>
        <Toolbar sx={{px:{xs:2,sm:4,md:"5vw",lg:"72px"},height:68,justifyContent:"space-between"}}>
          <Box data-hover onClick={()=>go("Home")} sx={{display:"flex",alignItems:"center",cursor:"pointer"}}>
            <Box component="img" src={arixLogo} alt="Arix Tech" sx={{height:170,width:"auto",objectFit:"contain",filter:"drop-shadow(0 0 10px rgba(0,212,255,0.35))",transition:"filter .3s","&:hover":{filter:"drop-shadow(0 0 16px rgba(0,212,255,0.6))"}}}/>
          </Box>

          {!isMob&&(
            <Box sx={{display:"flex",gap:"32px"}}>
              {NAV.map(l=>(
                <Box key={l} data-hover onClick={()=>go(l)} sx={{fontFamily:MONO,fontSize:".67rem",letterSpacing:".14em",textTransform:"uppercase",cursor:"pointer",color:current===l?C:"text.secondary",transition:"color .2s","&:hover":{color:C},position:"relative",pb:"3px","&::after":{content:'""',position:"absolute",bottom:0,left:0,right:0,height:"1px",background:`linear-gradient(90deg,transparent,${C},transparent)`,opacity:current===l?1:0,transition:"opacity .3s"}}}>{l}</Box>
              ))}
            </Box>
          )}

          <Box sx={{display:"flex",alignItems:"center",gap:1.5}}>
            {!isMob&&(
              <Box data-hover onClick={()=>go("Contact")} sx={{fontFamily:MONO,fontSize:".67rem",letterSpacing:".1em",textTransform:"uppercase",color:C,background:B10,border:`1px solid ${BHI}`,px:"18px",py:"9px",borderRadius:"6px",cursor:"pointer",transition:"all .25s","&:hover":{background:B20,boxShadow:`0 0 24px rgba(0,212,255,.25)`}}}>Start Project →</Box>
            )}
            {isMob&&(
              <Box data-hover onClick={()=>setDrawer(true)} sx={{display:"flex",flexDirection:"column",gap:"5px",cursor:"pointer",p:1}}>
                {[0,1,2].map(i=><Box key={i} sx={{width:22,height:"1.5px",background:"rgba(180,220,255,.6)"}}/>)}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawer} onClose={()=>setDrawer(false)} PaperProps={{sx:{width:270,background:"rgba(2,6,16,.98)",backdropFilter:"blur(28px)",borderLeft:`1px solid ${BORDER}`}}}>
        <Box sx={{p:3,display:"flex",flexDirection:"column",gap:1}}>
          <Box onClick={()=>go("Home")} sx={{display:"flex",alignItems:"center",mb:2,cursor:"pointer"}}>
            <Box component="img" src={arixLogo} alt="Arix Tech" sx={{height:32,width:"auto",objectFit:"contain",filter:"drop-shadow(0 0 8px rgba(0,212,255,0.3))"}}/>
          </Box>
          {NAV.map(l=>(
            <Box key={l} onClick={()=>go(l)} sx={{fontFamily:MONO,fontSize:".68rem",letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer",color:current===l?C:"text.secondary",p:"12px 16px",borderRadius:2,background:current===l?B10:"transparent",border:`1px solid ${current===l?BHI:"transparent"}`,transition:"all .2s","&:hover":{color:C,background:B10}}}>{l}</Box>
          ))}
          <Box onClick={()=>go("Contact")} sx={{mt:1.5,background:`linear-gradient(135deg,${C},#0ea5e9)`,color:"#000",fontFamily:MONO,fontWeight:700,fontSize:".7rem",letterSpacing:".1em",textTransform:"uppercase",p:"12px 20px",borderRadius:2,cursor:"pointer",textAlign:"center","&:hover":{background:`linear-gradient(135deg,#7dd3fc,${C})`}}}>Start Project →</Box>
        </Box>
      </Drawer>
    </>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({navigate}: {navigate: (p: string) => void}) {
  return(
    <Box sx={{px:{xs:2,sm:4,md:"5vw",lg:"80px"},py:"48px",borderTop:`1px solid ${BORDER}`,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:2,position:"relative","&::before":{content:'""',position:"absolute",top:0,left:"20%",right:"20%",height:1,background:`linear-gradient(90deg,transparent,${C},transparent)`,opacity:.35}}}>
      <Box>
        <Typography sx={{fontFamily:MONO,fontSize:".63rem",letterSpacing:".12em",color:TEXT3}}>© 2025 Arix Tech — All rights reserved</Typography>
      </Box>
      <Box sx={{display:"flex",gap:3}}>
        {["Privacy","Terms","Contact"].map(l=>(
          <Typography key={l} onClick={()=>l==="Contact"&&navigate("Contact")} sx={{fontFamily:MONO,fontSize:".63rem",letterSpacing:".1em",color:TEXT3,cursor:"pointer","&:hover":{color:C},transition:"color .2s"}}>{l}</Typography>
        ))}
      </Box>
      <Typography sx={{fontFamily:MONO,fontSize:".63rem",letterSpacing:".08em",color:TEXT3}}>
        Built with <Box component="span" sx={{color:C}}>♦</Box> by{" "}
        <Box component="span" onClick={()=>navigate("Home")} sx={{color:C,cursor:"pointer","&:hover":{textDecoration:"underline"}}}>Arix Tech</Box>
      </Typography>
    </Box>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ─── HOME PAGE ────────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
function HomePage({navigate}: {navigate: (p: string) => void}) {
  return(
    <Box>
      {/* ── HERO */}
      <Box sx={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",px:{xs:2,sm:4,md:"5vw",lg:"80px"},pt:"110px",pb:"80px",position:"relative"}}>
        <Box sx={{position:"absolute",top:"10%",left:"-10%",width:"55vw",height:"55vh",borderRadius:"50%",background:`radial-gradient(ellipse,rgba(0,212,255,.06),transparent 70%)`,pointerEvents:"none",zIndex:0}}/>
        <Box sx={{position:"absolute",top:"30%",right:"-5%",width:"40vw",height:"40vh",borderRadius:"50%",background:`radial-gradient(ellipse,rgba(168,85,247,.05),transparent 70%)`,pointerEvents:"none",zIndex:0}}/>

        <Box className="anim-up-1" sx={{display:"inline-flex",alignItems:"center",gap:1.25,mb:3.5}}>
          <Box sx={{width:6,height:6,borderRadius:"50%",background:C,boxShadow:`0 0 12px ${C},0 0 24px rgba(0,212,255,.5)`,animation:"blink 2.2s ease-in-out infinite"}}/>
          <Typography sx={{fontFamily:MONO,fontSize:".66rem",letterSpacing:".22em",textTransform:"uppercase",color:C}}>AI-Powered Software Studio</Typography>
        </Box>

        <Typography variant="h1" className="anim-up-2" sx={{fontSize:{xs:"3.2rem",sm:"5rem",md:"7rem",lg:"8.5rem"},lineHeight:.9,letterSpacing:"-.04em",maxWidth:"14ch",mb:4}}>
          We Build<br/>
          <Box component="span" className="grad-text">Intelligent</Box><br/>
          <Box component="span" sx={{color:"text.primary",WebkitTextFillColor:"unset"}}>Digital</Box>{" "}
          <Box component="span" sx={{color:"text.secondary",WebkitTextFillColor:"unset",fontSize:{xs:"2.2rem",sm:"3.5rem",md:"5rem",lg:"6rem"}}}>Products</Box>
        </Typography>

        <Typography className="anim-up-3" sx={{fontSize:{xs:".95rem",md:"1.1rem"},color:"text.secondary",maxWidth:"52ch",lineHeight:1.8,mb:5.5}}>
          Arix Tech engineers AI systems, Python & Django platforms, web scraping engines, and premium web experiences that perform in the real world.
        </Typography>

        <Box className="anim-up-4" sx={{display:"flex",gap:2,flexWrap:"wrap"}}>
          <Box data-hover onClick={()=>navigate("Contact")} className="hover-btn" sx={{display:"inline-flex",alignItems:"center",gap:1,fontFamily:MONO,fontSize:".72rem",letterSpacing:".08em",textTransform:"uppercase",color:"#000",background:`linear-gradient(135deg,${C},#0ea5e9)`,px:"28px",py:"14px",borderRadius:"7px",cursor:"pointer",fontWeight:700,boxShadow:`0 0 28px rgba(0,212,255,.4)`,transition:"all .25s","&:hover":{boxShadow:`0 0 48px rgba(0,212,255,.6)`,transform:"translateY(-3px)"}}}>
            Start a Project <span>→</span>
          </Box>
          <Box data-hover onClick={()=>navigate("Portfolio")} className="hover-btn" sx={{display:"inline-flex",alignItems:"center",gap:1,fontFamily:MONO,fontSize:".72rem",letterSpacing:".08em",textTransform:"uppercase",color:"text.secondary",background:"transparent",border:`1px solid rgba(120,170,220,.22)`,px:"28px",py:"14px",borderRadius:"7px",cursor:"pointer",transition:"all .25s","&:hover":{borderColor:BHI,color:C}}}>
            View Our Work
          </Box>
        </Box>

        {/* Metrics */}
        <Box className="anim-up-5" sx={{display:"flex",gap:{xs:3,md:6},flexWrap:"wrap",mt:9,pt:5,borderTop:`1px solid ${BORDER}`}}>
          {[
            {val:<><Box component="span" sx={{color:C}}>20</Box><Box component="span" sx={{color:C,fontSize:".55em"}}>+</Box></>,lbl:"Projects Delivered"},
            {val:<Box component="span" sx={{background:`linear-gradient(90deg,${C},${V})`,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"}}>AI</Box>,lbl:"Core Expertise"},
            {val:"E2E",lbl:"Product Execution"},
          ].map((m,i)=>(
            <Box key={i} sx={{animation:`countUp .5s ${.1*i+.8}s ease both`}}>
              <Typography sx={{fontFamily:SYNE,fontSize:"2.4rem",fontWeight:800,letterSpacing:"-.03em",lineHeight:1,mb:.5}}>{m.val}</Typography>
              <Typography sx={{fontFamily:MONO,fontSize:".63rem",letterSpacing:".15em",textTransform:"uppercase",color:TEXT3}}>{m.lbl}</Typography>
            </Box>
          ))}
          <Box sx={{display:"flex",alignItems:"center",gap:1,fontFamily:MONO,fontSize:".65rem",letterSpacing:".1em",color:G,border:`1px solid rgba(16,185,129,.2)`,px:2,py:1,borderRadius:99,background:"rgba(16,185,129,.06)"}}>
            <Box sx={{width:6,height:6,borderRadius:"50%",background:G,boxShadow:`0 0 8px ${G}`,animation:"blink 2s ease-in-out infinite"}}/>
            Available for Projects
          </Box>
        </Box>

        {/* Terminal */}
        <Box sx={{display:{xs:"none",xl:"block"},position:"absolute",right:"80px",top:"50%",transform:"translateY(-50%)",width:"min(34vw,400px)",background:CARD,border:`1px solid ${BHI}`,borderRadius:"14px",overflow:"hidden",boxShadow:`0 0 80px rgba(0,212,255,.1),0 0 0 1px rgba(0,212,255,.05),0 40px 100px rgba(0,0,0,.6)`,animation:"fadeUp 1s .9s ease both"}}>
          <Box sx={{display:"flex",alignItems:"center",gap:"7px",p:"11px 16px",background:`rgba(0,212,255,.04)`,borderBottom:`1px solid ${BORDER}`}}>
            {["#ef4444","#f59e0b","#10b981"].map((c,i)=><Box key={i} sx={{width:10,height:10,borderRadius:"50%",background:c}}/>)}
            <Typography sx={{fontFamily:MONO,fontSize:".58rem",color:TEXT3,ml:1,letterSpacing:".1em"}}>arix_ai_engine.py</Typography>
          </Box>
          <Box sx={{p:"18px 20px 22px",fontFamily:MONO,fontSize:".7rem",lineHeight:2,color:"text.secondary"}}>
            {([
              [TEXT3,"01",null,<><span style={{color:C}}>import</span> <span style={{color:"#f0f8ff"}}>arix</span></>],
              [TEXT3,"02",null,<><span style={{color:C}}>from</span> <span style={{color:"#f0f8ff"}}>arix.ai</span> <span style={{color:C}}>import</span> <span style={{color:V}}>SmartEngine</span></>],
              [TEXT3,"03",null,""],
              [TEXT3,"04",null,<><span style={{color:V}}>engine</span> <span style={{color:"#f0f8ff"}}>=</span> <span style={{color:G}}>SmartEngine</span><span style={{color:"#f0f8ff"}}>(</span></>],
              [TEXT3,"05","   ",<><span style={{color:AM}}>model</span><span style={{color:"#f0f8ff"}}>=</span><span style={{color:G}}>"arix-pro-v2"</span><span style={{color:"#f0f8ff"}}>,</span></>],
              [TEXT3,"06","   ",<><span style={{color:AM}}>stack</span><span style={{color:"#f0f8ff"}}>=[</span><span style={{color:G}}>"django"</span><span style={{color:"#f0f8ff"}}>,</span><span style={{color:G}}>"react"</span><span style={{color:"#f0f8ff"}}>],</span></>],
              [TEXT3,"07","   ",<><span style={{color:AM}}>deploy</span><span style={{color:"#f0f8ff"}}>=</span><span style={{color:V}}>True</span></>],
              [TEXT3,"08",null,<span style={{color:"#f0f8ff"}}>)</span>],
              [TEXT3,"09",null,""],
              [TEXT3,"10",null,<><span style={{color:C}}># ✓ Build complete in 2.3s</span></>],
              [TEXT3,"11",null,<><span style={{color:C}}># ✓ AI layers: 4 active</span></>],
              [TEXT3,"12",null,<><span style={{color:C}}># ✓ Deployed to production</span></>],
            ] as [string, string, string | null, React.ReactNode][]).map(([nc,num,indent,content],i)=>(
              <Box key={i} sx={{display:"flex",gap:1}}>
                <span style={{color:nc,minWidth:"2ch"}}>{num}</span>
                <span>{indent}</span>
                <span>{content}</span>
              </Box>
            ))}
            <Box sx={{mt:.5,display:"flex",gap:1}}>
              <Box component="span" sx={{color:G}}>▶</Box>
              <Box component="span" sx={{display:"inline-block",overflow:"hidden",whiteSpace:"nowrap",borderRight:`2px solid ${C}`,animation:"typing 2.2s steps(30,end) 1.2s both, barcursor .75s step-end 1.2s infinite"}}>Running Arix engine v2.1...</Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Marquee/>

      {/* ── WHY ARIX mini-section */}
      <Box sx={{px:{xs:2,sm:4,md:"5vw",lg:"80px"},py:"80px",display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr",lg:"repeat(4,1fr)"},gap:2}}>
        {[
          {n:"20+",lbl:"Projects Delivered",icon:"🚀",color:C},
          {n:"100%",lbl:"Remote Delivery",icon:"🌍",color:V},
          {n:"24h",lbl:"Response Time",icon:"⚡",color:G},
          {n:"E2E",lbl:"Full Stack Execution",icon:"🔧",color:AM},
        ].map((s,i)=>(
          <Box key={i} className="hover-card" sx={{p:3,background:CARD,border:`1px solid ${BORDER}`,borderRadius:3,position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 0%,${s.color}18,transparent 65%)`,opacity:0,transition:"opacity .4s"},"&:hover::before":{opacity:1}}}>
            <Typography sx={{fontSize:"1.5rem",mb:1.5}}>{s.icon}</Typography>
            <Typography sx={{fontFamily:SYNE,fontSize:"2rem",fontWeight:800,letterSpacing:"-.03em",color:s.color,mb:.5,textShadow:`0 0 20px ${s.color}60`}}>{s.n}</Typography>
            <Typography sx={{fontFamily:MONO,fontSize:".62rem",letterSpacing:".12em",textTransform:"uppercase",color:TEXT3}}>{s.lbl}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
function ServicesPage() {
  return(
    <Box sx={{pt:"120px",pb:"100px",px:{xs:2,sm:4,md:"5vw",lg:"80px"},position:"relative"}}>
      <Box sx={{position:"absolute",top:"15%",right:"5%",width:"40vw",height:"40vh",borderRadius:"50%",background:`radial-gradient(ellipse,${V}08,transparent 70%)`,pointerEvents:"none"}}/>

      <EyeLabel>What We Build</EyeLabel>
      <Typography variant="h2" sx={{fontSize:{xs:"2.2rem",md:"3.8rem"},letterSpacing:"-.035em",lineHeight:1.05,mb:2}}>
        Services crafted for<br/><Box component="span" className="grad-text">modern software teams</Box>
      </Typography>
      <Typography sx={{color:"text.secondary",maxWidth:"52ch",lineHeight:1.8,fontSize:"1.02rem",mb:8}}>
        Clean engineering, smart automation, and thoughtful interface design — delivered end-to-end.
      </Typography>

      {/* Services Grid */}
      <Box sx={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:"1px",background:BORDER,border:`1px solid ${BORDER}`,borderRadius:"16px",overflow:"hidden",mb:12}}>
        {SERVICES.map((s,i)=>(
          <Box key={i} className="srv-card hover-card" sx={{"--ac":`${s.accent}22`,"--acs":`${s.accent}66`,background:"#040d1a",p:"36px 30px",position:"relative",overflow:"hidden",transition:"background .3s"} as object}>
            <Box className="srv-icon-wrap" sx={{width:48,height:48,borderRadius:"12px",background:`${s.accent}12`,border:`1px solid ${s.accent}40`,display:"grid",placeItems:"center",mb:2.5,fontSize:"1.3rem",transition:"box-shadow .3s"}}>{s.icon}</Box>
            <Typography sx={{fontFamily:SYNE,fontSize:"1.12rem",fontWeight:700,mb:1.25,letterSpacing:"-.01em"}}>{s.name}</Typography>
            <Typography sx={{fontSize:".88rem",color:"text.secondary",lineHeight:1.72,mb:2}}>{s.desc}</Typography>
            <Box sx={{display:"inline-flex",alignItems:"center",gap:.75,fontFamily:MONO,fontSize:".58rem",letterSpacing:".12em",textTransform:"uppercase",color:s.accent,background:`${s.accent}10`,border:`1px solid ${s.accent}28`,px:"10px",py:"5px",borderRadius:99}}>
              <Box sx={{width:4,height:4,borderRadius:"50%",background:s.accent,boxShadow:`0 0 6px ${s.accent}`}}/>
              {s.tag}
            </Box>
            <Box className="glow-line" sx={{"--lc":s.accent} as object}/>
          </Box>
        ))}
      </Box>

      {/* AI Features */}
      <EyeLabel color={V}>AI Advantage</EyeLabel>
      <Typography variant="h2" sx={{fontSize:{xs:"2.2rem",md:"3.4rem"},letterSpacing:"-.035em",lineHeight:1.05,mb:2}}>
        Intelligence built<br/><Box component="span" sx={{background:`linear-gradient(110deg,${V},#c084fc)`,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"}}>into every layer</Box>
      </Typography>
      <Typography sx={{color:"text.secondary",maxWidth:"52ch",lineHeight:1.8,mb:7}}>
        We don't bolt AI on — we architect it in from the start, so your product gets smarter over time.
      </Typography>

      <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:"1px",background:`${V}22`,border:`1px solid ${V}30`,borderRadius:"16px",overflow:"hidden"}}>
        {AI_FEATURES.map((f,i)=>(
          <Box key={i} className="hover-card" sx={{background:"#040d1a",p:"40px 34px",position:"relative",overflow:"hidden",transition:"background .3s","&::before":{content:'""',position:"absolute",inset:0,background:`radial-gradient(ellipse at 25% 25%,${f.color}14,transparent 65%)`,opacity:0,transition:"opacity .4s"},"&:hover::before":{opacity:1},"&:hover":{background:"#050f20",borderColor:"transparent !important"}}}>
            <Typography sx={{fontSize:"2.2rem",mb:2.5}}>{f.icon}</Typography>
            <Typography sx={{fontFamily:SYNE,fontSize:"1.15rem",fontWeight:700,mb:1.5}}>{f.name}</Typography>
            <Typography sx={{fontSize:".9rem",color:"text.secondary",lineHeight:1.75,mb:3}}>{f.desc}</Typography>
            <Box sx={{display:"inline-flex",alignItems:"center",gap:1,fontFamily:MONO,fontSize:".6rem",letterSpacing:".12em",textTransform:"uppercase",color:f.color,background:`${f.color}10`,border:`1px solid ${f.color}30`,px:"12px",py:"6px",borderRadius:99}}>
              <Box sx={{width:5,height:5,borderRadius:"50%",background:f.color,boxShadow:`0 0 8px ${f.color}`,animation:"blink 2s ease-in-out infinite"}}/>
              {f.badge}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ─── PORTFOLIO PAGE ───────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
function PortfolioPage() {
  return(
    <Box sx={{pt:"120px",pb:"100px",px:{xs:2,sm:4,md:"5vw",lg:"80px"},position:"relative"}}>
      <Box sx={{position:"absolute",top:"20%",left:"0",width:"50vw",height:"50vh",borderRadius:"50%",background:`radial-gradient(ellipse,rgba(0,212,255,.04),transparent 70%)`,pointerEvents:"none"}}/>

      <EyeLabel>Selected Work</EyeLabel>
      <Typography variant="h2" sx={{fontSize:{xs:"2.2rem",md:"3.8rem"},letterSpacing:"-.035em",lineHeight:1.05,mb:2}}>
        <Box component="span" className="grad-text">Built</Box> by Arix Tech
      </Typography>
      <Typography sx={{color:"text.secondary",maxWidth:"52ch",lineHeight:1.8,fontSize:"1.02rem",mb:8}}>
        Products across intelligence, automation, data systems, and elegant business interfaces.
      </Typography>

      <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:3}}>
        {PORTFOLIO.map((p,i)=>(
          <Box key={i} className="port-card hover-card" sx={{
            "--pc":p.color,
            gridColumn:p.full?{xs:"span 1",md:"span 2"}:"span 1",
            background:CARD,border:`1px solid ${BORDER}`,
            borderRadius:"16px",p:"36px 32px",
            position:"relative",overflow:"hidden",
            transition:"all .3s",
            "&::before":{content:'""',position:"absolute",inset:0,background:`radial-gradient(ellipse at 80% 10%,${p.color}14,transparent 55%)`,opacity:0,transition:"opacity .4s"},
            "&:hover":{borderColor:`${p.color}40 !important`,transform:"translateY(-6px)",boxShadow:`0 28px 70px rgba(0,0,0,.5),0 0 50px ${p.color}0a`,
              "&::before":{opacity:1}},
          } as object}>
            <Typography sx={{fontFamily:MONO,fontSize:".6rem",letterSpacing:".18em",textTransform:"uppercase",color:p.color,mb:2,display:"flex",alignItems:"center",gap:1}}>
              <Box sx={{width:4,height:4,borderRadius:"50%",background:p.color,boxShadow:`0 0 6px ${p.color}`}}/>
              {p.type}
            </Typography>
            <Typography sx={{fontFamily:SYNE,fontSize:p.full?"1.7rem":"1.45rem",fontWeight:800,letterSpacing:"-.025em",mb:1.5}}>{p.name}</Typography>
            <Typography sx={{fontSize:".88rem",color:"text.secondary",lineHeight:1.75,maxWidth:p.full?"72ch":undefined}}>{p.desc}</Typography>
            <Typography sx={{position:"absolute",top:32,right:32,fontFamily:MONO,fontSize:".6rem",letterSpacing:".12em",color:TEXT3}}>{p.idx}</Typography>
            <Box sx={{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:`linear-gradient(90deg,transparent,${p.color},transparent)`,opacity:0,transition:"opacity .35s",".hover-card:hover &":{opacity:1}}}/>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
function AboutPage() {
  return(
    <Box sx={{pt:"120px",pb:"100px",px:{xs:2,sm:4,md:"5vw",lg:"80px"}}}>
      <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",lg:"1fr 1fr"},gap:{xs:6,lg:10},alignItems:"center",mb:14}}>
        {/* Orbital visual */}
        <Box sx={{display:{xs:"none",lg:"flex"},alignItems:"center",justifyContent:"center",position:"relative",height:460}}>
          {[
            {s:200,dur:14,color:C,dot:"top"},
            {s:310,dur:22,color:V,dot:"bottom",rev:true},
            {s:420,dur:32,color:C,dot:"right"},
          ].map((r,i)=>(
            <Box key={i} sx={{position:"absolute",width:r.s,height:r.s,border:`1px solid ${r.color}28`,borderRadius:"50%",animation:`${r.rev?"spinR":"spin"} ${r.dur}s linear infinite`}}>
              <Box sx={{position:"absolute",width:10,height:10,borderRadius:"50%",background:r.color,boxShadow:`0 0 14px ${r.color},0 0 28px ${r.color}60`,...(r.dot==="top"?{top:-5,left:"50%",transform:"translateX(-50%)"}:r.dot==="bottom"?{bottom:-5,left:"50%",transform:"translateX(-50%)"}:{right:-5,top:"50%",transform:"translateY(-50%)"})}}/>
            </Box>
          ))}
          <Box sx={{position:"relative",width:90,height:90,borderRadius:"20px",background:`linear-gradient(135deg,${B20},${V10})`,border:`1px solid ${BHI}`,display:"grid",placeItems:"center",boxShadow:`0 0 40px rgba(0,212,255,.2),0 0 80px rgba(0,212,255,.08)`,animation:"float 4s ease-in-out infinite"}}>
            <Typography sx={{fontFamily:SYNE,fontSize:"1.9rem",fontWeight:800,background:`linear-gradient(135deg,${C},${V})`,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"}}>Ax</Typography>
          </Box>
          {[
            {l:"Python",  style:{top:"12%",left:"8%"}},
            {l:"React",   style:{top:"12%",right:"8%"}},
            {l:"AI / ML", style:{bottom:"12%",left:"8%"}},
            {l:"Django",  style:{bottom:"12%",right:"8%"}},
          ].map((t,i)=>(
            <Box key={i} sx={{position:"absolute",...t.style,fontFamily:MONO,fontSize:".62rem",letterSpacing:".12em",background:CARD,border:`1px solid ${BHI}`,color:C,px:"14px",py:"7px",borderRadius:99,backdropFilter:"blur(8px)",boxShadow:`0 0 14px rgba(0,212,255,.15)`}}>{t.l}</Box>
          ))}
        </Box>

        {/* Content */}
        <Box>
          <EyeLabel>About Arix Tech</EyeLabel>
          <Typography variant="h2" sx={{fontSize:{xs:"2.2rem",md:"3.4rem"},letterSpacing:"-.035em",lineHeight:1.05,mb:2.5}}>
            Built by engineers,<br/><Box component="span" className="grad-text">obsessed with craft</Box>
          </Typography>
          <Typography sx={{color:"text.secondary",lineHeight:1.8,fontSize:"1.02rem",mb:5}}>
            Arix Tech helps brands and teams move faster with reliable software. From AI-driven products to Python backends, scraping systems, dashboards, and web apps — we build solutions that are practical, maintainable, and visually refined.
          </Typography>

          <Box sx={{display:"flex",flexDirection:"column",gap:1.5}}>
            {ABOUT_BULLETS.map((b,i)=>(
              <Box key={i} className="hover-card" sx={{display:"flex",alignItems:"flex-start",gap:2,p:"16px 20px",background:CARD,border:`1px solid ${BORDER}`,borderRadius:"10px",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",left:0,top:0,bottom:0,width:2,background:b.color,borderRadius:"2px 0 0 2px",boxShadow:`0 0 10px ${b.color}60`}}}>
                <Typography sx={{color:b.color,flexShrink:0,fontSize:".85rem",mt:"1px"}}>▸</Typography>
                <Typography sx={{fontSize:".9rem",color:"text.secondary",lineHeight:1.65}}>{b.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Process */}
      <GlowDiv/>
      <Box sx={{mt:10}}>
        <EyeLabel color={V}>How We Work</EyeLabel>
        <Typography variant="h2" sx={{fontSize:{xs:"2.2rem",md:"3.4rem"},letterSpacing:"-.035em",lineHeight:1.05,mb:2}}>
          Our <Box component="span" sx={{background:`linear-gradient(110deg,${V},#c084fc)`,WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"}}>process</Box>
        </Typography>
        <Typography sx={{color:"text.secondary",maxWidth:"52ch",lineHeight:1.8,mb:8}}>
          A systematic, transparent approach from first conversation to live product.
        </Typography>

        <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr",lg:"repeat(4,1fr)"},gap:3}}>
          {PROCESS.map((p,i)=>(
            <Box key={i} className="hover-card" sx={{p:"32px 26px",background:CARD,border:`1px solid ${BORDER}`,borderRadius:"14px",position:"relative",overflow:"hidden",
              "&::before":{content:'""',position:"absolute",inset:0,background:`radial-gradient(ellipse at 30% 0%,${p.color}18,transparent 60%)`,opacity:0,transition:"opacity .4s"},
              "&:hover::before":{opacity:1},
            }}>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",mb:3}}>
                <Typography sx={{fontFamily:MONO,fontSize:".6rem",letterSpacing:".2em",color:TEXT3}}>{p.num} / PHASE</Typography>
                <Box sx={{fontFamily:SYNE,fontSize:"1.8rem",fontWeight:800,color:`${p.color}30`,letterSpacing:"-.04em"}}>{p.num}</Box>
              </Box>
              <Typography sx={{fontSize:"1.7rem",mb:1.5}}>{p.icon}</Typography>
              <Typography sx={{fontFamily:SYNE,fontSize:"1.08rem",fontWeight:700,mb:1,color:p.color}}>{p.name}</Typography>
              <Typography sx={{fontSize:".86rem",color:"text.secondary",lineHeight:1.68}}>{p.desc}</Typography>
              <Box className="glow-line" sx={{"--lc":p.color} as object}/>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
function ContactPage() {
  const [form,setForm]=useState({name:"",email:"",subject:"",msg:""});
  const [sent,setSent]=useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){setForm(f=>({...f,[e.target.name]:e.target.value}));}
  function handleSubmit(){
    const name = form.name.trim() || "Not provided";
    const email = form.email.trim() || "Not provided";
    const subject = form.subject.trim() || "Project Inquiry from Arix Tech Website";
    const msg = form.msg.trim() || "No message.";
    
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`;
    const recipient = "support.arixtech@gmail.com";
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setSent(true);
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 100);
    setTimeout(() => setSent(false), 4000);
}
  const fieldSx={
    "& .MuiOutlinedInput-root":{background:"rgba(0,212,255,.03)",borderRadius:"10px",fontSize:".92rem",
      "& fieldset":{borderColor:BORDER,borderWidth:"1px"},"&:hover fieldset":{borderColor:BHI},"&.Mui-focused fieldset":{borderColor:C,boxShadow:`0 0 0 3px rgba(0,212,255,.08)`}},
    "& label":{fontFamily:MONO,fontSize:".6rem",letterSpacing:".14em",textTransform:"uppercase",color:TEXT3},
    "& label.Mui-focused":{color:C},
    "& .MuiInputBase-input":{color:"text.primary"},
  };

  return(
    <Box sx={{pt:"120px",pb:"100px",px:{xs:2,sm:4,md:"5vw",lg:"80px"},position:"relative"}}>
      <Box sx={{position:"absolute",top:"10%",left:"-5%",width:"45vw",height:"45vh",borderRadius:"50%",background:`radial-gradient(ellipse,rgba(0,212,255,.04),transparent 70%)`,pointerEvents:"none"}}/>
      <Box sx={{position:"absolute",bottom:"10%",right:"-5%",width:"40vw",height:"40vh",borderRadius:"50%",background:`radial-gradient(ellipse,${V}06,transparent 70%)`,pointerEvents:"none"}}/>

      <Box sx={{textAlign:"center",mb:10}}>
        <EyeLabel>Get In Touch</EyeLabel>
        <Typography variant="h2" sx={{fontSize:{xs:"2.5rem",md:"4.2rem"},letterSpacing:"-.04em",lineHeight:1,mb:2.5}}>
          Let's build your<br/><Box component="span" className="grad-text">next product</Box>
        </Typography>
        <Typography sx={{color:"text.secondary",maxWidth:"48ch",mx:"auto",lineHeight:1.8,fontSize:"1.05rem"}}>
          Share your idea or requirement and Arix Tech can shape the right solution for your team.
        </Typography>
      </Box>

      <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",lg:"1fr 1.6fr"},gap:{xs:6,lg:8},alignItems:"start"}}>
        {/* Info */}
        <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
          {CONTACT_ITEMS.map((c,i)=>(
            <Box key={i} className="hover-card" sx={{display:"flex",alignItems:"flex-start",gap:2,p:"22px 24px",background:CARD,border:`1px solid ${BORDER}`,borderRadius:"14px",position:"relative",overflow:"hidden","&::before":{content:'""',position:"absolute",inset:0,background:`radial-gradient(ellipse at 20% 50%,${c.color}12,transparent 60%)`,opacity:0,transition:"opacity .4s"},"&:hover::before":{opacity:1}}}>
              <Box sx={{width:40,height:40,borderRadius:"10px",background:`${c.color}12`,border:`1px solid ${c.color}30`,display:"grid",placeItems:"center",fontSize:"1.05rem",flexShrink:0,boxShadow:`0 0 14px ${c.color}20`}}>{c.icon}</Box>
              <Box>
                <Typography sx={{fontFamily:MONO,fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:TEXT3,mb:.5}}>{c.label}</Typography>
                <Typography sx={{fontSize:".92rem",color:"text.secondary"}}>{c.val}</Typography>
              </Box>
            </Box>
          ))}

          {/* Status */}
          <Box sx={{p:"22px 24px",background:`rgba(16,185,129,.06)`,border:`1px solid rgba(16,185,129,.2)`,borderRadius:"14px",display:"flex",alignItems:"center",gap:2}}>
            <Box sx={{width:40,height:40,borderRadius:"50%",background:`rgba(16,185,129,.12)`,border:`1px solid rgba(16,185,129,.3)`,display:"grid",placeItems:"center",flexShrink:0}}>
              <Box sx={{width:10,height:10,borderRadius:"50%",background:G,boxShadow:`0 0 10px ${G}`,animation:"pulsering 2.5s ease-in-out infinite"}}/>
            </Box>
            <Box>
              <Typography sx={{fontFamily:MONO,fontSize:".58rem",letterSpacing:".15em",textTransform:"uppercase",color:"rgba(16,185,129,.5)",mb:.5}}>Status</Typography>
              <Typography sx={{fontSize:".92rem",color:G}}>Available for new projects</Typography>
            </Box>
          </Box>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{background:CARD,border:`1px solid ${BORDER}`,borderRadius:"20px",p:{xs:3,md:5},position:"relative",overflow:"hidden",
          "&::before":{content:'""',position:"absolute",top:0,left:"20%",right:"20%",height:"1px",background:`linear-gradient(90deg,transparent,${C},transparent)`,opacity:.4},
        }}>
          <Box sx={{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr"},gap:2.5,mb:2.5}}>
            <TextField name="name" label="Your Name" placeholder="John Doe" value={form.name} onChange={handleChange} fullWidth sx={fieldSx}/>
            <TextField name="email" label="Email" placeholder="john@company.com" type="email" value={form.email} onChange={handleChange} fullWidth sx={fieldSx}/>
          </Box>
          <TextField name="subject" label="Subject" placeholder="Project inquiry" value={form.subject} onChange={handleChange} fullWidth sx={{...fieldSx,mb:2.5}}/>
          <TextField name="msg" label="Message" placeholder="Tell us about your project, timeline, and goals…" multiline rows={5} value={form.msg} onChange={handleChange} fullWidth sx={{...fieldSx,mb:3.5}}/>

          <Box data-hover component="button" type="submit" className="hover-btn" sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:1,fontFamily:MONO,fontSize:".72rem",letterSpacing:".1em",textTransform:"uppercase",color:"#000",background:sent?`linear-gradient(135deg,${G},#059669)`:`linear-gradient(135deg,${C},#0ea5e9)`,border:"none",py:"16px",borderRadius:"10px",cursor:"pointer",fontWeight:700,boxShadow:sent?`0 0 28px rgba(16,185,129,.4)`:`0 0 28px rgba(0,212,255,.4)`,transition:"all .3s","&:hover":{boxShadow:sent?`0 0 48px rgba(16,185,129,.6)`:`0 0 48px rgba(0,212,255,.6)`}}}>
            {sent?"Message Sent ✓ —":"Send Message →"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page,setPage]=useState("Home");
  const navigate=useCallback((p: string)=>{setPage(p);window.scrollTo({top:0,behavior:"smooth"});},[]);
  useCursor();

  const pages: Record<string, React.ReactNode> = {
    Home:<HomePage navigate={navigate}/>,
    Services:<ServicesPage/>,
    Portfolio:<PortfolioPage/>,
    About:<AboutPage/>,
    Contact:<ContactPage/>
  };

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <style>{GLOBAL_CSS}</style>
      <div id="ax-cur"/>
      <div id="ax-ring"/>

      <NeuralCanvas/>
      <div className="noise"/>
      <div className="scanlines"/>

      <Box sx={{position:"relative",zIndex:10}}>
        <Navbar current={page} navigate={navigate}/>
        <Box key={page} sx={{animation:"pageIn .45s ease both"}}>
          {pages[page]||<HomePage navigate={navigate}/>}
        </Box>
        <Footer navigate={navigate}/>
      </Box>

      <ChatBot/>
    </ThemeProvider>
  );
}
