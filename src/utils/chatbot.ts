import { BOT_REPLIES } from "../data/siteData";

export function getBotReply(msg: string): string {
  const t = msg.toLowerCase();
  for (const [k, v] of Object.entries(BOT_REPLIES)) {
    if (k !== "default" && t.includes(k)) return v;
  }
  return BOT_REPLIES.default;
}
