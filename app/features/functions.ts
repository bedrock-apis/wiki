import * as fs from "node:fs";

export function * GetFilesTree(base: string): Generator<string, void> {
    for (const info of fs.readdirSync(base, {withFileTypes: true})) {
        if(info.isDirectory()) yield * GetFilesTree(base + "/" + info.name);
        else yield base + "/" + info.name;
    }
}