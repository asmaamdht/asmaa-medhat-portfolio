import { useExperience } from "@/features/portfolio/hooks/useExperience";
import SectionHeader from "@/components/common/heading/SectionHeaders";
import ExperienceSkeleton from "../components/Experience/ExperienceSkeleton";
import ExperienceError from "../components/Experience/ExperienceError";
import ExperienceCard from "../components/Experience/ExperienceCard";

const ExperienceList = () => {
    const {
        data: experiences = [],
        isLoading,
        isError,
    } = useExperience();

    if (isLoading) {
        return <ExperienceSkeleton />;
    }

    if (isError) {
        return <ExperienceError />;
    }

    if (experiences.length === 0) {
        return null;
    }

    return (
        <section
            id="experience"
            className="pb-16 pt-4 bg-background relative overflow-hidden sm:pt-0"
        >
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <SectionHeader title={"Experience"} description={"My professional journey and career path"} />

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceList;