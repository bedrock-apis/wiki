import { GetFilesTree } from "@/app/features/functions";

export const generateStaticParams = ()=>{
    const slugs = [];
    for (const filePath of GetFilesTree("./wiki")) {
        const [base, wiki, ...ss] = filePath.split("/");
        if(ss.at(-1)?.endsWith(".md")){
            ss[ss.length - 1] = ss[ss.length - 1].substring(0, ss.length - 3);
            if(ss[ss.length - 1] === "__here__") ss.pop();
            slugs.push({slug: ss});
        }
    }
    return slugs;
}
export default function ArticlaPage(){
    return <>
        <h1></h1>
    </>
}