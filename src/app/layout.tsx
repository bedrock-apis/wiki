import Header from "@/components/header";
import SideBar from "@/components/aside/aside";
import "../styles/globals.css";
import "../styles/codelights.css";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { LoadThem, meta_informations } from "@/features/getAllTopics";
import { readFileSync } from "fs";
import BaseView from "@/components/BaseView";
import { URL } from "url";

export const metadata = {
  title: 'Bedrock API Wiki',
  metadataBase: new URL("https://bedrock-apis.github.io/wiki"),
  other:{
    "color-scheme":"dark light"
  },
  openGraph:{
    siteName: "Bedrock APIs",
    title:"Bedrock APIs Wiki",
    authors: ["conmaster", "dingsel", "test"],
    description: 'A Place To Share Minecraft Bedrock Knowlage ✨'
  }
} satisfies Metadata

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [blogs, metadatas] = await LoadThem();
  const menus = {} as any;
  const options = {tags: meta_informations.blog_kind, menus};
  Object.keys(blogs).filter(e=>metadatas[e]?.displayName).forEach(e=>{
    const {kind="blog", displayName} = metadatas[e]??{};
    const m = menus[kind] = menus[kind]??[];
    m.push({title:displayName, link: e});
  });
  return (
    <html lang="en" className="h-full">
      <head>
      </head>
      <body className="h-full bg-primary">
        <div className="w-full h-full flex flex-col">
          <Header />
          <BaseView sideBarOptions={options}>
            {children}
          </BaseView>
        </div>
      </body>
    </html>
  )
}