import { Maximize2 } from "lucide-react";

const isEmbedUrl = (url?: string) => {
    if (!url) return false;
    return url.includes("embed") || url.includes("youtube.com") || url.includes("vimeo.com") || url.includes("cloudinary.com");
};

interface ProjectMediaUpperProps {
    project: {
        title: string;
        video?: string;
        image: string;
    };
    selectedMedia: {
        type: "video" | "image";
        url: string;
    };
    handleOpenLightbox: (imageUrl: string) => void;
}

const ProjectMediaUpper = ({ project, selectedMedia, handleOpenLightbox }: ProjectMediaUpperProps) => {
    // const bgClass = selectedMedia.type === "video" ? "bg-black" : "bg-background";

    return (
        <div className={`relative aspect-video w-full overflow-hidden bg-black/40 rounded-lg shadow-lg flex items-center justify-center `}>
            {selectedMedia.type === "video" ? (
                isEmbedUrl(selectedMedia.url) ? (
                    <iframe
                        src={selectedMedia.url}
                        title={`${project.title} Video`}
                        className="h-full w-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen

                    />
                ) : (
                    <video
                        controls
                        poster={project.image || "/images/projects/moheet/dashboard.jpeg"}
                        className="h-full w-full object-cover"
                    >
                        <source src={selectedMedia.url} type="video/mp4" />
                    </video>
                )
            ) : (
                <div
                    className="relative w-full h-full group cursor-zoom-in"
                    onClick={() => handleOpenLightbox(selectedMedia.url)}
                >
                    <img
                        src={selectedMedia.url}
                        alt={project.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                        <div className="flex flex-col items-center gap-2">
                            <Maximize2 size={24} className="animate-pulse" />
                            <span className="text-xs font-semibold uppercase tracking-wider">Click to Zoom</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectMediaUpper;
