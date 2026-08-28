export interface Feature {
  tag: string;
  title: string;
  description: string;
  colors: readonly [string, string, string, string];
}

export const FEATURES: Feature[] = [
  {
    tag: "Delegation",
    title: "Tell the workbench what you need",
    description:
      "Describe the outcome — an approval note from a scanned inspection report, a verified calculation, a working script. Houdry plans the steps, reads the files, runs the tools, and iterates until the deliverable exists.",
    colors: ["#7f1d1d", "#991b1b", "#450a0a", "#1a1a2e"],
  },
  {
    tag: "Multimodal",
    title: "Reads drawings, scans, and handwriting",
    description:
      "On-device vision models read P&IDs, scanned PDFs, photographs, and handwritten field notes. Equipment tags, title blocks, and findings come out as structured text — no cloud vision API ever sees the document.",
    colors: ["#047857", "#065f46", "#064e3b", "#1a1a2e"],
  },
  {
    tag: "Deliverables",
    title: "Files out, not just chat replies.",
    description:
      "The output is a formatted Word approval note, an Excel tag register, a presentation, or a script run and verified in a local sandbox — with every value quoted from the source document.",
    colors: ["#1e40af", "#1e3a8a", "#172554", "#1a1a2e"],
  },
  {
    tag: "Model routing",
    title: "Use the local models you already trust",
    description:
      "Open-weight reasoning, coding, and vision models served by Ollama on your own GPU. Each task is routed to the best fit automatically, and new models are a config entry — never a redesign.",
    colors: ["#7c3aed", "#6d28d9", "#4c1d95", "#1a1a2e"],
  },
  {
    tag: "Sovereignty",
    title: "Provably offline, wherever it runs",
    description:
      "A live network monitor and daemon logs show zero outbound requests during a session. Pull the network cable mid-task and everything keeps working — the air gap is demonstrated, not promised.",
    colors: ["#2563eb", "#1d4ed8", "#1e3a8a", "#1a1a2e"],
  },
];
