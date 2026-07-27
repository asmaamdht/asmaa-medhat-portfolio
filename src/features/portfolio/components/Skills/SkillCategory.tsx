import type { ReactNode } from "react";
import SkillBadge from "./SkillBadge";

type SkillCategoryType = {
    icon: ReactNode;
    title: string;
    skills: string[];
};

type Props = {
    category: SkillCategoryType;
};

const SkillCategory = ({ category }: Props) => {
    return (
        <div className="rounded-lg p-6 bg-surface">

            <div className="flex items-center gap-2 mb-5">
                <span>{category.icon}</span>

                <h3 className="font-bold text-xl">
                    {category.title}
                </h3>
            </div>

            <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                    <SkillBadge
                        key={skill}
                        skill={skill}
                    />
                ))}

            </div>

        </div>
    );
};

export default SkillCategory;