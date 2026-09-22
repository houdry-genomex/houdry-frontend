import {
  AGENT_INSTALL_UNIX,
  AGENT_RELEASES_URL,
  COMPANY,
  FABRIC_INSTALL_UNIX,
  FABRIC_INSTALL_WINDOWS,
  FABRIC_RELEASES_URL,
} from "@ao/shared/constants";
import { Download } from "lucide-react";
import type { Metadata } from "next";
import { FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { CopyInstallCommand } from "../components/HeroSection/CopyInstallCommand";
import {
  getAgentReleases,
  getAgentWindowsDownload,
  getPlatformDownloads,
  getReleases,
} from "@/lib/releases";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Install Houdry Fabric on GPU workstations and Houdry Agent on the desk.",
};

const PLATFORM_ICONS = {
  macOS: FaApple,
  Windows: FaWindows,
  Linux: FaLinux,
} as const;

export default async function DownloadPage() {
  const [fabricReleases, agentReleases] = await Promise.all([
    getReleases(),
    getAgentReleases(),
  ]);
  const platformDownloads = getPlatformDownloads(fabricReleases);
  const agentWindows = getAgentWindowsDownload(agentReleases);

  return (
    <main className="min-h-[100dvh] bg-background text-foreground">
      <section className="relative px-4 py-16 sm:px-8 sm:py-20 lg:px-[30px] lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 select-none text-left">
            <h1 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
              Install Fabric and Agent
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              GPU workstations run Houdry Fabric from GitHub Releases. Desks run
              Houdry Agent and point at the fabric URL.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                GPU workstation
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                Houdry Fabric
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Control plane and node agent. Install the latest GitHub release,
                then <code className="font-mono text-sm">houdry serve</code> and{" "}
                <code className="font-mono text-sm">houdry gpu register</code>.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <CopyInstallCommand
                  label="Linux / macOS"
                  command={FABRIC_INSTALL_UNIX}
                  method="fabric-release"
                />
                <CopyInstallCommand
                  label="Windows PowerShell"
                  command={FABRIC_INSTALL_WINDOWS}
                  method="fabric-release-ps1"
                />
              </div>
              <a
                href={FABRIC_RELEASES_URL}
                className="mt-4 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                All fabric binaries on GitHub Releases
              </a>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Desk
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                Houdry Agent
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Desktop app for operators. After install, choose Houdry server
                URL: <code className="font-mono text-sm">https://&lt;host&gt;:8080/v1</code>.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <CopyInstallCommand
                  label="Linux / macOS"
                  command={AGENT_INSTALL_UNIX}
                  method="agent-install"
                />
                {agentWindows ? (
                  <a
                    href={agentWindows}
                    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:opacity-90"
                  >
                    <FaWindows className="size-4" aria-hidden="true" />
                    Download for Windows
                  </a>
                ) : (
                  <a
                    href={AGENT_RELEASES_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background hover:opacity-90"
                  >
                    <FaWindows className="size-4" aria-hidden="true" />
                    Windows installer on GitHub
                  </a>
                )}
              </div>
              <a
                href={COMPANY.GITHUB_AGENT_URL}
                className="mt-4 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                houdry-genomex/houdry-agent
              </a>
            </article>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-foreground">
              Fabric binaries
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Same GitHub release as the install scripts. Prefer{" "}
              <code className="font-mono">install.sh</code> /{" "}
              <code className="font-mono">install.ps1</code> unless you need a
              specific architecture.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 text-foreground md:grid-cols-3">
              {platformDownloads.map((platform) => {
                const Icon =
                  PLATFORM_ICONS[platform.name as keyof typeof PLATFORM_ICONS];
                return (
                  <article
                    key={platform.name}
                    className="flex flex-col rounded-2xl bg-card p-5 sm:p-6"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      {Icon ? (
                        <Icon className="size-4 shrink-0" aria-hidden="true" />
                      ) : null}
                      <h3 className="text-base font-semibold">{platform.name}</h3>
                    </div>
                    <div className="flex-1 divide-y divide-border">
                      {platform.builds.map((downloadBuild) => (
                        <a
                          key={downloadBuild.label}
                          href={downloadBuild.href}
                          className="block w-full py-4 transition-opacity hover:opacity-75"
                        >
                          <span className="flex items-center gap-3">
                            <span className="whitespace-nowrap text-sm">
                              {downloadBuild.label}
                            </span>
                            <Download
                              className="ml-auto size-4 shrink-0 text-muted-foreground"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
