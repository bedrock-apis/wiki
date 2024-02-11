import type { MDXComponents } from "mdx/types";
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: MHeader,
		code: MCodeBlock,
		...components,
	};
}

export function MHeader({children}: {children?: any}){
	return <div>
		<h1 style={{fontSize: 50}}>{children}</h1>
		<div className="bg-text-primary h-1 opacity-50 mb-5"></div>
	</div>
}
export function MCodeBlock({children}: {children?: any}){
	return (
		<div className="bg-white border p-2">
			<code data-language="js" >{children}</code>
		</div>
	);
}