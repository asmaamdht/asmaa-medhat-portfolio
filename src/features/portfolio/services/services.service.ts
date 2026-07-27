import axios from "axios";
import type { Service } from "../types/service.types";


export const getServices = async (): Promise<Service[]> => {

    const { data } = await axios.get<Service[]>("/data/services.json");

    return data;

};