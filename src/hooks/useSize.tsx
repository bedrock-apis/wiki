"use client"
import { useEffect, useState } from "react"

export function useSize(): [innerWidth: number, innerHeight: number] {
    const [innerWindow, setInnerWindow] = useState<[number, number]>([0, 0])

    useEffect(() => {
        function handleResize() {
            setInnerWindow([window.innerWidth, window.innerHeight])
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return innerWindow
}

export function isMobile() {
    return useSize()[0] <= 768 // Mobile Width Constant
}