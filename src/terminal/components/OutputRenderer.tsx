import TextOutput from "./TextOutput";
import ProjectsPanel from "./projects/ProjectsPanel";

import type {
  CommandResult,
  TextOutput as TextOutputType,
} from "../terminal.types";
import SkillsPanel from "./skills/SkillsPanel";
import ContactPanel from "./contact/ContactPanel"

interface OutputRendererProps {
  output: CommandResult;
}

const OutputRenderer: React.FC<OutputRendererProps> = ({ output }) => {
  switch (output.type) {
    case "text":
      return <TextOutput output={output as TextOutputType} />;

    case "projects":
      return <ProjectsPanel />;

    case "skills"  :
      return <SkillsPanel />

    case "contact"  :
      return <ContactPanel />

    default:
      return null;
  }
};

export default OutputRenderer;