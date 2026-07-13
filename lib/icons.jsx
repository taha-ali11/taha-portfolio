import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiVite,
  SiMysql,
  SiMongodb,
  SiSwagger,
  SiN8N,
} from "react-icons/si";
import {
  Sparkles,
  Plug,
  Bot,
  Cpu,
  BrainCircuit,
  Atom,
  Wand2,
} from "lucide-react";

export const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJsSquare,
  nodejs: FaNodeJs,
  react: FaReact,
  vue: FaVuejs,
  database: FaDatabase,
  tailwind: SiTailwindcss,
  express: SiExpress,
  nextjs: SiNextdotjs,
  vite: SiVite,
  mysql: SiMysql,
  mongodb: SiMongodb,
  sparkles: Sparkles,
  plug: Plug,
  bot: Bot,
  cpu: Cpu,
  brain: BrainCircuit,
  atom: Atom,
  swagger: SiSwagger,
  n8n: SiN8N,
  wand: Wand2,
};

export function SkillIcon({ name, className }) {
  const Icon = iconMap[name] || Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}