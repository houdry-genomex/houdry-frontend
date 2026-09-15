export interface Feature {
  tag: string;
  title: string;
  description: string;
  video: string;
}

export const FEATURES: Feature[] = [
  {
    tag: "Calculation",
    title: "Engineering calculation",
    description:
      "Run the numbers on the GPU workstation. Houdry reads the source, shows the working, and quotes every value. Nothing leaves the plant LAN.",
    video: "/videos/engineering-calculation.mp4",
  },
  {
    tag: "Drawings",
    title: "P&ID generation",
    description:
      "A P&ID or scan in, a diagram out. Vision stays on-device, so equipment tags and title blocks never hit a cloud API.",
    video: "/videos/p-and-id.mp4",
  },
  {
    tag: "Deliverables",
    title: "Website generation",
    description:
      "A working site from the workbench, built and previewed on your own machines. The output is a file you can ship, not a chat reply.",
    video: "/videos/website-generation.mp4",
  },
];
