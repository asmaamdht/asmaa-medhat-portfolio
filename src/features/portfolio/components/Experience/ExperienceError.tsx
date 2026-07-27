const ExperienceError = () => {
    return (
        <div className="relative w-full max-w-175 mx-auto py-16 px-4 text-center">
            <div className="bg-surface rounded-[15px] p-8 shadow-card border border-red-200">
                <h3 className="text-xl font-heading font-bold text-red-600 mb-2">
                    Failed to load experience history
                </h3>
                <p className="text-text-muted mb-6 font-body">
                    Please check your network connection and try again.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="rounded-md bg-primary hover:bg-primary-light px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 cursor-pointer"
                >
                    Retry
                </button>
            </div>
        </div>
    );
};


export default ExperienceError;