import { Maximize2, Play } from "lucide-react";
import { useState } from "react";

const isEmbedUrl = (url?: string) => {
    if (!url) return false;
    return (
        url.includes("embed") ||
        url.includes("youtube.com") ||
        url.includes("vimeo.com") ||
        url.includes("cloudinary.com")
    );
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

const ProjectMediaUpper = ({
    project,
    selectedMedia,
    handleOpenLightbox,
}: ProjectMediaUpperProps) => {
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/40 shadow-lg flex items-center justify-center">
            {selectedMedia.type === "video" ? (
                isEmbedUrl(selectedMedia.url) ? (
                    playingUrl === selectedMedia.url ? (
                        <iframe
                            src={`${selectedMedia.url}${selectedMedia.url.includes("?") ? "&" : "?"
                                }autoplay=1`}
                            title={`${project.title} Video`}
                            className="h-full w-full border-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlayingUrl(selectedMedia.url)}
                            className="relative h-full w-full group"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} Preview`}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                    <Play
                                        className="ml-1 h-8 w-8 fill-current cursor-pointer text-primary"
                                    />
                                </div>
                            </div>
                        </button>
                    )
                ) : (
                    <video
                        controls
                        poster={project.image}
                        className="h-full w-full object-cover"
                    >
                        <source src={selectedMedia.url} type="video/mp4" />
                    </video>
                )
            ) : (
                <div
                    className="group relative h-full w-full cursor-zoom-in"
                    onClick={() => handleOpenLightbox(selectedMedia.url)}
                >
                    <img
                        src={selectedMedia.url}
                        alt={project.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <div className="flex flex-col items-center gap-2">
                            <Maximize2 size={24} className="animate-pulse" />
                            <span className="text-xs font-semibold uppercase tracking-wider">
                                Click to Zoom
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectMediaUpper;