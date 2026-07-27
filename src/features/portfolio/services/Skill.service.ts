import { api } from "@/lib/axios";
import type { SkillCategory } from "../types/skills.types";

export const getSkills = async (): Promise<SkillCategory[]> => {
    const { data } = await api.get<SkillCategory[]>("/data/skills.json");
    return data;
};