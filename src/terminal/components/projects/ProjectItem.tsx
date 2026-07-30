import { useState } from "react";
import type { Project } from "../../terminal.types";
import "./ProjectItem.css";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className="project-header"
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: "pointer",
          color: "#33ff66",
          userSelect: "none",
        }}
      >
        {expanded ? "[-]" : "[+]"} {project.title}
      </div>

      {expanded && (
        <div className="project-content">
          <p className="project-label">Descripción:</p>
          <p>{project.description}</p>
          <p className="project-label">Tecnologías:</p>
          <div className="project-techs">
            {project.technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="project-tech"
                  style={{ color: tech.color }}
                >
                  <Icon />

                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
          <p className="project-label">Características:</p>
          {project.features.map((feature) => (
            <p key={feature}>✓ {feature}</p>        
          ))}
          <p className="project-label">Enlaces:</p>
          <p className="project-links">DEMO</p>

          <iframe className="project-iframe"
             
              src={project.links}
            />
          <p>Haz click para abrir el proyecto → 
            <a className="project-links" href={project.links} target="_blank">Warehous Manager</a>
            </p>
          <p>Haz click para abrir repositorio de GitHub → <a className="project-links" href={project.github} target="_blank">FRONTEND - </a><a className="project-links" href={project.github2} target="_blank">BACKEND </a></p>
        </div>
        
      )}
    </div>
  );
};

export default ProjectItem;
