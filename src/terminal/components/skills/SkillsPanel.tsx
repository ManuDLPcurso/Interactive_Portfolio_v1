import SkillCategory from "./SkillCategory";
import { SKILLS } from "../../data/skills";

const SkillsPanel = () => {
  return (
    <div>
      {SKILLS.map((category) => (
        <SkillCategory
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
};

export default SkillsPanel;