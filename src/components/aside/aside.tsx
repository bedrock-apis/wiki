"use client";
import ButtonLink from "@/components/buttonLink/buttonLink";
import { isMobile } from "@/hooks/useSize";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function SideBar(params: {menu: [string, string][]}) {
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

    return <div className="shadow-md">
        <button className="fixed top-0 left-2 z-40" onClick={() => setExpanded(!expanded)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </button>
        <AnimatePresence>
            {expanded && <motion.aside initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-60 top-10 h-full min-w-60 float-left">
                <div className="fixed w-60 top-14 h-full bg-secondary border border-highlight min-w-60 float-left">
                    <div className="bg-accent p-2 m-2 rounded-2xl shadow-md">
                        <h1 className="text-center text-slate-50 font-bold text-lg">Some Kind of Title</h1>
                    </div>
                    <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col px-3">
                        {
                            params.menu.map((x, i) => (
                                <motion.div key={i} variants={item} className="py-0.5 rounded-md hover:bg-primary">
                                    <ButtonLink link={"/" + x[1]} className="text-xl m-3">{x[0]}</ButtonLink>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
            </motion.aside>}
        </AnimatePresence>
    </div>;
}