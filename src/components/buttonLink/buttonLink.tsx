import Link from "next/link";

export default function ButtonLink({ children, link, className }: { children: string, link?: string, className?: string }) {
    return <Link href={link ?? "."} className={className}>
        <button>{children}</button>
    </Link>
}