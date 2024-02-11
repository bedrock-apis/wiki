import type { MDXComponents } from "mdx/types";
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: MHeader,
		code: MCodeBlock,
		...components,
	};
}

export function MHeader({children}: {children?: any}){
	return <h1 className="text-4xl">{children}</h1>;
}
export function MCodeBlock({children}: {children?: any}){
	return (
		<div className="bg-white border p-2">
			<code data-language="js" >{children}</code>
		</div>
	);
}