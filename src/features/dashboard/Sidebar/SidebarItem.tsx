import { NavLink } from "react-router-dom";
import type { SidebarItemsTypes } from "../types/sidebar.types";

type SidebarItemProps = SidebarItemsTypes;


const SidebarItem = ({ label, icon: Icon, path }: SidebarItemProps) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white  hover:bg-purple-600"
                }`
            }
        >
            <Icon size={18} />
            <span className="text-sm">{label}</span>
        </NavLink>
    );
};

export default SidebarItem;