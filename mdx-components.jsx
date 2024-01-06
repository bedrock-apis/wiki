import styles from "./mdx-components.module.css"

function H1({ children }) {
    return <>
        <h1 className={styles.h1}>
            {children}
        </h1>
    </>
}


export function useMDXComponents(components) {
    return { h1: H1, ...components }
}