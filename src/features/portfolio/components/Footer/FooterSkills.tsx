import { FOOTER_SKILLS } from "./Footer.constants";

const FooterSkills = () => {
    return (
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-lg font-bold font-heading text-text">Top Skills</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-text-muted">
                {FOOTER_SKILLS.map((skill) => (
                    <li key={skill}>
                        <span className="hover:text-primary transition-colors cursor-pointer">
                            {skill}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSkills;
