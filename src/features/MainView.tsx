import { ReactNode } from "react";

export function MainView({children, currentSelection}: {children: ReactNode, currentSelection?: number}){
    return <>
        {children}
    </>
}