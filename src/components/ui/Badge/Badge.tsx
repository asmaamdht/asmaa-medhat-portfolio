import type { BadgeProps } from "./types";



const Badge = ({ label, icon, className = "", ...props }: BadgeProps) => {
    return (
        <span
            className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary/10
                px-4
                py-2
                text-sm
                font-medium
                transition-colors
                ${className}
            `}
            {...props}
        >
            {icon && (
                <span className="flex items-center">
                    {icon}
                </span>
            )}

            <span>{label}</span>
        </span>
    );
};

export default Badge;