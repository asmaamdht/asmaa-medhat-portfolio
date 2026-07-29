import { useState } from "react";
import ProjectMediaUpper from '../../components/ProjectsDetails/ProjectMediaUpper'
import ProjectMediaLower from '../../components/ProjectsDetails/ProjectMediaLower'
import ProjectMobileMedia from '../../components/ProjectsDetails/ProjectMobileMedia'
import ProjectInfo from '../../components/ProjectsDetails/ProjectInfo'
// import ProjectLinks from '../../components/ProjectsDetails/ProjectLinks'
import type { Project } from "../../types/projects.types"
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const isMobileProject = (project: Project) => {
    const categoryLower = project.category.toLowerCase();
    const titleLower = project.title.toLowerCase();
    const subtitleLower = project.subtitle.toLowerCase();

    return (
        categoryLower.includes("mobile") ||
        categoryLower.includes("app") ||
        titleLower.includes("app") ||
        subtitleLower.includes("mobile") ||
        subtitleLower.includes("app") ||
        project.technologies.some(tech =>
            ["flutter", "dart", "react-native", "react native", "swift", "kotlin", "android", "ios"].includes(tech.toLowerCase())
        )
    );
};

const ProjectMediaInfo = ({ project }: { project: Project }) => {
    const initialMedia = project.video
        ? { type: "video" as const, url: project.video }
        : { type: "image" as const, url: project.image };

    const [clickedMedia, setClickedMedia] = useState<{ type: "video" | "image"; url: string }>(initialMedia);
    const [hoveredMedia, setHoveredMedia] = useState<{ type: "video" | "image"; url: string } | null>(null);
    const activeMedia = hoveredMedia || clickedMedia;
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const galleryImages = [project.image, ...(project.images || [])].filter(Boolean) as string[];

    const handleOpenLightbox = (imageUrl: string) => {
        const index = galleryImages.indexOf(imageUrl);
        if (index !== -1) {
            setLightboxIndex(index);
            setIsLightboxOpen(true);
        }
    };

    const isMobile = isMobileProject(project);

    return (
        <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Column: Media Player + Screenshots scrollbar */}
            <div className="lg:col-span-7 flex flex-col gap-4 w-full min-w-0">                {isMobile ? (
                <ProjectMobileMedia
                    project={project}
                    handleOpenLightbox={handleOpenLightbox}
                />
            ) : (
                <>
                    <ProjectMediaUpper
                        project={project}
                        selectedMedia={activeMedia}
                        handleOpenLightbox={handleOpenLightbox}
                    />
                    <ProjectMediaLower
                        project={project}
                        clickedMedia={clickedMedia}
                        setClickedMedia={setClickedMedia}
                        setHoveredMedia={setHoveredMedia}
                    />
                </>
            )}
            </div>

            {/* Right Column: Info card + Links */}
            <div className="lg:col-span-5 flex flex-col gap-4 w-full">
                <ProjectInfo project={project} />
            </div>

            {/* Lightbox Modal Overlay */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 cursor-pointer z-10"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <X size={24} />
                    </button>

                    {/* Previous Button */}
                    {galleryImages.length > 1 && (
                        <button
                            className="absolute left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-300 cursor-pointer z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                            }}
                        >
                            <ChevronLeft size={28} />
                        </button>
                    )}

                    {/* Image Area */}
                    <div
                        className="max-w-[85vw] max-h-[80vh] flex flex-col items-center select-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={galleryImages[lightboxIndex]}
                            alt={`Fullscreen view ${lightboxIndex + 1}`}
                            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
                        />
                        <span className="text-white/60 text-sm mt-4 font-body">
                            {lightboxIndex + 1} / {galleryImages.length}
                        </span>
                    </div>

                    {/* Next Button */}
                    {galleryImages.length > 1 && (
                        <button
                            className="absolute right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-300 cursor-pointer z-10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
                            }}
                        >
                            <ChevronRight size={28} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectMediaInfo;