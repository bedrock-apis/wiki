import fs from "node:fs";
import { GetFilesTree } from "@/features/functions"
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import { Metadata } from "next";

type StaticSlugParams = { params: Awaited<ReturnType<typeof generateStaticParams>>[number] }

const components = {
    h1: ({ children }) => <h1 className="underline font-bold text-4xl mb-5">{children}</h1>,
    h2: ({ children }) => <><h2 className="text-3xl font-semibold">{children}</h2><div className="w-full h-1 bg-slate-500 mb-5" /></>,

} satisfies MDXComponents

export async function generateStaticParams() {
    const slugs = [];
    for (const filePath of GetFilesTree("./wiki")) {
        const [base, wiki, ...ss] = filePath.split("/");
        if (ss[ss.length - 1]?.endsWith(".mdx")) {
            ss[ss.length - 1] = ss[ss.length - 1].substring(0, ss[ss.length - 1].length - 4);
            slugs.push({ slug: [...ss] });
        }
    }
    return slugs;
}
export default async function GetMarkdownPageView({ params }: StaticSlugParams) {
    const data = fs.readFileSync("./wiki/" + params.slug.join("/") + ".mdx").toString();
    return <MDXRemote source={data} components={components} />
}

export async function generateMetadata({ params }: StaticSlugParams): Promise<Metadata> {
    return {
        title: `${params.slug.map(x => x.charAt(0).toUpperCase() + x.substring(1)).join("->")} on Bedrock API Wiki`
    }
}