import SectionHeader from "@/components/common/heading/SectionHeaders";
import { useSkills } from "../hooks/useSkills";
import SkillCategory from "../components/Skills/SkillCategory";


const SkillsList = () => {
    const {
        data: skills = [],
    } = useSkills();



    return (
        <section id="skills" className="py-13 bg-background">
            <div className="max-w-7xl mx-auto px-4">

                <SectionHeader
                    title="Skills"
                    description="Technologies and tools I use."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {skills.map((category) => (
                        <SkillCategory
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsList;