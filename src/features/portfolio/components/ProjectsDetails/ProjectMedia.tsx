import type { Project } from "../../types/projects.types";

const ProjectMedia = ({ project }: { project: Project }) => {
    return (
        <div className="flex h-full flex-col gap-4">

            {/* Main Media (Video or Cover Image) */}
            <div className="h-85 overflow-hidden rounded-lg bg-white shadow-lg flex items-center justify-center">
                {project.video ? (
                    <video
                        controls
                        poster={project.image || "/images/projects/moheet/dashboard.jpeg"}
                        className="h-full w-full object-cover"
                    >
                        <source src={project.video} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                )}
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-3 gap-4">

                {project.images && project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        className="h-30 w-full rounded-lg bg-white object-cover cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    />
                ))}

            </div>

        </div>
    )
}

export default ProjectMedia