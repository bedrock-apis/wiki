import { Tag } from "@/components/Tag";
import { ProfileInfo, RemoveSuffix, UserLike, getProfileInfo } from "@/features/functions";
import { LoadThem, GetWikiPaths, meta_informations } from "@/features/getAllTopics";
import { Metadata } from "next";

type StaticSlugParams = { params: Awaited<ReturnType<typeof generateStaticParams>>[number] }
export async function generateStaticParams() {
    const slugs = [];
    const [blogs, metadatas] = await LoadThem();
    for (const ss of GetWikiPaths()) {
        ss[ss.length - 1] = RemoveSuffix(ss[ss.length - 1]);
        const hasMetadata =  metadatas[ss.join("/")] as any;
        if(hasMetadata) slugs.push({ slug: [...ss] });
    }
    return slugs;
}
export default async function GetMarkdownPageView({ params }: StaticSlugParams) {
    const slg = params.slug;
    const [blogs, metadatas] = await LoadThem();
    const hasMetadata =  metadatas[slg.join("/")] as any;
    const { displayName, author, tags = [] } = metadatas[slg.join("/")] as { displayName: string, tags?: string[], author?: string }
    const info = await getProfileInfo(author ?? "");
    const MdxData = blogs[slg.join("/")];
    const tagDefs = meta_informations.tags;
    return (
        <div className="m-[1%] flex">
            <article className="w-full">
                <div className="flex">
                    <h1 style={{ fontSize: 50 }}>{displayName}</h1>
                    {info ?
                        <div className="self-end mb-3 mr-[5%]">
                            <AuthorInfo>{info}</AuthorInfo>
                        </div>
                        : undefined}
                </div>
                <hr className="border-sub border-t-2 -mt-1 mb-2"></hr>
                <div className="mb-4 flex flex-wrap">
                    {tags.map((e: string, i) => {
                        if (!(e in tagDefs)) return undefined;
                        const { color, display, "text-color": textColor } = tagDefs[e];
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
    const [blogs, metadatas] = await LoadThem();
    const slg = params.slug;
    const { displayName, author, tags = [] } = metadatas[slg.join("/")] as { displayName: string, tags?: string[], author?: string }
    return {
        title: `${displayName}`
    }
}
function AuthorInfo(data: { children: UserLike }) {
    return <a className="flex w-min h-[2.5rem] self-end rounded-xl hover:bg-gray-500 hover:bg-opacity-5 px-2" href={data.children.html_url}>
        <div className="self-center text-xl mr-2 flex flex-nowrap">
            <span className="opacity-80 self-end text-sm mr-1">by </span>
            <p className="sm:visible invisible w-0 sm:w-full">{data.children.name}</p>
        </div>
        <img src={data.children.avatar_url} className="object-contain h-[100%] shadow-xl self-center mr-3 border-slate-300 border-2 rounded-full" />
    </a>
}