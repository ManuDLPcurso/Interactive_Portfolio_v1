import { projects } from "../../data/projects";
import ProjectItem from "./ProjectItem";

const ProjectsPanel = () => {
  return (
    <>
      <p style={{ color: "#febc2e" }}>PROJECTS</p>

      {projects.map((project) => (
        <ProjectItem 

        key={project.id} 
        project={project} 

        />

      ))}
    </>
  );
};

export default ProjectsPanel;
