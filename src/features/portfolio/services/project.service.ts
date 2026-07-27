import { api } from "@/lib/axios";
import type { Project } from "../types/projects.types";

export const getProjects = async (): Promise<Project[]> => {
    const { data } = await api.get<Project[]>("/data/projects.json");
    return data;
};

export const getProjectById = async (id: number): Promise<Project | undefined> => {
    const projects = await getProjects();
    return projects.find((project) => project.id === id);
};