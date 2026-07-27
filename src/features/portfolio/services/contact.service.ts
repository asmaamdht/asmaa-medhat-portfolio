import axios from "axios";
import type { ContactFormData, ContactResponse } from "../types/contact.types";

const API_URL = "https://api.web3forms.com/submit";

export const sendContactMessage = async (
    data: ContactFormData
): Promise<ContactResponse> => {

    console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    const response = await axios.post(API_URL, {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        ...data,
    });

    return response.data;
};