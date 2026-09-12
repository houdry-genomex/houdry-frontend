"use client";

import {
  AGENT_INSTALL_UNIX,
  AGENT_RELEASES_URL,
  COMPANY,
  FABRIC_INSTALL_UNIX,
  FABRIC_INSTALL_WINDOWS,
  HERO_SUBHEADLINE,
  TAGLINE,
} from "@ao/shared/constants";
import { FaGithub } from "react-icons/fa";
import { DownloadButton } from "../DownloadButton";
import { Platform, usePlatform } from "../../hooks/useOS";
import { CopyInstallCommand } from "./CopyInstallCommand";
import { ProductDemo } from "./components/ProductDemo";

interface HeroSectionProps {
  initialStars: number | null;
}

export function HeroSection(_props: HeroSectionProps) {
  const { platform } = usePlatform();
  const isWindows = platform === Platform.Windows;
  const fabricCommand = isWindows
    ? FABRIC_INSTALL_WINDOWS
    : FABRIC_INSTALL_UNIX;
  const agentCommand = isWindows ? AGENT_RELEASES_URL : AGENT_INSTALL_UNIX;
  const githubButtonLabel = "GitHub";

  return (
    <div className="relative">
      <div className="relative flex flex-col items-center overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-10 lg:pt-36 lg:pb-12">
        <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-[30px]">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-5 sm:space-y-7 select-none">
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-normal tracking-[-0.5px] leading-[0.98] text-foreground max-w-6xl mx-auto text-balance">
                {TAGLINE}
              </h1>
              <p
                id="hero-subheadline"
                className="text-base sm:text-xl font-normal leading-8 text-muted-foreground max-w-4xl mx-auto text-balance"
              >
                {HERO_SUBHEADLINE}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
              <DownloadButton className="rounded-3xl" />
              <a
                href={COMPANY.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={githubButtonLabel}
                className="inline-flex items-center gap-2.5 rounded-3xl border border-border bg-background px-5 py-2.5 sm:py-3 text-sm sm:text-base font-normal tracking-[-0.5px] text-foreground transition-colors hover:bg-muted"
              >
                <FaGithub className="size-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="landing-install-command mt-4 flex w-full max-w-3xl flex-col gap-2">
              <CopyInstallCommand
                label="GPU workstation · Houdry Fabric"
                command={fabricCommand}
                method="fabric-release"
              />
              <CopyInstallCommand
                label="Desktop · Houdry Agent"
                command={agentCommand}
                method="agent-install"
              />
            </div>
          </div>

          <div className="relative w-full max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20">
            <ProductDemo />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[100px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
