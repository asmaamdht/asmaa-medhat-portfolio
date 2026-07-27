import {
    FaBriefcase,
    FaLaptopCode,
    FaGlobe,
} from "react-icons/fa";

import type { Experience } from "../../types/experience.types";

type Props = {
    experience: Experience;
};

const icons = {
    company: FaBriefcase,
    freelance: FaLaptopCode,
    content: FaGlobe,
};

const cardColors = [
    "bg-[#FDF1E7]",
    "bg-[#EEF5EE]",
    "bg-[#EEF3FA]",
];

const ExperienceCard = ({ experience }: Props) => {
    const Icon = icons[experience.icon as keyof typeof icons];

    return (
        <div
            className={`
                ${cardColors[(experience.id - 1) % cardColors.length]}
                rounded-t-[70px]
                rounded-b-2xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
            `}
        >
            {/* Icon */}

            <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70">
                    {Icon && (
                        <Icon
                            size={24}
                            className="text-primary"
                        />
                    )}
                </div>
            </div>

            {/* Role */}

            <h3 className="mt-5 text-center text-lg font-semibold leading-snug">
                {experience.role}
            </h3>

            {/* Company */}

            <p className="mt-2 text-center text-sm text-primary font-medium">
                {experience.company}
            </p>

            {/* Description */}

            <p className="mt-3 text-center text-xs leading-6 text-text-muted">
                {experience.description}
            </p>

            {/* Period */}

            <div className="mt-5 flex justify-center">
                <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-primary">
                    {experience.period}
                </span>
            </div>
        </div>
    );
};

export default ExperienceCard;