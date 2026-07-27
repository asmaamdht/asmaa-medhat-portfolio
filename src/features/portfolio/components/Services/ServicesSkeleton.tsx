const ServicesSkeleton = () => {

    return (

        <section className="py-20">

            <div className="max-w-7xl mx-auto px-4">

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {Array.from({ length: 6 }).map((_, index) => (

                        <div
                            key={index}
                            className="
                                h-64

                                animate-pulse

                                rounded-3xl

                                bg-primary/5
                            "
                        />

                    ))}

                </div>

            </div>

        </section>

    );

};

export default ServicesSkeleton;