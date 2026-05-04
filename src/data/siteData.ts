import { AM, C, G, V } from "../constants/design";
import type {
  AboutBullet,
  AIFeature,
  ContactItem,
  PortfolioItem,
  ProcessStep,
  Service,
} from "../types/site";

export const SERVICES: Service[] = [
  { icon: "\u{1F916}", name: "AI Solutions", desc: "Custom AI tools, smart assistants, workflow automation, and model-driven features designed for real business impact.", tag: "LLM \u00B7 Automation \u00B7 Agents", accent: C },
  { icon: "\u{1F40D}", name: "Django & Python", desc: "Scalable backends, APIs, dashboards, admin systems, and business logic engineered with clean Python architecture.", tag: "Python \u00B7 Django \u00B7 FastAPI", accent: G },
  { icon: "\u269B\uFE0F", name: "Web Applications", desc: "Modern, responsive frontend experiences using React and MUI with product-focused UX and polished UI systems.", tag: "React \u00B7 MUI \u00B7 TypeScript", accent: V },
  { icon: "\u{1F577}\uFE0F", name: "Web Scraping", desc: "Reliable data extraction, automation bots, monitoring pipelines, and structured delivery from complex sources.", tag: "Scrapy \u00B7 Selenium \u00B7 Playwright", accent: AM },
  { icon: "\u{1F4F1}", name: "Mobile-Ready Systems", desc: "Interfaces and platforms built to feel smooth across desktop, tablet, and mobile from day one.", tag: "Responsive \u00B7 PWA \u00B7 Cross-Platform", accent: C },
  { icon: "\u2699\uFE0F", name: "Custom Automation", desc: "Internal tools, workflow engines, reporting systems, and integrations that reduce manual work and speed up teams.", tag: "Bots \u00B7 Pipelines \u00B7 Integrations", accent: V },
];

export const PORTFOLIO: PortfolioItem[] = [
  { type: "Artificial Intelligence", name: "AI Business Assistant", desc: "Conversational assistant for operations, support, and decision workflows with role-based capabilities and live backend integrations.", idx: "01", color: C },
  { type: "Python / Django", name: "Django ERP Dashboard", desc: "Admin-heavy platform for reporting, analytics, inventory flow, and business management with role-based access control.", idx: "02", color: G },
  { type: "Web Scraping", name: "Data Scraping Engine", desc: "Automated pipeline for collecting market data, validating records, and exporting structured datasets to downstream systems.", idx: "03", color: V },
  { type: "Frontend / UI", name: "Company Web Platform", desc: "High-end responsive product website with branded interface design, conversion-focused sections, and AI-powered chatbot.", idx: "04", color: AM },
  { type: "Delivery Model", name: "End-to-End Execution", desc: "We transform ideas into launched products through discovery, design, backend engineering, deployment, and iteration \u2014 handling the entire stack.", idx: "05", color: C, full: true },
];

export const PROCESS: ProcessStep[] = [
  { num: "01", icon: "\u{1F52D}", name: "Discovery", desc: "We map your goals, constraints, and users to define exactly what to build and why.", color: C },
  { num: "02", icon: "\u{1F3A8}", name: "Design", desc: "High-fidelity interfaces that balance premium aesthetics with usability and your brand.", color: V },
  { num: "03", icon: "\u{1F527}", name: "Engineering", desc: "Clean, maintainable code with tested APIs, solid architecture, and AI integrations built in.", color: G },
  { num: "04", icon: "\u{1F680}", name: "Deployment", desc: "Ship with confidence \u2014 staging, production, monitoring, and weekly progress check-ins.", color: AM },
];

export const AI_FEATURES: AIFeature[] = [
  { icon: "\u{1F9E0}", name: "LLM-Powered Workflows", desc: "Embed large language models directly into your business processes \u2014 from intelligent document parsing to automated decision-making pipelines.", badge: "Active Integration", color: V },
  { icon: "\u{1F50D}", name: "Intelligent Data Extraction", desc: "AI-enhanced scraping that understands context, adapts to site changes, validates records, and delivers structured, clean datasets automatically.", badge: "Self-Healing Pipelines", color: C },
  { icon: "\u{1F4AC}", name: "Conversational Interfaces", desc: "Build AI assistants and chatbots that understand your domain, integrate with your backend, and deliver real value beyond scripted FAQs.", badge: "Context-Aware", color: G },
  { icon: "\u{1F4CA}", name: "AI Analytics Dashboards", desc: "Dashboards that don't just display \u2014 they interpret. Get anomaly detection, smart summaries, and predictive insights alongside your metrics.", badge: "Predictive Engine", color: AM },
];

export const ABOUT_BULLETS: AboutBullet[] = [
  { text: "Premium UI with a product-first feel \u2014 every screen earns its place", color: C },
  { text: "Deep Python, Django, and AI expertise across every project", color: V },
  { text: "Custom scraping and automation pipelines built for reliability", color: G },
  { text: "Responsive-first development for modern web platforms", color: AM },
  { text: "Transparent delivery with weekly updates and clean handoffs", color: C },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { icon: "\u2709\uFE0F", label: "Email", val: "support.arixtech@gmail.com", color: C },
  { icon: "\u26A1", label: "Response Time", val: "Usually within 24 hours", color: V },
  { icon: "\u{1F30D}", label: "Work Type", val: "Remote \u2014 clients worldwide", color: G },
];

export const STACK = ["AI", "FastAPI", "Flask", "Python", "Django", "Java", "SDK", "Web Scraping", "Automation", "APIs", "React", "MUI", "TypeScript", "Playwright", "Scrapy", "LangChain", "OpenAI", "PostgreSQL", "Redis", "Docker"];

export const BOT_REPLIES: Record<string, string> = {
  ai: "We build AI assistants, workflow automation, and model-powered business tools tailored to your operations.",
  django: "Our Python/Django services cover scalable backends, APIs, dashboards, and custom business platforms.",
  python: "Our Python/Django services cover scalable backends, APIs, dashboards, and custom business platforms.",
  scrap: "We create reliable web scraping pipelines with validation, monitoring, and structured data delivery.",
  price: "Pricing depends on scope and timeline. Drop your requirements in Contact for a clear estimate.",
  cost: "Pricing depends on scope and timeline. Drop your requirements in Contact for a clear estimate.",
  react: "We build polished React frontends with MUI, TypeScript, and mobile-first responsive design.",
  default: "Thanks! Please share your project goal and we'll suggest the right solution for you.",
};
