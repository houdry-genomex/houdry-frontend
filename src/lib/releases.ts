import {
  COMPANY,
  DOWNLOAD_URL_LINUX,
  DOWNLOAD_URL_MAC_ARM64,
  DOWNLOAD_URL_MAC_X64,
  DOWNLOAD_URL_WINDOWS,
  FABRIC_INSTALL_PS1,
  FABRIC_INSTALL_SH,
} from "@ao/shared/constants";

export interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface GitHubRelease {
  draft: boolean;
  prerelease: boolean;
  tag_name: string;
  assets: GitHubReleaseAsset[];
}

export interface DownloadBuild {
  channel: "Stable" | "Nightly";
  href: string;
  label: string;
}

export interface PlatformDownloads {
  name: string;
  builds: DownloadBuild[];
}

export async function getReleases(
  repo: string = COMPANY.GITHUB_FABRIC_REPO,
): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/releases?per_page=30`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];
    return (await response.json()) as GitHubRelease[];
  } catch {
    return [];
  }
}

export async function getAgentReleases(): Promise<GitHubRelease[]> {
  return getReleases(COMPANY.GITHUB_AGENT_REPO);
}

export function assetUrl(
  release: GitHubRelease | undefined,
  exactName: string,
  fallbackPattern?: RegExp,
) {
  const exact = release?.assets.find((asset) => asset.name === exactName);
  if (exact) return exact.browser_download_url;
  return release?.assets.find((asset) => fallbackPattern?.test(asset.name))
    ?.browser_download_url;
}

function build(
  label: string,
  href: string | undefined,
  channel: DownloadBuild["channel"],
): DownloadBuild | null {
  return href ? { label, href, channel } : null;
}

function available(builds: Array<DownloadBuild | null>): DownloadBuild[] {
  return builds.filter((item): item is DownloadBuild => item !== null);
}

export function findStableRelease(releases: GitHubRelease[]) {
  return releases.find((release) => !release.draft && !release.prerelease);
}

export function findNightlyRelease(releases: GitHubRelease[]) {
  return releases.find(
    (release) =>
      !release.draft &&
      release.prerelease &&
      release.tag_name.includes("-nightly."),
  );
}

/** Per-platform Fabric binaries from GitHub Releases, plus the install scripts. */
export function getPlatformDownloads(
  releases: GitHubRelease[],
): PlatformDownloads[] {
  const stable = findStableRelease(releases);

  return [
    {
      name: "macOS",
      builds: available([
        build(
          "Mac (Apple silicon)",
          assetUrl(stable, "houdry-darwin-arm64") ?? DOWNLOAD_URL_MAC_ARM64,
          "Stable",
        ),
        build(
          "Mac (Intel)",
          assetUrl(stable, "houdry-darwin-amd64") ?? DOWNLOAD_URL_MAC_X64,
          "Stable",
        ),
      ]),
    },
    {
      name: "Windows",
      builds: available([
        build(
          "Windows (x64)",
          assetUrl(stable, "houdry-windows-amd64.exe") ?? DOWNLOAD_URL_WINDOWS,
          "Stable",
        ),
        build(
          "Windows (arm64)",
          assetUrl(stable, "houdry-windows-arm64.exe"),
          "Stable",
        ),
        build("install.ps1", assetUrl(stable, "install.ps1") ?? FABRIC_INSTALL_PS1, "Stable"),
      ]),
    },
    {
      name: "Linux",
      builds: available([
        build(
          "Linux (x64)",
          assetUrl(stable, "houdry-linux-amd64") ?? DOWNLOAD_URL_LINUX,
          "Stable",
        ),
        build("Linux (arm64)", assetUrl(stable, "houdry-linux-arm64"), "Stable"),
        build("install.sh", assetUrl(stable, "install.sh") ?? FABRIC_INSTALL_SH, "Stable"),
      ]),
    },
  ];
}

export function getAgentWindowsDownload(releases: GitHubRelease[]): string | undefined {
  const stable = findStableRelease(releases);
  return assetUrl(stable, "", /^Houdry-Agent-.*-win-x64\.exe$/i);
}
