import { getExperiences } from "@/features/portfolio/services/experience.service";
import { useQuery } from "@tanstack/react-query";

export const useExperience = () => {
    return useQuery({
        queryKey: ["experiences"],
        queryFn: getExperiences,
    });
};