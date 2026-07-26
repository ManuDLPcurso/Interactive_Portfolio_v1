import { CommandResult } from "../terminal.types";

export const helpCommand = (): CommandResult => ({
  type: "text",
  lines: [
    {
      text: "help",
      color: "#33ff66",
    },
    {
      text: "Muestra la lista de comandos disponibles.",
      color: "#ffffff",
    },
    {
      text: "whoami",
      color: "#33ff66",
    },
    {
      text: "Muestra información sobre el desarrollador.",
      color: "#ffffff",
    },
    {
      text: "skills",
      color: "#33ff66",
    },
    {
      text: "Muestra las habilidades técnicas y tecnologías utilizadas.",
      color: "#ffffff",
    },
    {
      text: "projects",
      color: "#33ff66",
    },
    {
      text: "Muestra los proyectos destacados y sus demostraciones.",
      color: "#ffffff",
    },
    {
      text: "contact",
      color: "#33ff66",
    },
    {
      text: "Contacto por correo electronico.",
      color: "#ffffff",
    },
    {
      text: "clear",
      color: "#33ff66",
    },
    {
      text: "Limpia la salida de la terminal.",
      color: "#ffffff",
    },
  ],
});
