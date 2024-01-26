import fs from "node:fs";
import { GetFilesTree } from "@/features/functions"
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

export const generateStaticParams = async () => {
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
export default async function GetMarkdownPageView({ params }: any) {
    const data = fs.readFileSync("./wiki/" + params.slug.join("/") + ".mdx").toString();
    console.warn(data)
    const { content } = await compileMDX({ source: data })
    return <div>
        {content}
    </div>
}