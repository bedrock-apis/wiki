import Header from "@/components/header/header";
import SideBar from "@/components/aside/aside";
import "../styles/globals.css";
import "../styles/codelights.css";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";
import { LoadThem } from "@/features/getAllTopics";
import { readFileSync } from "fs";

export const metadata = {
  title: 'Bedrock API Wiki',
  description: 'A Place To Share Minecraft Bedrock Knowlage ✨',
} satisfies Metadata

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [blogs, metadatas] = await LoadThem();
  const menus = {} as any;
  const options = {tags: JSON.parse(readFileSync("./wiki/tags_definition.json").toString()), menus};
  Object.keys(blogs).filter(e=>metadatas[e]?.displayName).forEach(e=>{
    const {tag="dev", displayName} = metadatas[e]??{};
    const m = menus[tag] = menus[tag]??[];
    m.push({title:displayName, link: e});
  });
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Wiki</title>
      </head>
      <body className="h-full bg-primary">
        <div className="w-full h-full flex flex-col">
          <Header />
          <div className="flex">
            <SideBar options={options}/>
            <div className="w-full">
              <main className="min-h-[calc(100vh-8.5rem)] p-[calc(1%+0.5rem)] w-full mt-[3.5rem] break-all">
                {children}
              </main>
            <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}