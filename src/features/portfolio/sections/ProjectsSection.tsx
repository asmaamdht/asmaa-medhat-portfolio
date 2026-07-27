
import SectionHeader from "@/components/common/heading/SectionHeaders";
import ProjectsError from "../components/Projects/ProjectsError";
import ProjectsSkeleton from "../components/Projects/ProjectsSkeleton";
import ProjectCard from "../components/Projects/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import ViewAllButton from "@/components/ui/button/ViewAllButton";

type ProjectsSectionProps = {
    limit?: number;
};

const ProjectsSection = ({ limit }: ProjectsSectionProps) => {

    const {
        data: projects = [],
        isLoading,
        isError,
    } = useProjects();

    if (isLoading) return <ProjectsSkeleton />;

    if (isError) return <ProjectsError />;

    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section
            id="projects"
            className="py-16 bg-background"
        >

            <div className="max-w-7xl mx-auto px-4">

                <SectionHeader
                    title="Projects"
                    description="A selection of projects I've worked on."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {Array.isArray(displayedProjects) && displayedProjects.map((project) => (

                        <ProjectCard
                            key={project.id}
                            project={project}
                        />

                    ))}

                </div>

                {limit && (

                    <ViewAllButton to={"/projects"} label="View all projects" />
                )}

            </div>

        </section>
    );
};

export default ProjectsSection;