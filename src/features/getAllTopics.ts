import { readFileSync } from "fs";
import { GetFilesTree, RemoveSuffix } from "./functions";
import { ComponentType } from "react";

const hasSourcePath = !!process.env.__source_path;
const __path = process.env.__source_path;
console.log("\nBuild path used:",__path,"\n");
export async function LoadThem() {
    const metadatas: { [k: string]: {[k: string]: any} } = {};
    const obj: { [k: string]: ComponentType<{}> } = {};
    for (const ss of GetWikiPaths()) {
        const j = ss.join("/");
        let m;
        if(hasSourcePath) m = await import("../" + __path +"/"+ j);
        else m = await import("../../wiki/" + j)
        const k = RemoveSuffix(j);
        obj[k] = m.default;
        metadatas[k] = m.metadata;
    }
    return [obj, metadatas] as [typeof obj, typeof metadatas];
}
export function* GetWikiPaths() {
    for (const filePath of GetFilesTree(hasSourcePath?"./src/" + process.env.__source_path:"./wiki")) {
        const ss = filePath.split("/").slice(hasSourcePath?3:2);
        const fileName = ss[ss.length - 1];
        if ((!fileName?.startsWith("__")) && (fileName?.endsWith(".md") || fileName?.endsWith(".mdx"))) {
            console.log(ss);
            yield ss;
        }
    }
}


export const meta_informations: {
    "blog_kind": {[k: string]: {
        color: string, 
        display: string
    }},
    "tags": {[k: string]: {
        color: string,
        display: string,
        "text-color"?: string
    }}
    "code-languages": {[k: string]: string}
} = JSON.parse(readFileSync(hasSourcePath?"./src/" + __path +"/metadata.json":"./wiki/metadata.json").toString());