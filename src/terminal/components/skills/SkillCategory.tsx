import { useState } from "react";
import type { SkillCategory as SkillCategoryType } from "../../terminal.types";
import TechnologyItem from "../TechnologyItem";

interface Props {
  category: SkillCategoryType;
}

const SkillCategory = ({ category }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: "pointer",
          color: "#febc2e",
          margin: "5px 0px 15px 0px",
        }}
      >
        {expanded ? "[-]" : "[+]"} {category.title}
      </div>

      {expanded && (
        <div style={{ margin: "15px 0px 25px 20px" }}>
          {category.technologies.map((technology) => (
            <TechnologyItem key={technology.name} technology={technology} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCategory;
