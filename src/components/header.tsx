import ButtonLink from "./buttonLink/buttonLink"

export default function Header() {
    return <header className="w-full z-40">
        <div className="fixed bg-secondary border border-highlight h-[3.5rem] w-full shadow-xl">
            <div className="m-3 h-min w-full flex">
                <ButtonLink link="/" className="ml-[3rem] float-left text-2xl w-min font-bold text-nowrap">
                    Scripting Wiki
                </ButtonLink>
                <div className="w-full mr-[3%]">
                    <HyperLink link="https://github.com/bedrock-apis/wiki" content="Bedrock Wiki"/>
                    <HyperLink link="https://github.com/bedrock-apis/wiki" content="Github"/>
                    <HyperLink link="https://discord.gg/38M6A2RvKk" content="Discord"/>
                </div>
            </div>
        </div>
    </header>
}
export function HyperLink(data: {children?: any, link?: string, content?: string}){
    return <a href={data.link} target="_blank" className="rounded-md px-2 float-right hover:bg-slate-600 hover:bg-opacity-20 text-xl opacity-80 hover:opacity-95 inline text-nowrap">
        {data.children??data.content}
    </a>
}