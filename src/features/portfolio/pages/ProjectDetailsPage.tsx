import { useParams } from "react-router-dom";
import { useProject } from "../hooks/useProject";
import ProjectConfidential from "../sections/ProjectDetails/ProjectConfidential";
import ProjectFeatures from "../sections/ProjectDetails/ProjectFeatures";
import ProjectMediaInfo from "../sections/ProjectDetails/ProjectMediaInfo";
import ProjectOverview from "../sections/ProjectDetails/ProjectOverview";

const ProjectDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = id ? parseInt(id, 10) : undefined;
    const { data: project, isLoading, isError } = useProject(projectId);

    if (isLoading) {
        return (
            <main className="bg-background px-6 py-12 animate-pulse">
                <div className="container">
                    <div className="grid gap-8 lg:grid-cols-12 items-stretch">
                        <div className="lg:col-span-7 h-96 bg-surface/50 rounded-lg"></div>
                        <div className="lg:col-span-5 h-96 bg-surface/50 rounded-lg"></div>
                    </div>
                    <div className="mt-15 flex flex-col gap-6 lg:flex-row">
                        <div className="flex-1 h-48 bg-surface/50 rounded-lg"></div>
                        <div className="flex-1 h-48 bg-surface/50 rounded-lg"></div>
                    </div>
                </div>
            </main>
        );
    }

    if (isError || !project) {
        return (
            <main className="bg-background px-6 py-12">
                <div className="container text-center py-20 bg-surface rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-red-600">Project Not Found</h2>
                    <p className="mt-2 text-text-muted">The project you are looking for does not exist or failed to load.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-background px-6 py-12">

            <div className="container">

                <ProjectMediaInfo project={project} />

                <div className="mt-15 flex flex-col gap-6 lg:flex-row">

                    <div className="flex-1">
                        <ProjectOverview project={project} />
                    </div>

                    <div className="flex-1">
                        <ProjectFeatures project={project} />
                    </div>

                </div>

                <ProjectConfidential project={project} />

            </div>

        </main>
    );
};

export default ProjectDetailsPage;

