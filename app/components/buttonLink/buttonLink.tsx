export default function ButtonLink({ name, link }: { name: string, link: string }) {
    return <a href={link}>
        <button>{name}</button>
    </a>
}