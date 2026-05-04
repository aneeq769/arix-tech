export interface Service {
  icon: string;
  name: string;
  desc: string;
  tag: string;
  accent: string;
}

export interface PortfolioItem {
  type: string;
  name: string;
  desc: string;
  idx: string;
  color: string;
  full?: boolean;
}

export interface ProcessStep {
  num: string;
  icon: string;
  name: string;
  desc: string;
  color: string;
}

export interface AIFeature {
  icon: string;
  name: string;
  desc: string;
  badge: string;
  color: string;
}

export interface AboutBullet {
  text: string;
  color: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  val: string;
  color: string;
}

export interface ChatMessage {
  role: "bot" | "user";
  text: string;
}

export type Navigate = (page: string) => void;
