import Link from "next/link"
import ButtonLink from "../buttonLink/buttonLink"

export default function Header() {
    return <header className="w-full">
        <div className="fixed bg-secondary border border-highlight h-14 w-full items-center shadow-xl">
            <a href="." className="mx-10 my-2.5 text-2xl w-min inline font-bold text-nowrap float-left align-middle">Scripting Wiki</a>
            <a href="." className="mx-10 my-3 text-xl w-min inline font-bold text-nowrap float-right align-middle">API Types</a>
        </div>
    </header>
}