"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export interface SideBarOptions {
    tags: { [k: string]: { display: string, color?: string } }
    menus: { [k: string]: { title: string, link: string }[] }
}
export default function SideBar(params: { options: SideBarOptions }) {
    //TODO : Fix Re-Rendering Of Component on Resize With Memo
    //const mobile = isMobile()

    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        window.__sidebar = () => setExpanded(!expanded);
    })

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
        if (!(tag in params.options.menus)) continue;
        console.log(params.options.menus);
        const { display: title, color } = params.options.tags[tag];
        const subComponens = [];
        subComponens.push(
            <div key={"_" + i++} className="rounded-md shadow-md relative -ml-3 -mt-2 -mr-1 px-1.5 flex" style={{ "backgroundColor": color ?? "#ff0000", fontSize: 22 }}>
                {/*<svg className="pt-[0.3rem] m-1 h-5 self-center" width="16" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 12,0 6,10" style={{fill:"white"}}/>
                    Sorry, your browser does not support inline SVG.
        </svg>*/}
                {title}
            </div>
        );
        for (const { title, link } of params.options.menus[tag]) if(!link.startsWith("~")) subComponens.push(
            <motion.div key={"__" + i++} variants={item} className="py-0.5 px-2 rounded-md cursor-pointer hover:bg-gray-400 hover:bg-opacity-5">
                <Link href={"/" + link}>
                    <button className="w-full text-left" style={{ fontSize: 18 }}>{title}</button>
                </Link>
            </motion.div>
        )
        arrayComponents.push(
            <div key={"___" + i++} className="ml-3 mt-5" style={{ borderRadius: "0.2rem", backgroundColor: "#00000055" }}>
                {subComponens}
            </div>
        )
    }

    return <>
        <aside className="mt-[3.5rem]">
            <AnimatePresence>
                {expanded &&
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.40 }} exit={{ opacity: 0 }} className="visible sm:hidden bg-black fixed w-[100vw] h-[100vh] z-0" onClick={() => setExpanded(!expanded)} />
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-w-[14rem] max-w-[15rem] h-full float-left">
                            <div className="z-50 fixed h-[calc(100%-50px)] overflow-y-auto border-t-0 border-l-0 border min-w-[14rem] max-w-[15rem] border-highlight bg-[--main] shadow-md float-left">
                                <motion.div variants={container} initial="hidden" animate="visible" className="flex my-1.5 flex-col px-3">
                                    {arrayComponents}
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </aside>
    </>;
}

/*
            <button className="fixed top-2 left-2 z-50" onClick={() => {setExpanded(!expanded); (window as any).__sidebar = console.warn;}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </button>
            */