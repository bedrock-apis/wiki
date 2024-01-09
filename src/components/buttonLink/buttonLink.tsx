import Link from "next/link";

export default function ButtonLink({ children, link }: { children: string, link?: string }) {
    return <Link href={link??"."}>
        <button style={{borderRadius: 5, height: 35, marginBottom: 2, borderSpacing:2}}>{children}</button>
    </Link>
}