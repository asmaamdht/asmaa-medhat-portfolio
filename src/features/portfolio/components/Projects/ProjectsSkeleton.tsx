const ProjectsSkeleton = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-pulse">

            {[1, 2, 3].map((item) => (

                <div
                    key={item}
                    className="rounded-2xl border border-primary/10 bg-surface overflow-hidden"
                >

                    <div className="h-60 bg-primary/10" />

                    <div className="p-6 space-y-4">

                        <div className="h-6 w-40 rounded bg-primary/10" />

                        <div className="h-4 w-full rounded bg-primary/5" />

                        <div className="h-4 w-4/5 rounded bg-primary/5" />

                        <div className="flex gap-2">

                            <div className="h-9 w-20 rounded bg-primary/10" />

                            <div className="h-9 w-20 rounded bg-primary/10" />

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default ProjectsSkeleton;