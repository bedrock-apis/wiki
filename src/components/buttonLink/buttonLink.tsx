import Link from "next/link";

export default function ButtonLink({ children, link }: { children: string, link?: string }) {
    return <Link href={link ?? "."}>
        <button className="h-9" >{children}</button>
    </Link>
}