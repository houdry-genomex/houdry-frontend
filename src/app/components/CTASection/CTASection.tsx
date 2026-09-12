"use client";

import { DownloadButton } from "../DownloadButton";

export function CTASection() {
  return (
    <section className="relative px-4 py-20 sm:px-8 sm:py-24 lg:px-[30px] lg:py-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-medium tracking-[-0.5px] leading-[1.1] text-foreground mb-4">
          Fabric on the GPUs. Agent on the desk.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8">
          Install Houdry Fabric on a GPU workstation from GitHub Releases, then open Houdry Agent and point it at the fabric URL.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <DownloadButton />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          GPU workstations · macOS · Windows · Linux · no account required
        </p>
      </div>
    </section>
  );
}
