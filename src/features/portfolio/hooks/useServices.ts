import { useQuery } from "@tanstack/react-query";
import { getServices } from "../services/services.service";

export const useServices = () => {

    return useQuery({

        queryKey: ["services"],

        queryFn: getServices,

    });

};