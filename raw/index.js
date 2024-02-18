import fs from "fs";
function* GetFilesTree(base){
    for (const info of fs.readdirSync(base, { withFileTypes: true })) {
        if (info.isDirectory()) yield* GetFilesTree(base + "/" + info.name);
        else yield base + "/" + info.name;
    }
}
const build_folder = process.env.__source_path??"wiki_build";
for (const file of GetFilesTree("wiki")) {
    const [base, ...path] = file.split("/");
    const f = path[path.length - 1];
    console.log("Moving:", file);
    fs.mkdirSync([build_folder, ...path.slice(0,path.length - 1)].join("/"), {recursive:true});
    fs.writeFileSync([build_folder, ...path.slice(0, path.length - 1), f + (f.endsWith(".md")?"x":"")].join("/"), fs.readFileSync(file));
}