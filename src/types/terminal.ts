export type TerminalLine = {
  text: string;
  color?: string;
};

export type HistoryItem = {
  command: string;
  output: TerminalLine[];
};