import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import type { Project } from "../../types/projects.types";
import LinkButtons from "@/components/ui/button/LinkButtons";

const ProjectLinks = ({ project }: { project: Project }) => {
    if (project.isConfidential) return null;

    const links = [];
    if (project.githubUrl) {
        links.push({
            href: project.githubUrl,
            label: "Code",
            icon: <FaGithub size={18} />,
            variant: "outline" as const,
        });
    }
    if (project.liveUrl) {
        links.push({
            href: project.liveUrl,
            label: "Live Demo",
            icon: <ExternalLink size={18} />,
            variant: "primary" as const,
        });
    }

    return <LinkButtons links={links} />;
};

export default ProjectLinks;