"use client";

import { FABRIC_INSTALL_UNIX } from "@ao/shared/constants";
import { TypewriterText } from "../TypewriterText";

interface TerminalLine {
  kind: "prompt" | "out" | "ok" | "dim";
  text: string;
}

const SESSION: TerminalLine[] = [
  { kind: "dim", text: "# GPU workstation · Houdry Fabric" },
  { kind: "prompt", text: FABRIC_INSTALL_UNIX },
  { kind: "ok", text: "houdry v0.6.3 installed → ~/.houdry/bin" },
  { kind: "prompt", text: "houdry gpu detect" },
  { kind: "out", text: "NVIDIA RTX 4090 · 24 GB  READY" },
  { kind: "prompt", text: "houdry serve --listen 0.0.0.0:8080" },
  { kind: "ok", text: "control plane on :8080 · announcing on WiFi" },
  { kind: "prompt", text: "houdry gpu register" },
  { kind: "ok", text: "this workstation joined the fabric · READY" },
];

const AGENT_SESSION: TerminalLine[] = [
  { kind: "dim", text: "# desk · Houdry Agent" },
  {
    kind: "prompt",
    text: "curl -fsSL https://raw.githubusercontent.com/houdry-genomex/houdry-agent/main/scripts/install.sh | bash",
  },
  { kind: "ok", text: "Houdry Agent installed" },
  { kind: "dim", text: "onboarding → Houdry server URL" },
  { kind: "ok", text: "connected http://gpu-ws-a:8080/v1  model=auto" },
];

function Line({
  line,
  animate,
}: {
  line: TerminalLine;
  animate: boolean;
}) {
  const color =
    line.kind === "prompt"
      ? "text-foreground"
      : line.kind === "ok"
        ? "text-emerald-400/90"
        : line.kind === "dim"
          ? "text-muted-foreground/70"
          : "text-foreground/80";

  return (
    <div className={`flex gap-2 ${color}`}>
      {line.kind === "prompt" ? (
        <span className="shrink-0 text-foreground/40" aria-hidden="true">
          $
        </span>
      ) : (
        <span className="w-3 shrink-0" aria-hidden="true" />
      )}
      <span className="min-w-0 break-all">
        {animate ? (
          <TypewriterText text={line.text} speed={18} delay={400} />
        ) : (
          line.text
        )}
      </span>
    </div>
  );
}

function Pane({
  title,
  lines,
  animateFirst,
}: {
  title: string;
  lines: TerminalLine[];
  animateFirst?: boolean;
}) {
  return (
    <div className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-border bg-background/90 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)]">
      <div className="flex h-9 items-center gap-2 border-b border-border px-3">
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </span>
        <span className="truncate font-mono text-[11px] text-muted-foreground">
          {title}
        </span>
      </div>
      <pre className="flex-1 overflow-auto p-4 font-mono text-[11px] leading-6 sm:text-xs sm:leading-7">
        {lines.map((line, index) => (
          <Line
            key={`${line.kind}-${index}`}
            line={line}
            animate={Boolean(animateFirst) && index === 1}
          />
        ))}
      </pre>
    </div>
  );
}

export function FabricTerminal() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <Pane
        title="houdry · GPU workstation"
        lines={SESSION}
        animateFirst
      />
      <Pane title="houdry-agent · desk" lines={AGENT_SESSION} />
    </div>
  );
}
