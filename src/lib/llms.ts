import { COMPANY } from "@ao/shared/constants";
import { FAQ_ITEMS } from "@/app/components/FAQSection/constants";
import { getDocPage, getDocsNav, type DocsNavItem } from "./docs";

export function stripMdxSyntax(content: string): string {
	return (
		content
			// Remove import statements
			.replace(/^import\s+.*$/gm, "")
			// Remove JSX component tags (e.g. <Video ... />, <Component>...</Component>)
			.replace(/<[A-Z]\w*\b[^>]*\/>/g, "")
			.replace(/<[A-Z]\w*\b[^>]*>[\s\S]*?<\/[A-Z]\w*>/g, "")
			// Clean up excessive blank lines
			.replace(/\n{3,}/g, "\n\n")
			.trim()
	);
}

export function buildLlmsHeader(): string[] {
	return [
		`# ${COMPANY.NAME}`,
		"",
		"> Private GPU fabric for on-prem open-weight models, plus Houdry Agent, the desktop app that talks to that fabric over the plant LAN.",
		"",
		`${COMPANY.NAME} Fabric installs from GitHub Releases onto GPU workstations (\`houdry serve\`, \`houdry gpu register\`). ${COMPANY.NAME} Agent is the end-user desktop application. Work stays on your network. There is no cloud LLM API in the path.`,
	];
}

export function buildWhenToUseSection(
	{ referenceDocumentationSection = false }: {
		referenceDocumentationSection?: boolean;
	} = {},
): string[] {
	const documentationDirection = referenceDocumentationSection
		? "To learn the product, use the Documentation section below."
		: `To learn the product, start with the docs index at ${COMPANY.DOCS_URL}.`;

	return [
		"## When to use Houdry",
		"",
		"Reach for Houdry when you need to:",
		"",
		"- Run open-weight models on GPU workstations you already own, without sending documents off premises.",
		"- Join those workstations into one fabric (`houdry serve` + `houdry gpu register`) that routes each request to the right (model, node) pair.",
		"- Give operators Houdry Agent on the desk, pointed at `https://<fabric-host>:8080/v1`.",
		"- Keep reports, drawings, and code on the plant LAN.",
		"",
		`Houdry Fabric is the GPU control plane. Houdry Agent is the desktop client. ${documentationDirection}`,
	];
}

export function buildDeveloperResourcesSection(
	{ includeDocumentationLinks = true }: {
		includeDocumentationLinks?: boolean;
	} = {},
): string[] {
	const baseUrl = COMPANY.MARKETING_URL;
	const docsUrl = COMPANY.DOCS_URL;
	return [
		"## Developer resources",
		"",
		...(includeDocumentationLinks
			? [
					`- [Documentation](${docsUrl}/): product and workflow documentation`,
					`- [Quickstart](${docsUrl}/quickstart/): install and first-run guide`,
					`- [CLI](${docsUrl}/cli/): \`houdry\` fabric commands`,
				]
			: []),
		`- [Agent instructions](${baseUrl}/agents.md): when and how AI agents should use Houdry`,
		`- [Blog llms.txt](${baseUrl}/blog/llms.txt): scoped index of blog posts`,
		`- [GitHub](${COMPANY.GITHUB_URL}): source code and releases`,
	];
}

function docSlugFromUrl(url: string): string[] {
	const path = url.replace(/^\/docs\/?/, "");
	return path ? path.split("/") : [];
}

function renderDocumentationItem(item: DocsNavItem, depth: number): string[] {
	const indent = "  ".repeat(depth);
	if (item.separator) return [`${indent}- **${item.title}**`];

	const page = item.url ? getDocPage(docSlugFromUrl(item.url)) : undefined;
	const href = item.url
		? `${COMPANY.MARKETING_URL}${item.url.replace(/\/+$/, "")}/index.html.md`
		: undefined;
	const link = href ? `[${item.title}](${href})` : item.title;
	const label = item.items && item.items.length > 0 ? `**${link}**` : link;
	const description = page?.description ? `: ${page.description}` : "";
	const lines = [`${indent}- ${label}${description}`];

	for (const child of item.items ?? []) {
		lines.push(...renderDocumentationItem(child, depth + 1));
	}

	return lines;
}

export function buildDocumentationSection(): string[] {
	const overview = getDocPage([]);
	const overviewDescription = overview?.description
		? `: ${overview.description}`
		: "";
	const lines = [
		"## Documentation",
		"",
		`- **[Documentation overview](${COMPANY.DOCS_URL}/index.html.md)**${overviewDescription}`,
	];

	for (const item of getDocsNav()) {
		if (item.separator) {
			if (lines[lines.length - 1] !== "") lines.push("");
			lines.push(`### ${item.title}`, "");
			continue;
		}
		lines.push(...renderDocumentationItem(item, 0));
	}

	return lines;
}

export function buildLlmsTxt(): string {
	const baseUrl = COMPANY.MARKETING_URL;

	const lines: string[] = [
		...buildLlmsHeader(),
		"",
		...buildWhenToUseSection({ referenceDocumentationSection: true }),
		"",
		...buildDeveloperResourcesSection({ includeDocumentationLinks: false }),
		`- [Full LLM context](${baseUrl}/llms-full.txt): combined Houdry overview, documentation index, and FAQ`,
		"",
		...buildDocumentationSection(),
		"",
		"## Comparisons",
		"",
		"Houdry is Fabric plus Agent. It is not a coding-agent worktree product. Ignore leftover `/compare/ao-vs-*` URLs if they still exist on this host.",
		"",
		"## FAQ",
		"",
		...FAQ_ITEMS.flatMap((item) => [
			`### ${item.question}`,
			"",
			item.answer,
			"",
		]),
	];

	return lines.join("\n");
}

export const MARKDOWN_HEADERS = {
	"Content-Type": "text/markdown; charset=utf-8",
	"Cache-Control": "public, max-age=3600, s-maxage=3600",
	Vary: "Accept",
} as const;
