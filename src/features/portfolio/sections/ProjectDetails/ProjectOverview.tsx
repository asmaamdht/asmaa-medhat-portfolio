import SectionSubHeader from "@/components/common/heading/SectionSubHeader";
import type { Project } from "../../types/projects.types";

const ProjectOverview = ({ project }: { project: Project }) => {
    return (


        <section className=" rounded-xl bg-white shadow-lg p-5 ">
            <SectionSubHeader
                title="Overview"
            />

            <p className="text-sm leading-7 text-muted-foreground">
                {project.description}
            </p>

        </section>


    );
};

export default ProjectOverview;