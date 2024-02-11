import dynamic from "next/dynamic";
import { GetFilesTree } from "./functions";
import { ComponentType } from "react";

export const blogs: {[k: string]: ComponentType<{}>} = {};
for (const [ss, component] of getAll()) blogs[ss.join("/")] = component;
export function* getAll(){
    for (const ss of GetWikiPaths()) {
        if (ss[ss.length - 1]?.endsWith(".mdx")) {
            yield [ss, dynamic(()=>import("../../wiki/" + ss.join("/")))] as [string[], ComponentType];
        }
    }
}
export function * GetWikiPaths(){
    for (const filePath of GetFilesTree("./wiki")) {
        const [base, wiki, ...ss] = filePath.split("/");
        if (ss[ss.length - 1]?.endsWith(".mdx")) {
            yield ss;
        }
    }
}