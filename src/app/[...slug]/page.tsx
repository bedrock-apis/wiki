import { GetWikiPaths, getAll, blogs } from "@/features/getAllTopics";
import { Metadata } from "next";
import dynamic from "next/dynamic";

type StaticSlugParams = { params: Awaited<ReturnType<typeof generateStaticParams>>[number] }
export async function generateStaticParams() {
    const slugs = [];
    for (const ss of GetWikiPaths()) {
        if (ss[ss.length - 1]?.endsWith(".mdx")) {
            ss[ss.length - 1] = ss[ss.length - 1].substring(0, ss[ss.length - 1].length - 4);
            slugs.push({ slug: [...ss] });
        }
    }
    return slugs;
}
export default async function GetMarkdownPageView({ params }: StaticSlugParams) {
    const slg = params.slug;
    const MdxData = blogs[slg.join("/") + ".mdx"];
	return (
		<div className="mx-auto p-4">
			<article>
				<MdxData />
			</article>
		</div>
	);
}

export async function generateMetadata({ params }: StaticSlugParams): Promise<Metadata> {
    return {
        title: `${params.slug.map(x => x.charAt(0).toUpperCase() + x.substring(1)).join("->")} on Bedrock API Wiki`
    }
}