import { useNavigate } from "react-router-dom";

import ProjectArrow from "./ProjectArrow";
import type { Project } from "../../types/projects.types";

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {

    const navigate = useNavigate();

    return (

        <article
            className="group overflow-hidden rounded-2xl
                border border-primary/10 bg-surface"
        >
            {/* Images */}
            <div className="overflow-hidden">

                <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition-transform duration-700 hover:scale-105"
                />

            </div>

            {/* Description */}

            <div className="flex items-center justify-between p-4 bg-bg-box ">

                <div>

                    <h3 className="font-heading text-lg font-bold">
                        {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-text-muted">
                        {project.subtitle}
                    </p>

                </div>

                <div className="shrink-0">
                    <ProjectArrow
                        onClick={() => navigate(`/projects/${project.id}`)}
                    />
                </div>


            </div>

        </article>

    );
};

export default ProjectCard;