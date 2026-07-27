type SectionHeaderProps = {
    title: string;
    description: string;
    className?: string;
};

const SectionHeader = ({ title, description, className = "",
}: SectionHeaderProps) => {
    return (
        <div className={`text-center flex flex-col gap-2 mb-12 ${className}`}>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text">
                {title}
            </h2>

            <p className="text-text-muted text-sm sm:text-base font-body max-w-md mx-auto">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;