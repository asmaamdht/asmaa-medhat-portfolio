import type { OverviewTypes } from "../types/overview.types";

type OverviewProps = OverviewTypes;

export default function StatCard({ label, value, icon: Icon }: OverviewProps) {
    return (
        <div className="flex justify-between glass rounded-2xl px-4 py-2">
            <div className="flex flex-col justify-between items-star">
                <p className="mt-1 text-sm text-dark-900">
                    {label}
                </p>
                <p className="text-2xl font-bold text-dark-900">
                    {value}
                </p>
            </div>

            <div className="mb-2 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-gradient">
                    <Icon size={18} className="text-white" />
                </div>
            </div>



        </div>
    );
}