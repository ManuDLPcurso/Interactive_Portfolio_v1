import { helpCommand } from "./commands/help";
import { whoamiCommand } from "./commands/whoami";
import { CommandResult } from "./terminal.types";

export function executeCommand(command: string): CommandResult {
  switch (command.trim().toLowerCase()) {
    case "help":
      return helpCommand();

    case "whoami":
      return whoamiCommand();

    case "projects":
      return {
        type: "projects",
      };

    case "skills":
      return {
        type: "skills",
      };

    default:
      return {
        type: "text",
        lines: [
          {
            text: `Command not found: ${command}`,
            color: "#c41515",
          },
        ],
      };
  }
}
