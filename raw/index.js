import fs from "fs";
function* GetFilesTree(base){
    for (const info of fs.readdirSync(base, { withFileTypes: true })) {
        if (info.isDirectory()) yield* GetFilesTree(base + "/" + info.name);
        else yield base + "/" + info.name;
    }
}
const build_folder = process.env.__source_path;
if(!build_folder) throw new ReferenceError("Source path wasn't specified");
for (const file of GetFilesTree("wiki")) {
    const [base, ...path] = file.split("/");
    const f = path[path.length - 1];
    if(file.startsWith(base + "/images")){
        const newPath = [".","public",...path].join("/");
        console.log("[Moving Image]:", file, "->", newPath);
        fs.mkdirSync([".","public", ...path.slice(0,path.length - 1)].join("/"), {recursive:true});
        fs.writeFileSync(newPath, fs.readFileSync(file));
    }else{
        console.log("[Moving Content]:", file, "->", ["src",build_folder, ...path.slice(0, path.length - 1), f + (f.endsWith(".md")?"x":"")].join("/"));
        fs.mkdirSync(["src",build_folder, ...path.slice(0,path.length - 1)].join("/"), {recursive:true});
        fs.writeFileSync(["src",build_folder, ...path.slice(0, path.length - 1), f + (f.endsWith(".md")?"x":"")].join("/"), fs.readFileSync(file));
    }
}