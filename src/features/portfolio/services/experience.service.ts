import { api } from "@/lib/axios";
import type { Experience } from "../types/experience.types";

export const getExperiences = async (): Promise<Experience[]> => {
    const { data } = await api.get<Experience[]>("/data/experiences.json");
    return data;
};