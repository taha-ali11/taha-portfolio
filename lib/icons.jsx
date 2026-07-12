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
} from "react-icons/si";
import {
  Sparkles,
  Plug,
  Bot,
  Cpu,
  BrainCircuit,
  Atom,
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
};

export function SkillIcon({ name, className }) {
  const Icon = iconMap[name] || Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
