import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	const p = {
		h1: Headers(50, true),
		h2: Headers(34),
		h3: Headers(28),
		h4: Headers(24),
		h5: Headers(22),
		p: Paragraph,
		a: A,
		li: Li,
		ul: Ul,
		Summary: Summary,
		code: Code,
		img: Image,
		pre: PreCode,
		...components,
	};
	return p;
}
let i = 0;
function Headers(fontSize: number, underLine: boolean = false) {
	return ({ children }: { children?: any }) => <div>
		<h1 style={{ fontSize }}>{children}</h1>
		{underLine ? <div className="bg-text-primary h-1 opacity-50 mb-5" /> : undefined}
	</div>
}
function Paragraph({ children }: { children?: any }) {
	return <p>
		{children}
	</p>
}
function A({ children, href }: { children?: any, href?: string }) {
	return <Link className="text-cyan-500 hover:underline" href={href ?? "/"}>
		{children}
	</Link>
}
function Li({ children, kind }: { children?: any, kind?: string }) { //•▪●○►○●□■
	return <li key={"____" + i++}>
		<strong className="text-xl">{kind ?? "•"}</strong> {children}
	</li>
}
function Ul(params: any) {
	//console.log(params);
	return <ul className="px-4">
		{params.children.map((e: any) => typeof e.type === "function" ? (e.type({ children: e.props.children, kind: "-" })) : e)}
	</ul>
}
export function Summary({ children, color }: { children?: any, color?: string }) {
	return <div className="border bg-black bg-opacity-20 rounded-sm px-2 py-1">
		{children}
	</div>
}
export function Code(params: any) {
	return <code className="bg-opacity-0">
		{params.children}
	</code>
}
export function PreCode(params: any) {
	console.warn(params);

	return (
		<pre className="border m-1 bg-black bg-opacity-20 border-text-primary rounded-[0.3rem] px-2 py-1 text-gray-400 border-opacity-0" style={{ border: "1px solid rgba(150, 160, 170, 0.2)" }}>
			{languageToTextMap[params.className] || params.className}
			<div className="bg-text-primary h-1 opacity-50"></div>
			{params.children}
		</pre>
	)
}
export function Image(params: any) {
	return <img className="m-3 rounded-sm max-h-[25rem] max-w-full" src={"resources/" + params.src} alt="logo" />
}

const languageToTextMap = {
	"language-js": "JavaScript",
	"language-json": "JSON"
} as { [key: string]: any }