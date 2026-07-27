import { skillIcons } from "../../constants/skillIcons";

type Props = {
    skill: string;
};


const SkillBadge = ({ skill }: Props) => {
    const skillData = skillIcons[skill as keyof typeof skillIcons];
    const Icon = skillData?.icon;


    return (
        <span
            className="
            flex items-center gap-2
            px-4 py-2 rounded-lg bg-background text-sm font-medium"
        >
            {Icon && (
                <Icon
                    size={18}
                    style={{ color: skillData.color }}
                />
            )}
            <span>{skill}</span>
        </span>
    );
};

export default SkillBadge;