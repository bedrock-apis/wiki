import Link from "next/link";

export function Tag(data: { children?: any, color?: string, textColor?: string }) {
    return <Link href="/~tags" className="px-1.5 shadow-md mr-1 mb-1 w-min rounded-md inline-block" style={{ backgroundColor: data.color }}>
        <p className="opacity-90 text-nowrap" style={{ color: data.textColor ?? "--text-primary", fontWeight: 700 }}>
            {data.children}
        </p>
    </Link>
}