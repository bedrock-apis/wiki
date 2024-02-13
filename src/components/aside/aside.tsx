"use client";
import ButtonLink from "@/components/buttonLink/buttonLink";
import { isMobile } from "@/hooks/useSize";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export interface SideBarOptions {
    tags: { [k: string]: { title: string, color?: string } }
    menus:  {[k: string]: { title:string, link: string }[]}
}
export default function SideBar(params: { options: SideBarOptions}) {
    //TODO : Fix Re-Rendering Of Component on Resize With Memo
    //const mobile = isMobile()

    const [expanded, setExpanded] = useState(true)

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    } satisfies Variants;

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    } satisfies Variants;



    const arrayComponents = [];
    let i = 0;
    for (const tag of Object.keys(params.options.tags)) {
        if(!(tag in params.options.menus)) continue;
        const { title, color } = params.options.tags[tag];
        const subComponens = [];
        subComponens.push(
            <div key={"_" + i++} className="rounded-md shadow-md relative -ml-3 -mt-2 -mr-1 px-1.5" style={{"backgroundColor":color??"#ff0000",fontSize:22}}>
                {title}
            </div>
        );
        for (const {title, link} of params.options.menus[tag]) subComponens.push(
                <motion.div key={"__" + i++} variants={item} className="py-0.5 px-2 rounded-md cursor-pointer hover:bg-gray-400 hover:bg-opacity-5">
                    <Link href={"/" + link}>
                        <button className="w-full text-left" style={{fontSize: 18}}>{title}</button>
                    </Link>
                </motion.div>
            )
        arrayComponents.push(
            <div key={"___" + i++} className="ml-3 mt-5" style={{borderRadius: "0.2rem",backgroundColor:"#00000055"}}>
                {subComponens}
            </div>
        )
    }

    return <aside className="shadow-md">
        <button className="fixed top-2 left-2 z-40" onClick={() => setExpanded(!expanded)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </button>
        <AnimatePresence>
            {expanded && 
                <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-w-[14rem] max-w-[15rem] top-10 h-full float-left">
                    <div className="fixed top-14 h-[calc(100%-50px)] overflow-y-auto border-t-0 border min-w-[14rem] max-w-[15rem] border-highlight bg-secondary float-left">
                        <motion.div variants={container} initial="hidden" animate="visible" className="flex my-1.5 flex-col px-3">
                            {
                                arrayComponents
                            }
                        </motion.div>
                    </div>
                </motion.aside>
            }
        </AnimatePresence>
    </aside>;
}