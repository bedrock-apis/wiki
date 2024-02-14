import { RemoveSuffix } from "@/features/functions";
import { LoadThem, GetWikiPaths, meta_informations } from "@/features/getAllTopics";
import { Metadata } from "next";

type StaticSlugParams = { params: Awaited<ReturnType<typeof generateStaticParams>>[number] }
const meta = meta_informations;
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
    const {displayName, tags = []} = metadatas[slg.join("/")] as {displayName: string, tags?: string[]}
    const MdxData = blogs[slg.join("/")];
    const tagDefs = meta_informations.tags;
    return (
        <div className="m-[1%] flex">
            <article className="w-full">
                <h1 style={{fontSize: 50}}>{displayName}</h1>
                <hr className="border-sub border-t-2 -mt-2 mb-1"></hr>
                <div className="mb-3 flex flex-wrap">
                    {tags.map((e: string,i)=>{
                        if(!(e in tagDefs)) return undefined;
                        const {color, display, "text-color": textColor} = tagDefs[e];
                        return <Tag key={i} color={color} textColor={textColor}>{display}</Tag>
                    })}
                </div>
                <MdxData />
            </article>
            {/* <div className="border-opacity-20 my-10 border-gray-400 border-l-2 ml-[2%] float-right min-w-40 max-w-60 w-[40%]" style={{visibility:isMobile()?"hidden":"visible"}}></div> */}
        </div>
    );
}

export async function generateMetadata({ params }: StaticSlugParams): Promise<Metadata> {
    return {
        title: `${params.slug.map(x => x.charAt(0).toUpperCase() + x.substring(1)).join("->")} on Bedrock API Wiki`
    }
}
export function Tag(data: {children?: any, color?: string, textColor?: string}){
    return <div className="px-1.5 shadow-md mr-1.5 mb-1 rounded-md"  style={{backgroundColor: data.color}}>
        <p className="opacity-90" style={{color: data.textColor??"--text-primary", fontWeight:700}}>
            {data.children}
        </p>
    </div>
}