import { readFileSync } from "fs";
import { GetFilesTree, RemoveSuffix } from "./functions";
import { ComponentType } from "react";

const hasSourcePath = !!process.env.__source_path;
const path = hasSourcePath?process.env.__source_path:"../wiki";
console.log("\nBuild path used:",path,"\n");
export async function LoadThem() {
    const metadatas: { [k: string]: {[k: string]: any} } = {};
    const obj: { [k: string]: ComponentType<{}> } = {};
    for (const ss of GetWikiPaths()) {
        const j = ss.join("/");
        const m = await import(`../` + path + "/" + j);
        const k = RemoveSuffix(j);
        obj[k] = m.default;
        metadatas[k] = m.metadata;
    }
    return [obj, metadatas] as [typeof obj, typeof metadatas];
}
export function* GetWikiPaths() {
    for (const filePath of GetFilesTree(hasSourcePath?"./src/" + process.env.__source_path:"wiki")) {
        const ss = filePath.split("/").slice(hasSourcePath?3:2);
        const fileName = ss[ss.length - 1];
        if ((!fileName?.startsWith("__")) && (fileName?.endsWith(".md") || fileName?.endsWith(".mdx"))) {
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
} = JSON.parse(readFileSync(hasSourcePath?"./src/" + path +"/metadata.json":"./wiki/metadata.json").toString());