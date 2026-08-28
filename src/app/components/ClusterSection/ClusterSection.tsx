import Image from "next/image";
import { AppMockup } from "../HeroSection/components/AppMockup";

type WorkerNode = {
  name: string;
  gpu: string;
};

const WORKERS: WorkerNode[] = [
  { name: "Laptop A", gpu: "RTX 4060 · 8 GB" },
  { name: "Laptop B", gpu: "RTX 3060 · 6 GB" },
  { name: "Laptop C", gpu: "GTX 1650 · 4 GB" },
];

const ROUTES = [
  { model: "deepseek-r1:32b", task: "deep reasoning" },
  { model: "qwen2.5vl:7b", task: "drawings · scans" },
  { model: "deepseek-r1:14b", task: "notes · code" },
];

/** A pulsing vertical LAN link between the cluster tiers. */
function Link({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <span className="h-6 w-px animate-pulse bg-border" aria-hidden="true" />
      <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="h-6 w-px animate-pulse bg-border" aria-hidden="true" />
    </div>
  );
}

export function ClusterSection() {
  return (
    <section
      id="cluster"
      className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-[30px] lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl select-none text-left">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
            Every GPU on the floor, one brain.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Ordinary office laptops lend their GPUs over the plant LAN. The model router runs each
            task on the node best equipped for it — and the answer comes back to whoever asked.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-stretch">
          {/* tier 1 — the laptops lending their GPUs */}
          <div className="grid gap-3 sm:grid-cols-3">
            {WORKERS.map((worker) => (
              <div
                key={worker.name}
                className="flex flex-col items-center rounded-xl border border-border bg-card px-4 py-5"
              >
                <Image
                  src="/laptop.avif"
                  alt=""
                  width={220}
                  height={140}
                  className="pointer-events-none h-24 w-auto select-none object-contain sm:h-28"
                />
                <div className="mt-3 text-sm font-medium text-foreground">{worker.name}</div>
                <div className="font-mono text-[11px] text-muted-foreground">{worker.gpu}</div>
                <span className="mt-2 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  lends GPU
                </span>
              </div>
            ))}
          </div>

          <Link label="LAN" />

          {/* tier 2 — the workbench itself, shown exactly like the hero preview */}
          <div className="relative w-full max-w-full">
            <div className="relative aspect-[1140/700] overflow-hidden bg-card p-2 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] sm:aspect-auto sm:min-h-[420px] sm:p-4 lg:min-h-[540px] lg:p-6">
              <Image
                src="/optimized/hero-background.webp"
                alt=""
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="pointer-events-none select-none object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-background/15" />
              <div className="pointer-events-none absolute inset-x-8 top-8 h-24 rounded-full bg-foreground/[0.16] blur-3xl" />
              <div className="pointer-events-none absolute inset-[10%] top-[20%] rounded-3xl bg-white/[0.12] blur-[60px]" />
              <AppMockup />
            </div>
            {/* the router strip: which local model each kind of task lands on */}
            <div className="grid gap-2 border-t border-border bg-card p-3 sm:grid-cols-3">
              {ROUTES.map((route) => (
                <div
                  key={route.model}
                  className="flex items-center justify-between rounded-lg bg-background px-3 py-2 font-mono text-[11px]"
                >
                  <span className="text-foreground/80">{route.model}</span>
                  <span className="text-muted-foreground">{route.task}</span>
                </div>
              ))}
            </div>
          </div>

          <Link label="LAN" />

          {/* tier 3 — the response, tailored by local models */}
          <div className="mx-auto w-full max-w-2xl rounded-xl border border-border bg-card p-5">
            <div className="flex items-baseline justify-between">
              <div className="text-sm font-semibold text-foreground">Response</div>
              <span className="font-mono text-[10px] text-muted-foreground">
                tailored by local models
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
              Findings summarized, values quoted from the scan, deliverable attached.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 font-mono text-[11px] text-muted-foreground">
                approval-note-unit-4.docx
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 font-mono text-[11px] text-muted-foreground">
                served by deepseek-r1:32b · on-prem
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] text-muted-foreground">
          All traffic stays on the plant LAN — no internet route exists at any hop.
        </p>
      </div>
    </section>
  );
}
