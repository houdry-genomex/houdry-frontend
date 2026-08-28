import { COMPANY } from "@ao/shared/constants";

export interface Testimonial {
  id: string;
  author: string;
  handle?: string;
  avatar?: string;
  role?: string;
  content: string;
  originalContent?: string;
  url: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "why-air-gapped",
    author: "Why air-gapped?",
    role: "The problem",
    content:
      "Refineries, PSUs, and defence-linked units generate constant knowledge work — approval notes, engineering calculations, drawing reviews — but none of it can touch cloud AI. P&IDs, financials, and vendor negotiations stay on premises by policy.\n\nSo the work is done manually, or confidential material quietly ends up in public tools anyway. Houdry removes that trade-off.",
    url: "/",
  },
  {
    id: "local-models",
    author: "Open weights, local GPU",
    role: "The approach",
    content:
      "Open-weight reasoning models are now genuinely useful. Houdry serves them from your own hardware through Ollama — DeepSeek R1 for reasoning, Qwen2.5-VL for vision — and routes every task to the best fit automatically.",
    url: "/",
  },
  {
    id: "real-deliverables",
    author: "Deliverables, not replies",
    role: "The output",
    content:
      "A scanned inspection report goes in; a formatted Word approval note comes out. Tags from a P&ID become an Excel register. Calculations run in a sandbox and show their steps. The workbench produces the files people actually submit.",
    url: "/",
  },
  {
    id: "proof",
    author: "Proof over promises",
    role: "The guarantee",
    content:
      "The sovereignty claim is demonstrated live: a network monitor stays at zero outbound requests for the whole session, and the demo keeps running with the cable unplugged.",
    url: "/",
  },
  {
    id: "grounded",
    author: "Grounded in your documents",
    role: "The knowledge base",
    content:
      "Answers cite your own SOPs, manuals, and past correspondence through a local index — so the note that comes out matches how your organization actually writes them.",
    url: "/",
  },
  {
    id: "sih",
    author: "Built for SIH 2026",
    role: "PS 26117 · MRPL",
    content:
      "Houdry is our working prototype for Smart India Hackathon 2026, Problem Statement 26117 (Mangalore Refinery and Petrochemicals Limited): a sovereign, on-premise agentic AI workbench for confidential industrial work.",
    url: "/",
  },
];
