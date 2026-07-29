import type { Project } from "../../types/projects.types";
import PhoneFrame from "./PhoneFrame";
import { Maximize2 } from "lucide-react";

interface ProjectMobileGalleryProps {
    project: Project;
    handleOpenLightbox: (imageUrl: string) => void;
}

const ProjectMobileGallery = ({ project, handleOpenLightbox }: ProjectMobileGalleryProps) => {
    const galleryImages = [...(project.images || [])].filter(Boolean) as string[];

    return (
        <div className="flex-1 w-full min-w-0 flex flex-col gap-2">
            {/* <span className="text-sm font-semibold text-text-muted px-2 uppercase tracking-wider text-center lg:text-left">
                Screenshots
            </span> */}
            <div className="flex gap-0 lg:gap-4 overflow-x-auto pb-4 pt-10 no-scrollbar scroll-smooth snap-x snap-mandatory">
                {galleryImages.map((image, index) => (
                    <div key={index}
                        className="flex-none w-[calc((100%-16px)/1.5)] sm:w-[calc((100%-24px)/2.)] lg:w-[calc((100%-30px)/2.5)] snap-start">
                        <div
                            className="group relative cursor-zoom-in transition-transform duration-300 hover:-translate-y-1"
                            onClick={() => handleOpenLightbox(image)}
                        >
                            <PhoneFrame>
                                <img
                                    src={image}
                                    alt={`${project.title} Screenshot ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white z-10">
                                    <div className="flex flex-col items-center gap-2">
                                        <Maximize2 size={24} className="animate-pulse" />
                                        <span className="text-xs font-semibold uppercase tracking-wider">
                                            Click to Zoom
                                        </span>
                                    </div>
                                </div>
                            </PhoneFrame>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectMobileGallery;
