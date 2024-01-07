"use client"
import { ReactElement, useState } from "react"/*
import { MotionProps, Variants, motion } from "framer-motion"
import styles from "./dropdownMenu.module.css"
import arrow from "./arrow.svg"
import Image from "next/image"

export default function DropdownMenu({ children, name }: { children?: React.ReactNode[], name: string }) {
    const [expanded, setExpanded] = useState(false)

    const variants = {
        closed: { y: -16, opacity: 0, display: "none" },
        open: { y: 0, opacity: 1, display: "flex" },

    } satisfies Variants;

    return <div>
        <button className={styles.container} onClick={() => setExpanded(!expanded)}>
            <h3>{name}</h3>
            <motion.div itemID="test" animate={{ rotateZ: expanded ? 0 : 90, marginTop: expanded ? 5 : 0 }}>
                <Image
                    priority
                    src={arrow}
                    alt="Expand"
                    width={30}
                    height={30} />
            </motion.div>
        </button>
        <motion.div itemID="items" variants={variants} animate={expanded ? "open" : "closed"} style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.child}>
                {children}
            </div>
        </motion.div>
    </div>
}*/
export default ({ children, name }: { children?: React.ReactNode[], name: string })=><></> as any;