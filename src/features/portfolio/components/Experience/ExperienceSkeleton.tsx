const ExperienceSkeleton = () => {
    return (
        <div className="relative w-full max-w-175 mx-auto py-16 px-4">
            {/* Header Skeleton */}
            <div className="text-center flex flex-col gap-2 mb-12 animate-pulse">
                <div className="h-9 w-48 bg-primary/10 rounded mx-auto" />
                <div className="h-4 w-72 bg-primary/5 rounded mx-auto mt-2" />
            </div>

            {/* Card Skeleton */}
            <div className="bg-surface rounded-[15px] p-8 md:px-16 md:py-12 mb-8 shadow-card border border-primary/5 animate-pulse">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-15 h-15 rounded-full bg-primary/10 shrink-0" />
                        <div className="space-y-2">
                            <div className="h-5 w-40 bg-primary/10 rounded" />
                            <div className="h-4 w-28 bg-primary/5 rounded" />
                        </div>
                    </div>
                    <div className="h-6 w-24 bg-primary/10 rounded-full" />
                </div>
                <div className="space-y-3">
                    <div className="h-4 w-full bg-primary/5 rounded" />
                    <div className="h-4 w-5/6 bg-primary/5 rounded" />
                    <div className="h-4 w-4/5 bg-primary/5 rounded" />
                </div>
            </div>

            {/* Dots Skeleton */}
            <div className="flex justify-center gap-2.5 mt-4">
                <div className="h-3 w-3 rounded-full bg-primary/10" />
                <div className="h-3 w-3 rounded-full bg-primary/10" />
            </div>
        </div>
    );
};



export default ExperienceSkeleton;