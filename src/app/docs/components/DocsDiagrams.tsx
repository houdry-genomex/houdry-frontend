import type { ReactNode } from "react";

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="inline-block whitespace-nowrap rounded-md border border-border bg-background px-1.5 py-px font-mono text-[12px] font-medium text-foreground">
      {children}
    </code>
  );
}

function Arrow() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center py-1 text-muted-foreground md:px-1"
    >
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </div>
  );
}

function Panel({
  where,
  product,
  children,
}: {
  where: string;
  product: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-muted/20 px-3.5 py-3">
      <p className="text-[15px] font-semibold leading-5 tracking-tight text-foreground">
        {where}
      </p>
      <p className="mt-0.5 text-[13px] leading-5 text-muted-foreground">{product}</p>
      <div className="mt-2 space-y-1 text-[13px] leading-5 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function ArchitectureSplit() {
  return (
    <div className="not-prose my-5">
      <div className="grid items-start gap-2 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Panel where="On the desk" product="Houdry Agent">
          <p>Chat, Knowledge, SOPs, files, and local tools.</p>
          <p>
            Talks to Fabric at <Code>http://HOST:8080/v1</Code>
          </p>
        </Panel>
        <Arrow />
        <Panel where="On the GPU" product="Houdry Fabric">
          <p>
            <Code>houdry serve</Code> on port 8080 is the control plane.
          </p>
          <p>
            <Code>houdry gpu register</Code> runs Ollama and returns the answer.
          </p>
        </Panel>
      </div>
      <p className="mt-3 text-[13px] leading-5 text-muted-foreground">
        People never talk to the GPU process. They talk to Agent. Agent talks to
        Fabric. Fabric picks a model on a READY GPU.
      </p>
    </div>
  );
}

const FLOW = [
  { n: "1", title: "Prompt", body: "Operator types in Houdry Agent." },
  { n: "2", title: "LAN call", body: "POST /v1/chat/completions with model auto." },
  { n: "3", title: "Route", body: "Fabric scores the task against READY GPUs." },
  { n: "4", title: "Infer", body: "That workstation runs Ollama and streams tokens." },
  { n: "5", title: "Reply", body: "The answer shows up in Agent. Files stay on-prem." },
] as const;

export function RequestFlow() {
  return (
    <ol className="not-prose my-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {FLOW.map((step) => (
        <li
          key={step.n}
          className="rounded-lg border border-border bg-muted/20 px-3.5 py-3"
        >
          <p className="text-[11px] font-medium text-muted-foreground">
            Step {step.n}
          </p>
          <p className="mt-0.5 text-sm font-semibold leading-5 tracking-tight text-foreground">
            {step.title}
          </p>
          <p className="mt-1 text-[13px] leading-5 text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProductRoles() {
  return (
    <div className="not-prose my-5 grid items-start gap-2 sm:grid-cols-2">
      <Panel where="On the GPU" product="Install Fabric">
        <p className="flex flex-wrap items-center gap-1">
          <Code>houdry serve</Code>
          <Code>houdry gpu register</Code>
        </p>
        <p>Ollama running, with at least one model pulled.</p>
      </Panel>
      <Panel where="On the desk" product="Install Agent">
        <p>
          Point it at <Code>http://HOST:8080/v1</Code>
        </p>
        <p>Do not install Fabric on every laptop.</p>
      </Panel>
    </div>
  );
}
