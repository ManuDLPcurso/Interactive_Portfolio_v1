import { SkillCategory } from "../terminal.types";
import { TECHNOLOGIES } from "./technologies";

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.angular,
      TECHNOLOGIES.ionic,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
    ],
  },
  {
    title: "Backend",
    technologies: [
      TECHNOLOGIES.node,
      TECHNOLOGIES.restApi,
    ],
  },
  {
    title: "Databases",
    technologies: [
      TECHNOLOGIES.mongo,
      TECHNOLOGIES.sql,
      TECHNOLOGIES.supabase,
    ],
  },
  {
    title: "Herramientas",
    technologies: [
      TECHNOLOGIES.git,
      TECHNOLOGIES.github,
    ],
  },
];