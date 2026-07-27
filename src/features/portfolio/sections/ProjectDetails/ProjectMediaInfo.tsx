import ProjectMedia from '../../components/ProjectsDetails/ProjectMedia'
import ProjectInfo from '../../components/ProjectsDetails/ProjectInfo'
import type { Project } from "../../types/projects.types"

const ProjectMediaInfo = ({ project }: { project: Project }) => {
    return (
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7">
                <ProjectMedia project={project} />
            </div>

            <div className="lg:col-span-5">
                <ProjectInfo project={project} />
            </div>

        </div>
    )
}

export default ProjectMediaInfo