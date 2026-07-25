import { TerminalLine } from "../types/terminal";

export function executeCommand(command: string): TerminalLine[] {
  switch (command.trim()) {
    case "help":
      return [
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
      ];

    case "whoami":
      return [
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
      ];

    case "skills":
      return [
        {
          text: "FRONTEND:",
          color: "#febc2e",
        },
        {
          text: "> React",
          color: "#61DAFB",
        },
        {
          text: "> Angular",
          color: "#FF4D6D",
        },
        {
          text: "> TypeScipt",
          color: "#4DA3FF",
        },
        {
          text: "> JavaScript",
          color: "#FFD93D",
        },
        {
          text: "> HTML5",
          color: "#FF6B3D",
        },
        {
          text: "> CSS3",
          color: "#4DA6FF",
        },
        {
          text: "────────────────────────────────────",
          color: "#666666",
        },
        {
          text: "BACKEND:",
          color: "#febc2e",
        },
        {
          text: "> Node.js + Express",
          color: "#6CC24A",
        },
        {
          text: "> REST API",
          color: "#FF7B72",
        },

        {
          text: "────────────────────────────────────",
          color: "#666666",
        },
        {
          text: "DATABASES:",
          color: "#febc2e",
        },
        {
          text: "> MongoDB",
          color: "#4DB33D",
        },
        {
          text: "> SQL",
          color: "#5CA8FF",
        },
        {
          text: "> Supabase",
          color: "#3FE38A",
        },
        {
          text: "────────────────────────────────────",
          color: "#666666",
        },
        {
          text: "HERRAMIENTAS:",
          color: "#febc2e",
        },
        {
          text: "> Git",
          color: "#FF7A45",
        },
        {
          text: "> GitHub",
          color: "#F0F6FC",
        },
      ];

    case "projects":
      return [
        {
          text: "PROJECTS",
          color: "#febc2e",
        },
        {
          text: "",
        },
        {
          text: "[1] Warehouse Manager",
          color: "#33ff66",
        },
        {
          text: "Aplicación de gestión de almacenes que permite administrar diferentes ubicaciones y facilitar la búsqueda del almacén más cercano.\n\nCaracterísticas:\n\n• Autenticación segura de usuarios.\n• Gestión completa de almacenes (CRUD).\n• Registro de coordenadas geográficas.\n• Cálculo automático de la distancia entre el cliente y los almacenes disponibles.\n• Arquitectura cliente-servidor basada en React, Node.js, Express y MongoDB.",
          color: "#ffffff",
        },
        {
          text: "",
        },
        {
          text: "[2] Interactive Portfolio",
          color: "#33ff66",
        },
        {
          text: "Portfolio interactivo inspirado en una terminal Linux desarrollado con React y TypeScript.\n\nCaracterísticas:\n\n• Interfaz basada en comandos.\n• Navegación completamente interactiva.\n• Arquitectura modular y escalable.\n• Diseño responsive.\n• Acceso a proyectos, tecnologías y contacto mediante comandos personalizados.",
          color: "#ffffff",
        },
        {
          text: "",
        },
        {
          text: "────────────────────────────────────",
          color: "#666666",
        },
        {
          text: "",
        },
        {
          text: "AVAILABLE COMMANDS",
          color: "#febc2e",
        },
        {
          text: "run warehouse",
          color: "#33ff66",
        },
        {
          text: "    Ejecuta la demo del ERP.",
          color: "#ffffff",
        },
        {
          text: "",
        },
        {
          text: "open github",
          color: "#33ff66",
        },
        {
          text: "    Abre mi perfil de GitHub.",
          color: "#ffffff",
        },
        {
          text: "",
        },
        {
          text: "repos",
          color: "#33ff66",
        },
        {
          text: "    Lista todos mis repositorios públicos.",
          color: "#ffffff",
        },
      ];

    case "clear":
      return `
        Available commands:
        help
        whoami
        skills
        projects
        contact
        clear
        `;

    default:
      return `Command not found: ${command}`;
  }
}
