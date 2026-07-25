import "./Terminal.css";
import { portfolioBanner } from "../../assets/ascii/PortfolioTitle";
import { getLastLogin } from "../../utils/date";
import { executeCommand } from "../../utils/commands";
import { useState, useRef } from "react";
import { HistoryItem } from "../../types/terminal";

const Terminal: React.FC = () => {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const lastCommandRef = useRef<HTMLDivElement>(null);

  const handleCommand = () => {
    if (command.trim() === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }
    const output = executeCommand(command);

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);

    setCommand("");

    requestAnimationFrame(() => {
      lastCommandRef.current?.scrollIntoView({
        block: "start",
      });
    });
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-title">
          Interactive Portfolio Manuel de la Paz v1.0
        </span>

        <div className="buttons">
          <span className="red">x</span>

          <span className="yellow">-</span>

          <span className="green">□</span>
        </div>
      </div>

      <div className="terminal-body" ref={terminalBodyRef}>
        <pre className="banner">{portfolioBanner}</pre>

        <span className="cyan-text">Interactive Developer Portfolio v1.0</span>

        <p>
          Session initialized <span className="green-text">successfully</span>.
        </p>

        <p>
          Last login: <span className="grey-text">{getLastLogin()}</span> from
          localhost
        </p>

        <p>
          Type <span className="green-text">help</span> to list available
          commands.
        </p>

        <div className="terminal-history">
          {history.map((item, index) => (
            <div
              key={index}
              className="history-item"
              ref={index === history.length - 1 ? lastCommandRef : null}
            >
              <p className="command">
                <span className="green-text">manu</span>
                <span className="cyan-text">@portfolio</span>
                <span className="yellow-text">:~</span>
                <span className="green-text">$ </span>
                {item.command}
              </p>

              <div className="output">
                {item.output.map((line, i) => (
                  <p key={i} style={{ color: line.color }}>
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="prompt">
          <span className="green-text">manu</span>
          <span className="cyan-text">@portfolio</span>
          <span className="yellow-text">:~</span>
          <span className="green-text">$ </span>
          {command === "" && <span className="cursor"></span>}

          <input
            className="terminal-input"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
