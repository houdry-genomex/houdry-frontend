export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Does any data ever leave our premises?",
    answer:
      "No. Houdry runs entirely on your own GPU server: models are served locally by Ollama, tools execute in a local sandbox, and the daemon binds to localhost only. A live network monitor shows zero outbound requests during a session — you can verify the air gap yourself.",
  },
  {
    question: "Which models does it use?",
    answer:
      "Open-weight models running locally: DeepSeek R1 for reasoning, Qwen2.5-VL for drawings and scanned documents, and any other model you pull into Ollama. Each task is routed to the best fit automatically, and adding a new model is a config entry, not a redesign.",
  },
  {
    question: "What kinds of work can it actually do?",
    answer:
      "The routine knowledge work a refinery produces: reading scanned inspection reports and drafting approval notes as Word files, extracting tags from P&IDs into Excel registers, writing and running engineering calculations in a sandbox, and answering questions grounded in your own SOPs and manuals.",
  },
  {
    question: "Is Houdry free to use?",
    answer:
      "Yes. Houdry is built on open-source foundations under Apache 2.0 and runs as a local daemon on your own hardware. No account, no cloud, no per-seat licence.",
  },
  {
    question: "What hardware does it need?",
    answer:
      "A single workstation or server with a mid-range GPU is enough for the demonstration setup. Larger open-weight models scale up with your hardware — the software stack stays the same from a laptop demo to a datacenter deployment.",
  },
];
