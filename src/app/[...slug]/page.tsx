import fs from "node:fs";
import { MainView } from "@/features/MainView";
import { GetFilesTree } from "@/features/functions"
import Markdown from "markdown-to-jsx";

export const generateStaticParams = ()=>{
    const slugs = [];
    for (const filePath of GetFilesTree("./wiki")) {
        const [base, wiki, ...ss] = filePath.split("/");
        if(ss[ss.length - 1]?.endsWith(".md")){
            ss[ss.length - 1] = ss[ss.length - 1].substring(0, ss[ss.length - 1].length - 3);
            slugs.push({slug: [...ss]});
        }
    }
    return slugs;
}
export default function GetMarkdownPageView({params}: any){
    const data = fs.readFileSync("./wiki/" + params.slug.join("/") + ".md");
    return <MainView>
        <Markdown>
            {data.toString()}
        </Markdown>
    </MainView>
}