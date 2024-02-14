"use client";
import ButtonLink from "./buttonLink/buttonLink"

export default function Header() {
    return <header className="w-full z-40">
        <div className="fixed bg-secondary border border-l-0 border-t-0 border-b-1 border-highlight h-[3.5rem] w-full shadow-xl">
            <div className="m-3 h-min w-full flex flex-nowrap">
                <button className="-my-1 px-1 rounded-md fixed hover:bg-slate-100 hover:bg-opacity-[0.02]" onClick={()=>(window as any).__sidebar("Test")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                </button>
                <ButtonLink link="/" className="float-left text-2xl ml-16 w-min font-bold text-nowrap">
                    Scripting Wiki
                </ButtonLink>
                <div className="w-full mr-[3%]">
                    <HyperLink link="https://wiki.bedrock.dev/" content="Bedrock Wiki" smallHidden={true}/>
                    <HyperLink link="https://github.com/bedrock-apis/wiki" content="Github" smallHidden={true}/>
                    <HyperLink link="https://discord.gg/38M6A2RvKk" content="Discord"/>
                </div>
            </div> 
        </div>
    </header>
}
export function HyperLink(data: {children?: any, link?: string, content?: string, smallHidden?: boolean}){
    return <a href={data.link} target="_blank" className={"rounded-md float-right hover:bg-slate-600 hover:bg-opacity-20 text-xl opacity-80 hover:opacity-95 inline text-nowrap" + (data.smallHidden?" px-0 sm:px-2 invisible sm:visible w-0 sm:w-auto":" px-2")}>
        {data.children??data.content}
    </a>
}