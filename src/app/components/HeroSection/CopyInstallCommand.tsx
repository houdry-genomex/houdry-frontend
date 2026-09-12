"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

interface CopyInstallCommandProps {
  label: string;
  command: string;
  method: string;
}

export function CopyInstallCommand({
  label,
  command,
  method,
}: CopyInstallCommandProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(command);
    track("install_command_copied", { method });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      aria-label={`Copy ${label} install command: ${command}`}
      title="Click to copy"
      className="group flex w-full min-h-11 items-start gap-2 rounded-3xl border border-border bg-card/70 px-3 py-2.5 text-left font-mono text-xs tracking-[0.3px] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground sm:items-center sm:text-sm"
      onClick={copy}
    >
      <span className="mt-0.5 shrink-0 text-foreground/40 sm:mt-0" aria-hidden="true">
        $
      </span>
      <span className="min-w-0 flex-1">
        <span className="mb-1 block font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <code className="block break-all whitespace-normal text-foreground/80">
          {command}
        </code>
      </span>
      <span
        className="ml-2 inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
        aria-hidden="true"
      >
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
