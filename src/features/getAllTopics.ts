import { readFileSync } from "fs";
import { GetFilesTree, RemoveSuffix } from "./functions";
import { ComponentType } from "react";

export async function LoadThem() {
    const metadatas: { [k: string]: {[k: string]: any} } = {};
    const obj: { [k: string]: ComponentType<{}> } = {};
    for (const ss of GetWikiPaths()) {
        const j = ss.join("/");
        const m = await import("../../wiki/" + j);
        const k = RemoveSuffix(j);
        obj[k] = m.default;
        metadatas[k] = m.metadata;
    }
    return [obj, metadatas] as [typeof obj, typeof metadatas];
}
export function* GetWikiPaths() {
    for (const filePath of GetFilesTree("./wiki")) {
        const [base, wiki, ...ss] = filePath.split("/");
        const fileName = ss[ss.length - 1];
        if ((!fileName?.startsWith("__")) && (fileName?.endsWith(".md") || fileName?.endsWith(".mdx"))) {
            yield ss;
        }
    }
}


export const meta_informations: {
    "blog_kind": {[k: string]: {color: string, display: string}},
    "tags": {[k: string]: {color: string, display: string}}
    "code-languages": {[k: string]: string}
} = JSON.parse(readFileSync("./wiki/metadata.json").toString());