import { glob } from "glob"

export default async function About() {
    //const { slug } = params;
    //onsole.warn(slug.join("/"));
    //const data = (await import("../../../mdxPages/" + decodeURIComponent(slug.join("/")) + ".mdx")).default() || "404"
    return <html>
        <h1>Test</h1>
    </html>;
}
/*
export async function generateStaticParams() {
    const files = await glob("**", { nodir: true, cwd: "./mdxPages" })
    return files.map(x => {
        return { slug: x.split(".").slice(0, -1).join("").split("\\") }; 
    });
}*/