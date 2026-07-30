import { CommandResult } from "../terminal.types";

export const contactCommand = (): CommandResult => ({
  type: "text",
  lines: [
    {
      text: "Nombre:",
      color: "#febc2e",
    },
    {
      text: "> Manuel de la Paz Aragón",
      color: "#ffffff",
    },
    {
      text: "Perfil:",
      color: "#febc2e",
    },
    {
      text: "> Desarrollador en formación, enfocado en crear soluciones digitales útiles y funcionales.",
      color: "#ffffff",
    },
    {
      text: "Trayectoria:",
      color: "#febc2e",
    },
    {
      text: "> Mi experiencia viene del mundo de operaciones y datos, donde aprendí a mejorar procesos, automatizar tareas y transformar información en decisiones.",
      color: "#ffffff",
    },
    {
      text: "Filosofía:",
      color: "#febc2e",
    },
    {
      text: "> Crear soluciones simples para problemas reales, entendiendo tanto la parte visual como la lógica que hay detrás.",
      color: "#ffffff",
    },
    {
      text: "Objetivo:",
      color: "#febc2e",
    },
    {
      text: "> Convertir ideas en productos reales mediante código.",
      color: "#ffffff",
    },
  ],
});
