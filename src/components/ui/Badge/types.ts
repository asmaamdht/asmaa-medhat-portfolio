import type { HTMLAttributes, ReactNode } from "react";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    label: string;
    icon?: ReactNode;
};