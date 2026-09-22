import { COMPANY } from "@ao/shared/constants";
import { FAQ_ITEMS } from "@/app/components/FAQSection/constants";
import {
  buildDeveloperResourcesSection,
  buildWhenToUseSection,
  MARKDOWN_HEADERS,
} from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const baseUrl = COMPANY.MARKETING_URL;
  const docsUrl = COMPANY.DOCS_URL;

  const lines: string[] = [
    `# ${COMPANY.NAME}, private GPU fabric and desktop agent`,
    "",
    `${COMPANY.NAME} Fabric turns GPU workstations into a private cluster. ${COMPANY.NAME} Agent is the desktop app on each desk. Open-weight models stay on the plant LAN. There is no cloud LLM API in the path.`,
    "",
    "## Features",
    "",
    "- **Houdry Fabric**: install from GitHub Releases on each GPU workstation, then `houdry serve` and `houdry gpu register`.",
    "- **Houdry Agent**: desktop app for operators; points at `https://<fabric-host>:8080/v1`.",
    "- **On-prem routing**: `model=auto` picks the best (model, node) pair on the LAN.",
    "- **Air-gapped work**: reports, drawings, and code never leave the premises.",
    "",
    "## Get started",
    "",
    `- [Download](${baseUrl}/download/)`,
    `- [Documentation](${docsUrl}/)`,
    `- [GitHub](${COMPANY.GITHUB_URL})`,
    `- [Blog](${baseUrl}/blog/)`,
    `- [Changelog](${baseUrl}/changelog/)`,
    "",
    ...buildWhenToUseSection(),
    "",
    ...buildDeveloperResourcesSection(),
    "",
    "## FAQ",
    "",
    ...FAQ_ITEMS.flatMap((item) => [
      `### ${item.question}`,
      "",
      item.answer,
      "",
    ]),
    "## Contact",
    "",
    `- Support: ${COMPANY.MAIL_TO.replace("mailto:", "")}`,
    `- Founders: ${COMPANY.FOUNDERS_EMAIL}`,
    `- [Discord](${COMPANY.DISCORD_URL})`,
    `- [X](${COMPANY.X_URL})`,
    "",
  ];

  return new Response(lines.join("\n"), { headers: MARKDOWN_HEADERS });
}
