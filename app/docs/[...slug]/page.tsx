import { glob } from "glob"

export default async function Docs({ params }: { params: Awaited<ReturnType<typeof generateStaticParams>>[number] }) {
    const { slug } = params
    const data = (await import("../../../mdxPages/" + slug + ".mdx")).default() || "404"
    return <>
        {data}
    </>
}

export async function generateStaticParams() {
    const files = await glob("**", { nodir: true, cwd: "./mdxPages" })
    return files.map(x => { return { slug: x.split(".").slice(0, -1).join("").split("\\").join("/") } })
}