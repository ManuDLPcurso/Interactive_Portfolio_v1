import { ReactNode } from "react";
import { IconType } from "react-icons";

export type TerminalLine = {
  text: string;
  color?: string;
  icon?: ReactNode;
};

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  features: string[];
  links: string;
  github: string;
  github2?: string;
}

export interface Technology {
  name: string;
  color: string;
  icon: IconType;
}

export interface TextOutput {
    type: "text";
    lines: TerminalLine[];
}

export interface SkillsOutput {
  type: "skills";
}

export interface SkillCategory {
  title: string;
  technologies: Technology[];
}

export interface ProjectsOutput {
    type: "projects";
}

export interface ContactOutput {
    type: "contact";
}

export interface RunOutput {
    type: "run";
    projectId: string;
}

export type CommandResult =
    | TextOutput
    | SkillsOutput
    | ProjectsOutput
    | ContactOutput
    | RunOutput;

export type HistoryItem = {
  command: string;
  output: CommandResult;
};