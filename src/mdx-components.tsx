import exp from "constants";
import { readFileSync } from "fs";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: Headers(50, true),
		h2: Headers(34),
		h3: Headers(28),
		h4: Headers(24),
		h5: Headers(22),
		p: Paragraph,
		a: A,
		li: Li,
		Summary: Summary,
		code: Code,
		img: Image,
		pre: PreCode,
		table: Table,
		blockquote: BlockQuote,
		WhiteSpace: WhiteSpace,
		th: TableTh,
		td: TableTd,
		hr: ({children}: {children?: any})=>(<hr className="border-sub border-t-2 my-1">{children}</hr>),
		...components,
	};
}
let i = 0;
function Headers(fontSize: number, underLine: boolean = false) {
	return ({ children }: { children?: any }) => <div className="my-2">
		<h1  style={{ fontSize }}>{children}</h1>
		{underLine ? <hr className="border-sub -mt-2 border-t-[2.5px] mx-1" /> : undefined}
	</div>
}
function Paragraph({ children }: { children?: any }) {
	return <p className="my-0.5">
		{children}
	</p>
}
function A({ children, href }: { children?: any, href?: string }) {
	return <Link className="text-cyan-500 hover:underline" href={href ?? "/"}>
		{children}
	</Link>
}
function Li({ children, kind }: { children?: any, kind?: string }) { //•▪●○►○●□■
	return <li key={"____" + i++} className="ml-5 pb-2">
		{children}
	</li>
}
export const multilineCodeBlocks = new WeakSet();
export function Code(params: any) {
	if(multilineCodeBlocks.has(params)) 
	return <div>
		{params.children}
	</div>
	else return <code className="bg-black bg-opacity-20 px-1 py-0.5 text-indigo-500 text-sm rounded-[0.2rem]">{params.children}</code>
}
export function PreCode(params: any) {
	multilineCodeBlocks.add(params.children.props);
	return (
		<pre className="border my-1 bg-black bg-opacity-20 border-text-primary rounded-[0.3rem] px-2 py-1">
			{
				params.className in languageToTextMap?
				<>
					<p className="text-xl m-1">{languageToTextMap[params.className]}</p>
					<div className="bg-sub h-[1px] mb-2.5 rounded-sm" />
				</>
				:(params.className?console.warn("Unknown code block: " + params.className) as undefined:undefined)
			}
			<div className="pl-1 pb-2 pr-4 overflow-x-auto">
				{params.children} 
			</div>
		</pre>
	)
}
export function Image(params: any) {
	return <img className="m-3 rounded-sm max-h-[25rem] max-w-full" src={"resources/" + params.src} alt="logo" />
}


export function TableTh(params: any) {
	return <th className="p-0 text-lg bg-black bg-opacity-20 border border-slate-200 border-opacity-20" style={params.style}>
		<div className="px-4">
			{params.children}
		</div>
	</th>
}
export function TableTd(params: any) {
	return <td className="p-0 -m-0.5  border border-slate-200 border-opacity-20" style={params.style}>
		<div className="px-2">
			{params.children}
		</div>
	</td>
}
export function Table(params: any) {
	return <div className=" bg-slate-600 bg-opacity-10 border border-slate-400 border-opacity-50 rounded-[0.2rem] inline-block mb-2">
		<table className="">
			{params.children}
		</table>
	</div>
}
export function BlockQuote(params: any){
	return <div className="pl-3 my-1 pr-2 py-0.5 border-l-[0.35rem] border-gray-400 border-opacity-40 bg-black bg-opacity-20 rounded-[0.1rem]">
		{params.children}
	</div>
}
const languageToTextMap = JSON.parse(readFileSync("./wiki/language-maps.json").toString()) as { [key: string]: any }


////////////////////// Custom elements

export function WhiteSpace(params: any) {
	return <div className="h-5"></div>
}
export function Summary({ children, color }: { children?: any, color?: string }) {
	return <div className="border bg-black bg-opacity-20 rounded-sm px-2 py-1">
		{children}
	</div>
}