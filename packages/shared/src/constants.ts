export const COMPANY = {
  NAME: "Houdry",
  SHORT_NAME: "Houdry",
  MARKETING_URL: "https://houdry.example.com",
  DOCS_URL: "https://houdry.example.com/docs",
  GITHUB_URL: "https://github.com/houdry-genomex/",
  GITHUB_REPO: "houdry-genomex/houdry-agent",
  GITHUB_FABRIC_REPO: "houdry-genomex/houdry",
  GITHUB_AGENT_REPO: "houdry-genomex/houdry-agent",
  GITHUB_FABRIC_URL: "https://github.com/houdry-genomex/houdry",
  GITHUB_AGENT_URL: "https://github.com/houdry-genomex/houdry-agent",
  STATUS_URL: "https://houdry.example.com/status",
  TRUST_URL: "https://houdry.example.com",
  MAIL_TO: "mailto:team@houdry.example.com",
  X_URL: "https://x.com/aoagents",
  YOUTUBE_URL: "https://www.youtube.com/@itrytoohard",
  LINKEDIN_URL: "https://www.linkedin.com/company/agent-orchestrator/",
  DISCORD_URL: "https://discord.com/invite/UZv7JjxbwG",
  FOUNDERS_EMAIL: "team@houdry.example.com",
  REPORT_ISSUE_URL: "https://github.com/houdry-genomex/houdry-agent/issues/new",
  LICENSE: "MIT",
  LICENSE_URL: "https://github.com/houdry-genomex/houdry-agent/blob/main/LICENSE",
} as const;

export const THEME_STORAGE_KEY = "ao-theme";
export const POSTHOG_COOKIE_NAME = "ph_phc_";

export const OPEN_ROLES = [] as { title: string; url: string; location: string }[];

export const PLATFORMS = {
  MACOS: "macos",
  WINDOWS: "windows",
  LINUX: "linux",
} as const;

export const GITHUB_STARS_URL =
  "https://api.github.com/repos/houdry-genomex/houdry";

const FABRIC_LATEST =
  "https://github.com/houdry-genomex/houdry/releases/latest/download";

export const FABRIC_RELEASES_URL =
  "https://github.com/houdry-genomex/houdry/releases/latest";
export const AGENT_RELEASES_URL =
  "https://github.com/houdry-genomex/houdry-agent/releases/latest";

export const FABRIC_INSTALL_SH = `${FABRIC_LATEST}/install.sh`;
export const FABRIC_INSTALL_PS1 = `${FABRIC_LATEST}/install.ps1`;
export const FABRIC_INSTALL_UNIX = `curl -fsSL ${FABRIC_INSTALL_SH} | sh`;
export const FABRIC_INSTALL_WINDOWS = `irm ${FABRIC_INSTALL_PS1} | iex`;
export const AGENT_INSTALL_UNIX =
  "curl -fsSL https://raw.githubusercontent.com/houdry-genomex/houdry-agent/main/scripts/install.sh | bash";

export const DOWNLOAD_URL_MAC_ARM64 = `${FABRIC_LATEST}/houdry-darwin-arm64`;
export const DOWNLOAD_URL_MAC_X64 = `${FABRIC_LATEST}/houdry-darwin-amd64`;
export const DOWNLOAD_URL_WINDOWS = `${FABRIC_LATEST}/houdry-windows-amd64.exe`;
export const DOWNLOAD_URL_LINUX = `${FABRIC_LATEST}/houdry-linux-amd64`;

// AO Mobile. iOS ships as a TestFlight beta — the same link the desktop app's
// Connect Mobile panel opens (frontend/src/renderer/components/settings/
// ConnectMobileGetApp.tsx), so the two must be changed together.
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/t4U3fu2H";

/** Apple's TestFlight app itself — step one, and useless to skip. */
export const TESTFLIGHT_APP_URL = "https://apps.apple.com/app/testflight/id899247664";

/** Public self-join Group that grants eligibility for the Android closed test. */
export const ANDROID_TESTER_GROUP_URL =
  "https://groups.google.com/g/ao-mobile-testers/about";

/** Google Play page where an eligible Group member opts in and installs. */
export const ANDROID_TEST_OPT_IN_URL =
  "https://play.google.com/apps/testing/aoagents.dev";

export const AGENT_HARNESSES = 3;
export const TAGLINE = "Stop mailing data out. Start working air-gapped.";
export const HERO_SUBHEADLINE =
  "Houdry Fabric runs on your GPU workstations. Houdry Agent is the app on each desk. Open-weight models stay on the plant LAN.";
export const HERO_SECONDARY_SUBHEADLINE =
  "Install the fabric from GitHub Releases, register each GPU workstation, then point Houdry Agent at the control plane. Zero external LLM calls.";

export const NAV_ITEMS = [
  { label: "Demo", href: "/#see-it" },
  { label: "Features", href: "/#features" },
  { label: "Changelog", href: "/changelog" },
  { label: "Docs", href: "/docs" },
] as const;
