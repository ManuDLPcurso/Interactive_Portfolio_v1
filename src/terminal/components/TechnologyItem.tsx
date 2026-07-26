import type { Technology } from "../terminal.types";
import "./TechnologyItem.css";

interface TechnologyItemProps {
  technology: Technology;
}

const TechnologyItem = ({ technology }: TechnologyItemProps) => {
  const Icon = technology.icon;

  return (
    <div className="technology-item">
      <Icon
        className="technology-icon"
        style={{ color: technology.color }}
      />

      <span className="technology-name">
        {technology.name}
      </span>
    </div>
  );
};

export default TechnologyItem;