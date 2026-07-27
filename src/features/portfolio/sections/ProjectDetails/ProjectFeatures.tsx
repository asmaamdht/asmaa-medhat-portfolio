import { ShieldCheck } from "lucide-react";

import SectionSubHeader from "@/components/common/heading/SectionSubHeader";
import Badge from "@/components/ui/Badge/Badge";
import type { Project } from "../../types/projects.types";
import { projectFeatureIcons } from "../../constants/project-icons";

const ProjectFeatures = ({ project }: { project: Project }) => {
    return (
        <section>
            <SectionSubHeader title="Key Modules" />

            <div className="flex flex-wrap gap-3">
                {project.features.map((feature) => {
                    const Icon = projectFeatureIcons[feature] ?? ShieldCheck;

                    return (
                        <Badge
                            key={feature}
                            label={feature}
                            icon={<Icon size={16} />}
                            className="bg-muted rounded-lg"
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectFeatures;