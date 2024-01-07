import Link from "next/link";

export default function ButtonLink({ name, link }: { name: string, link: string }) {
    return <Link href={link}>
        <button>{name}</button>
    </Link>
}