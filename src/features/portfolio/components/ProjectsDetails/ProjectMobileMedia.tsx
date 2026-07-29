import type { Project } from "../../types/projects.types";
import ProjectMobileVideo from "./ProjectMobileVideo";
import ProjectMobileGallery from "./ProjectMobileGallery";

interface ProjectMobileMediaProps {
    project: Project;
    handleOpenLightbox: (imageUrl: string) => void;
}

const ProjectMobileMedia = ({ project, handleOpenLightbox }: ProjectMobileMediaProps) => {
    return (
        <div className="flex flex-col gap-6 min-w-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-start justify-center lg:justify-start min-w-0">
                <ProjectMobileVideo project={project} />
                <ProjectMobileGallery project={project} handleOpenLightbox={handleOpenLightbox} />
            </div>
        </div>
    );
};

export default ProjectMobileMedia;
