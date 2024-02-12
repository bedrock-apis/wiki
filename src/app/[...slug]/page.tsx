import { GetFilesTree, RemoveSuffix } from "@/features/functions";
import { LoadThem, GetWikiPaths } from "@/features/getAllTopics";
import { Image } from "@/mdx-components";
import { readFileSync } from "fs";
import { Metadata } from "next";

type StaticSlugParams = { params: Awaited<ReturnType<typeof generateStaticParams>>[number] }
/*
const images: {[k: string]: {fileName: string, slugId: string}} = {};
for (const file of GetFilesTree("./images")){
    const [base, imagesFolder, fileName] = file.split("/");
    images[fileName.split(".")[0]] = {fileName, slugId: fileName.split(".")[0]}
}*/
export async function generateStaticParams() {
    const slugs = [];
    for (const ss of GetWikiPaths()) {
        ss[ss.length - 1] = RemoveSuffix(ss[ss.length - 1]);
        slugs.push({ slug: [...ss] });
    }
    return slugs;
}
export default async function GetMarkdownPageView({ params }: StaticSlugParams) {
    const slg = params.slug;
    const [blogs, metadatas] = await LoadThem();
    const MdxData = blogs[slg.join("/")];
    return (
        <div className="m-[1%]">
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