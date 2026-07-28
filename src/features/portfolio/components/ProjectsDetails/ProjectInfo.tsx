import { InfoCard } from "./InfoCard";
import { Building2, User, CalendarDays, FolderKanban } from "lucide-react";
import SectionSubHeader from "@/components/common/heading/SectionSubHeader";
import type { Project } from "../../types/projects.types";
import Badge from "@/components/ui/Badge/Badge";
import ProjectLinks from "./ProjectLinks";

const ProjectInfo = ({ project }: { project: Project }) => {
    return (
        <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-lg">

            <div>
                <SectionSubHeader title={project.title} description={project.subtitle} className="items-start text-left" />
            </div>

            <div className="my-2 h-px bg-border" />

            <div className="grid grid-cols-2 gap-4">
                {project.company && (
                    <div className={project.company.length > 25 ? "col-span-2" : "col-span-1"}>
                        <InfoCard
                            icon={<Building2 size={20} />}
                            title="Company"
                            value={project.company}
                        />
                    </div>
                )}

                {project.role && (
                    <div className={project.role.length > 25 ? "col-span-2" : "col-span-1"}>
                        <InfoCard
                            icon={<User size={20} />}
                            title="Role"
                            value={project.role}
                        />
                    </div>
                )}

                {project.duration && (
                    <div className={project.duration.length > 25 ? "col-span-2" : "col-span-1"}>
                        <InfoCard
                            icon={<CalendarDays size={20} />}
                            title="Duration"
                            value={project.duration}
                        />
                    </div>
                )}

                {project.category && (
                    <div className={project.category.length > 25 ? "col-span-2" : "col-span-1"}>
                        <InfoCard
                            icon={<FolderKanban size={20} />}
                            title="Category"
                            value={project.category}
                        />
                    </div>
                )}

            </div>

            {/* Tech Stack */}

            <div>
                <div className="my-4 h-px bg-border" />

                <SectionSubHeader title={"Tech Stack"} titleClassName="text-lg!" className="mb-4!" />

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <Badge
                            key={tech} label={tech} />
                    ))}
                </div>
            </div>

            <ProjectLinks project={project} />


        </div>
    )
}

export default ProjectInfo