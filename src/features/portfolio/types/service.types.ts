import type { ServiceIcon } from "../constants/seviceIcons";

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: ServiceIcon;
}