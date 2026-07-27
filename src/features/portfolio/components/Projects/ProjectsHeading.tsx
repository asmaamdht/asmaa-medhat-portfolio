import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ProjectsHeading = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text">
                    Projects
                </h2>
                <p className="text-text-muted text-sm sm:text-base font-body max-w-xl mt-2">
                    A selection of projects I've worked on.
                </p>
            </div>
            <div className="shrink-0">
                <Link
                    to="/projects"
                    className="group inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold transition-colors duration-300"
                >
                    Show all projects
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
            </div>
        </div>
    )
}

export default ProjectsHeading
