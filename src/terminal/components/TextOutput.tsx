import type { TextOutput } from "../terminal.types";

interface TextOutputProps {
  output: TextOutput;
}

const TextOutput = ({ output }: TextOutputProps) => {
  return (
    <>
      {output.lines.map((line, i) => (
        <p
          key={i}
          style={{
            color: line.icon ? "#ffffff" : line.color,
          }}
        >
          {line.icon && (
            <span
              className="terminal-icon"
              style={{ color: line.color }}
            >
              {line.icon}
            </span>
          )}

          {line.text}
        </p>
      ))}
    </>
  );
};

export default TextOutput;