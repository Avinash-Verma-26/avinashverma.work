import { useState } from "react";
import type { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
  collapsible?: boolean;
  previewLines?: number;
};

const CodeBlock = ({
  children,
  collapsible = false,
  previewLines = 3,
}: CodeBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const codeText = String(children);
  const lines = codeText.split("\n");

  const shouldCollapse = collapsible && lines.length > previewLines;

  const visibleCode =
    shouldCollapse && !isExpanded
      ? lines.slice(0, previewLines).join("\n") + "\n..."
      : codeText;

  return (
    <div className="group relative mt-2">
      {shouldCollapse && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="absolute right-3 top-3 z-10 rounded-md bg-zinc-700 px-3 py-1 text-xs text-zinc-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-zinc-600 cursor-pointer"
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      )}

      <pre className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
        <code className="font-mono text-sm text-zinc-100 whitespace-pre">
          {visibleCode}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
