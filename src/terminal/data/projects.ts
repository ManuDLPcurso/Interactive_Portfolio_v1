import type { Project } from "../terminal.types";
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
import { TECHNOLOGIES } from "./technologies";

export const projects: Project[] = [
  {
    id: "warehouse",

    title: "Warehouse Manager",

    description: "Aplicación de gestión de almacenes.",

    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.ionic,
      TECHNOLOGIES.node,
      TECHNOLOGIES.express,
      TECHNOLOGIES.mongo,
    ],
    features: [
      "Autenticación segura de usuarios.",
      "Gestión completa de almacenes mediante CRUD.",
      "Registro y gestión de coordenadas geográficas.",
      "Cálculo automático de la distancia entre clientes y almacenes disponibles.",
      "Arquitectura cliente-servidor basada en React, Node.js, Express y MongoDB.",
    ],
  },
  {
    id: "portfolio",

    title: "Interactive Portfolio",

    description: "Portfolio interactivo basado en una terminal Linux.",

    technologies: [TECHNOLOGIES.react, TECHNOLOGIES.typescript],
    features: [
      "Interfaz basada en comandos.",
      "Navegación completamente interactiva.",
      "Arquitectura modular y escalable.",
      "Diseño responsive.",
      "Acceso a proyectos, tecnologías y contacto mediante comandos personalizados.",
    ],
  },
];
