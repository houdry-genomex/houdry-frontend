import {
	buildDeveloperResourcesSection,
	buildDocumentationSection,
	buildLlmsHeader,
	buildWhenToUseSection,
} from "@/lib/llms";
import { FAQ_ITEMS } from "../components/FAQSection/constants";


export const dynamic = "force-static";

export async function GET() {
	const sections: string[] = [];

	// Header and guidance sections (same as llms.txt)
	sections.push(
		[
			...buildLlmsHeader(),
			"",
			...buildWhenToUseSection({ referenceDocumentationSection: true }),
			"",
			...buildDeveloperResourcesSection({ includeDocumentationLinks: false }),
			"",
			...buildDocumentationSection(),
		].join("\n"),
	);

	// FAQ section
	sections.push(
		[
			"---",
			"",
			"# FAQ",
			"",
			...FAQ_ITEMS.flatMap((item) => [
				`## ${item.question}`,
				"",
				item.answer,
				"",
			]),
		].join("\n"),
	);

	const content = sections.join("\n\n");

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600, s-maxage=3600",
		},
	});
}
