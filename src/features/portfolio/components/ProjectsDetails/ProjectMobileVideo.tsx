import { useState } from "react";
import type { Project } from "../../types/projects.types";
import PhoneFrame from "./PhoneFrame";
import { Play } from "lucide-react";

const isEmbedUrl = (url?: string) => {
    if (!url) return false;
    return (
        url.includes("embed") ||
        url.includes("youtube.com") ||
        url.includes("vimeo.com") ||
        url.includes("cloudinary.com")
    );
};

interface ProjectMobileVideoProps {
    project: Project;
}

const ProjectMobileVideo = ({ project }: ProjectMobileVideoProps) => {
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);

    if (!project.video) return null;

    return (
        <div className="flex-none w-[calc((100%-16px)/1.5)] sm:w-[calc((100%-24px)/2.2)] lg:w-[calc((100%-56px)/3.5)] mx-auto lg:mx-0 flex flex-col gap-2">
            {/* <span className="text-sm font-semibold text-text-muted px-2 uppercase tracking-wider text-center lg:text-left">
                Video Demo
            </span> */}
            <PhoneFrame>
                {isEmbedUrl(project.video) ? (
                    playingUrl === project.video ? (
                        <iframe
                            src={`${project.video}${project.video.includes("?") ? "&" : "?"}autoplay=1`}
                            title={`${project.title} Video`}
                            className="h-full w-full border-none"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlayingUrl(project.video!)}
                            className="relative h-full w-full group cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} Preview`}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                                    <Play className="ml-1 h-6 w-6 fill-current text-primary" />
                                </div>
                            </div>
                        </button>
                    )
                ) : (
                    <video
                        controls
                        muted
                        poster={project.image}
                        className="h-full w-full object-cover"
                    >
                        <source src={project.video} type="video/mp4" />
                    </video>
                )}
            </PhoneFrame>
        </div>
    );
};

export default ProjectMobileVideo;
