export default function Footer() {
    return <footer className="w-full h-20 p-2 text-[1.1rem] bg-[--main] border-t-[1px] border-highlight text-center">
        <a href="https://discord.gg/38M6A2RvKk" className="text-blue-400 hover:underline mx-2">Discord Community</a>
        {"|"}
        <a href="/wiki/~privacy-policy" className="text-blue-400 hover:underline mx-2">Privacy & Policy</a>
        {"|"}
        <a href="https://github.com/bedrock-apis/wiki" target="_blank" className="text-blue-400 hover:underline mx-2">edit on Github</a>
        <p>Not affiliated with Mojang</p>
    </footer>
}