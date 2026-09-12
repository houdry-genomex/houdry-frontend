export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Does any data ever leave our premises?",
    answer:
      "No. Houdry Fabric runs on your GPU workstations (`houdry serve` + `houdry gpu register`). Houdry Agent on each desk talks to that fabric over the plant LAN. Models stay on your hardware. A live network monitor shows zero outbound requests during a session, so you can verify the air gap yourself.",
  },
  {
    question: "Which models does it use?",
    answer:
      "Open-weight models running on the fabric: DeepSeek R1 for reasoning, Qwen2.5-VL for drawings and scanned documents, and any other model you pull into Ollama on a GPU workstation. The fabric router (`model=auto`) picks the best (model, node) pair; pinning a named model is a config entry, not a redesign.",
  },
  {
    question: "What kinds of work can it actually do?",
    answer:
      "The routine knowledge work a refinery produces: reading scanned inspection reports and drafting approval notes as Word files, extracting tags from P&IDs into Excel registers, writing and running engineering calculations in a sandbox, and answering questions grounded in your own SOPs and manuals.",
  },
  {
    question: "Is Houdry free to use?",
    answer:
      "Yes. Houdry Agent is open source under MIT. Houdry Fabric installs from GitHub Releases onto your own GPU workstations. No account, no cloud, no per-seat licence.",
  },
  {
    question: "What hardware does it need?",
    answer:
      "A single GPU workstation is enough for the demonstration setup. Extra workstations join the same fabric with `houdry gpu register`. Larger open-weight models scale with VRAM. The stack stays the same from one GPU workstation to a plant floor of them.",
  },
];
