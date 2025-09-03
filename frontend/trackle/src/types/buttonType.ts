import type { ReactNode } from "react";

export interface ButtonProps {
    cb: () => void;
    children: ReactNode | string;
    variant: 'primary' | 'secondary';
    customStyle?:string;
}