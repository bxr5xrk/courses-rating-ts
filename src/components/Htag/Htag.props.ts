import { ReactNode } from "react";

export interface HtagProp {
    tag: 'h1' | 'h2' | 'h3',
    children: ReactNode
}
