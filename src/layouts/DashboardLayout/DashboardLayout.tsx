import { Outlet } from "react-router-dom";
import Sidebar from "../../features/dashboard/Sidebar/Sidebar";


export default function DashboardLayout() {
    return (
        <div className="flex h-screen p-4 overflow-hidden lg:bg-[#F8F9FA] ">

            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">

                <main className="max-w-8xl w-full mx-auto flex-1 flex flex-col px-4">
                    <Outlet />
                </main>

            </div>
        </div>
    );
}