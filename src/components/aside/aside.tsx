"use client";
import ButtonLink from "@/components/buttonLink/buttonLink";
import { isMobile } from "@/hooks/useSize";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function SideBar(params: { options: {tags:{[k: string]: {title: string, color?: string}}, menus:{[k: string]: {title:string, link: string}[]}}}) {
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
        arrayComponents.push(
            <div key={"_" + i++} className="rounded-md shadow-md px-2 my-1 text-xl" style={{"backgroundColor":color??"#ff0000"}}>
                {title}
            </div>
        );
        for (const {title, link} of params.options.menus[tag]) arrayComponents.push(
                <motion.div key={"__" + i++} variants={item} className="py-0.5 px-2 mx-1 rounded-md cursor-pointer hover:bg-primary">
                    <Link href={"/" + link}>
                        <button className="w-full text-left text-xl">{title}</button>
                    </Link>
                </motion.div>
            )
    }

    return <aside className="shadow-md">
        <button className="fixed top-2 left-2 z-40" onClick={() => setExpanded(!expanded)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </button>
        <AnimatePresence>
            {expanded && <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-60 top-10 h-full min-w-60 float-left">
                <div className="fixed w-60 top-14 h-full bg-secondary border border-highlight min-w-60 float-left">
                    <motion.div variants={container} initial="hidden" animate="visible" className="flex my-4 flex-col px-3">
                        {
                            arrayComponents
                        }
                    </motion.div>
                </div>
            </motion.aside>}
        </AnimatePresence>
    </aside>;
}