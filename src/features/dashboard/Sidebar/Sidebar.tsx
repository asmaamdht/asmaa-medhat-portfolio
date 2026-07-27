import { sidebarItems } from "./sidebar.data";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    return (
        <aside className="w-64 h-full p-4 shadow-glass rounded-xl">
            <div className="mb-6 text-primary font-bold text-lg">
                Devfolio
            </div>

            <nav className="space-y-1">
                {sidebarItems.map((item) => (
                    <SidebarItem key={item.path} {...item} />
                ))}
            </nav>
        </aside>
    );
}