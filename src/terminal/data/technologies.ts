import { FaDatabase, FaPlug } from "react-icons/fa";
import {
  SiAngular,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export const TECHNOLOGIES = {
  react: {
    icon: SiReact ,
    name: " React",
    color: "#61DAFB",
  },

  angular: {
    icon: SiAngular ,
    name: " Angular",
    color: "#FF4D6D",
  },

  ionic: {
    icon: SiIonic ,
    name: " Ionic",
    color: "#5CA8FF",
  },

  typescript: {
    icon: SiTypescript,
    name: " TypeScipt",
    color: "#4DA3FF",
  },
  javascript: {
    icon: SiJavascript,
    name: " JavaScript",
    color: "#FFD93D",
  },
  html: {
    icon: SiHtml5,
    name: " HTML5",
    color: "#FF6B3D",
  },
  css: {
    icon: SiCss,
    name: " CSS3",
    color: "#4DA6FF",
  },
  node: {
    icon: SiNodedotjs,
    name: " Node.js",
    color: "#6CC24A",
  },
   express: {
    icon: SiExpress,
    name: " Express",
    color: "#eceeeb",
  },
  restApi: {
    icon: FaPlug,
    name: " REST API",
    color: "#FF7B72",
  },
  mongo: {
    icon: SiMongodb,
    name: " MongoDB",
    color: "#4DB33D",
  },
  sql: {
    icon: FaDatabase,
    name: " SQL",
    color: "#5CA8FF",
  },
  supabase: {
    icon: SiSupabase,
    name: " Supabase",
    color: "#3FE38A",
  },
  git: {
    icon: SiGit,
    name: " Git",
    color: "#FF7A45",
  },
  github: {
    icon: SiGithub,
    name: " GitHub",
    color: "#F0F6FC",
  },
};
