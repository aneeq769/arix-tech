export const GLOBAL_CSS = `
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
