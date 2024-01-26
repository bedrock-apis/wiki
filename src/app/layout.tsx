import Header from "@/components/header/header";
import SideBar from "@/components/aside/aside";
import "../styles/globals.css";
import Footer from "@/components/footer/footer";
import { Metadata } from "next";

export const metadata = {
  title: 'Bedrock API Wiki',
  description: 'A Place To Share Minecraft Bedrock Knowlage ✨',
} satisfies Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Wiki</title>
      </head>
      <body className="h-full bg-primary">
        <div className="w-full h-full flex flex-col">
          <Header />
          <div className="flex">
            <SideBar />
            <div className="w-full">
              <main className="p-5 min-h-[100vh] w-full mt-10 break-all">
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