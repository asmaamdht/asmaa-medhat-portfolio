import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../services/project.service";

export const useProject = (id?: number) => {
    return useQuery({
        queryKey: ["project", id],
        queryFn: () => (id !== undefined ? getProjectById(id) : Promise.resolve(undefined)),
        enabled: id !== undefined,
    });
};
