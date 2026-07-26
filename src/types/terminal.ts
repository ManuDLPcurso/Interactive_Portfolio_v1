import { ReactNode } from "react";

export type TerminalLine = {
  text: string;
  color?: string;
  icon?: ReactNode;
};

export type HistoryItem = {
  command: string;
  output: TerminalLine[];
};