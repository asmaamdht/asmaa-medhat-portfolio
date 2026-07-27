export function InfoCard({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="flex flex-wrap items-center gap-4 rounded-lg bg-background p-4 transition-shadow hover:shadow-md">

            <div className="rounded-lg bg-primary/10 p-3 text-primary">
                {icon}
            </div>

            <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground text-primary">
                    {title}
                </p>

                <h4 className="mt-1 font-semibold">
                    {value}
                </h4>
            </div>

        </div>
    );
}