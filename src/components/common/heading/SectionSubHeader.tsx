type SubHeaderProps = {
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
    titleClassName?: string;
};


const SectionSubHeader = ({
    title,
    description,
    className = "",
    titleClassName,

}: SubHeaderProps) => {
    return (
        <div
            className={`flex flex-col gap-2 mb-8  ${className}`}
        >
            <h3
                className={`text-2xl font-semibold font-heading text-text ${titleClassName ?? ""}`}>
                {title}
            </h3>

            {
                description && (
                    <p className="max-w-2xl text-sm text-text-muted font-body">
                        {description}
                    </p>
                )
            }
        </div >
    );
};

export default SectionSubHeader;