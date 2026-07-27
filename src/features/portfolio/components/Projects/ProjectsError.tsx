const ProjectsError = () => {
    return (
        <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">

            <h3 className="text-xl font-bold text-red-600">
                Failed to load projects
            </h3>

            <p className="mt-2 text-text-muted">
                Please try again later.
            </p>

        </div>
    );
};

export default ProjectsError;