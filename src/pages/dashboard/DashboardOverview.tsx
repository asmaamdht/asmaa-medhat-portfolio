import { stats } from "@/features/dashboard/Overview/dashboard.data";
import StatCard from "../../features/dashboard/Overview/StatCard";

export default function DashboardOverview() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item) => (
                    <StatCard key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
}