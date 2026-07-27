import { ShieldAlert } from "lucide-react";
import type { Project } from "../../types/projects.types";

const ProjectConfidential = ({ project }: { project: Project }) => {
    if (!project.isConfidential) return null;

    return (
        <section className="mt-20">

            <div className="rounded-3xl border border-alert-border bg-alert-bg p-6">
                <div className="flex gap-5">

                    <div className="rounded-xl bg-alert-icon-bg p-3 text-alert-text">
                        <ShieldAlert size={24} />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">
                            Confidential Project
                        </h3>

                        <p className="mt-3 leading-8  text-gray-600">
                            This project was developed for a real company.
                            Due to confidentiality, the source code and live
                            application cannot be shared publicly.
                            The screenshots and video above demonstrate selected
                            workflows and features that I implemented as the
                            Frontend Developer.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ProjectConfidential;