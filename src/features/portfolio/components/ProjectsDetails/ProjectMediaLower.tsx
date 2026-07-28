import { Play } from "lucide-react";

interface ProjectMediaLowerProps {
    project: {
        image: string;
        video?: string;
        images?: string[];
    };
    clickedMedia: {
        type: "video" | "image";
        url: string;
    };
    setClickedMedia: (media: { type: "video" | "image"; url: string }) => void;
    setHoveredMedia: (media: { type: "video" | "image"; url: string } | null) => void;
}

const ProjectMediaLower = ({ project, clickedMedia, setClickedMedia, setHoveredMedia }: ProjectMediaLowerProps) => {
    return (
        <div className="relative w-full">
            <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory">
                {/* Video (if video exists) */}
                {project.video && (
                    <div
                        className={`flex-none w-[calc((100%-3*12px)/3.5)] aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer snap-start relative ${clickedMedia.type === "video"
                            ? "border-primary shadow-md scale-95"
                            : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                        onMouseEnter={() => setHoveredMedia({ type: "video", url: project.video! })}
                        onMouseLeave={() => setHoveredMedia(null)}
                        onClick={() => setClickedMedia({ type: "video", url: project.video! })}
                    >
                        <img
                            src={project.image}
                            alt="Video preview thumbnail"
                            className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="bg-primary text-white rounded-full p-2 shadow-md">
                                <Play size={16} className="fill-white ml-0.5" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Screenshot  */}
                {project.images && project.images.map((image, index) => {
                    const isSelected = clickedMedia.type === "image" && clickedMedia.url === image;
                    return (
                        <div
                            key={index}
                            className={`flex-none w-[calc((100%-3*12px)/3.5)] aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer snap-start ${isSelected
                                ? "border-primary shadow-md scale-95"
                                : "border-transparent opacity-70 hover:opacity-100 hover:-translate-y-0.5"
                                }`}
                            onMouseEnter={() => setHoveredMedia({ type: "image", url: image })}
                            onMouseLeave={() => setHoveredMedia(null)}
                            onClick={() => setClickedMedia({ type: "image", url: image })}
                        >
                            <img
                                src={image}
                                alt={`Screenshot thumbnail ${index + 1}`}
                                className="h-full w-full object-contain bg-black/5"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectMediaLower;
