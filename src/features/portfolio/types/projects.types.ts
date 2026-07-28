export interface ProjectVideo {
    title: string;
    video: string;
}

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    images: string[];

    description: string;

    role?: string;
    company?: string;
    duration?: string;

    category: string;

    technologies: string[];

    features: string[];

    videos?: ProjectVideo[];
    video?: string;
    isConfidential?: boolean;
    githubUrl?: string;
    liveUrl?: string;
}