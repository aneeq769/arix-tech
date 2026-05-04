import { Box, Typography } from "@mui/material";
import { EyeLabel } from "../components/common/EyeLabel";
import { BORDER, CARD, MONO, SYNE, TEXT3 } from "../constants/design";
import { PORTFOLIO } from "../data/siteData";

export function PortfolioPage() {
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
