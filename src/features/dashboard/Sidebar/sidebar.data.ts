import {
    LayoutDashboard,
    FolderKanban,
    Sparkles,
    Briefcase,
    User,
    Mail,
} from "lucide-react";
import type { SidebarItemsTypes } from "../types/sidebar.types";

export const sidebarItems: SidebarItemsTypes[] = [
    {
        label: "Overview",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        label: "Projects",
        icon: FolderKanban,
        path: "/dashboard/projects",
    },
    {
        label: "Skills",
        icon: Sparkles,
        path: "/dashboard/skills",
    },
    {
        label: "Experience",
        icon: Briefcase,
        path: "/dashboard/experience",
    },
    {
        label: "About",
        icon: User,
        path: "/dashboard/about",
    },
    {
        label: "Contact",
        icon: Mail,
        path: "/dashboard/contact",
    },
];