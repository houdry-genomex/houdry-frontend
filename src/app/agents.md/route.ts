import { COMPANY } from "@ao/shared/constants";
import { buildWhenToUseSection, MARKDOWN_HEADERS } from "@/lib/llms";

export const dynamic = "force-static";

export function GET() {
  const baseUrl = COMPANY.MARKETING_URL;
  const docsUrl = COMPANY.DOCS_URL;

  const lines: string[] = [
    `# ${COMPANY.NAME} for AI agents`,
    "",
    `This page is the machine-readable entry point for AI agents working with ${COMPANY.NAME} (${baseUrl}). Houdry Fabric is the GPU control plane. Houdry Agent is the desktop client.`,
    "",
    ...buildWhenToUseSection(),
    "",
    "## Capabilities",
    "",
    `Inside a Houdry Agent session pointed at the fabric, an agent can:`,
    "",
    "- **Chat** against `POST /v1/chat/completions` on the fabric (`model=auto` or a named model).",
    "- **Route** work onto GPU workstations that have run `houdry gpu register`.",
    "- **Keep data on the LAN**: there is no cloud LLM API in the path.",
    "",
    "## How to operate",
    "",
    "- GPU / ops: `curl -fsSL https://github.com/houdry-genomex/houdry/releases/latest/download/install.sh | sh`",
    "- Then `houdry serve --listen 0.0.0.0:8080` and `houdry gpu register`.",
    "- Desk: install Houdry Agent and point it at `https://<fabric-host>:8080/v1`.",
    "",
    "## Learn more",
    "",
    `- [Docs](${docsUrl}/)`,
    `- [Quickstart](${docsUrl}/quickstart/)`,
    `- [CLI reference](${docsUrl}/cli/)`,
    `- [Download](${baseUrl}/download/)`,
    `- [Site llms.txt](${baseUrl}/llms.txt)`,
    `- [GitHub](${COMPANY.GITHUB_URL})`,
  ];

  return new Response(lines.join("\n"), { headers: MARKDOWN_HEADERS });
}
