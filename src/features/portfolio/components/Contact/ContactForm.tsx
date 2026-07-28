import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useContact } from "../../hooks/useContact";
import {
    contactSchema,
    type ContactFormValues,
} from "../../validation/contact.schema";

import FormInput from "@/components/common/inputs/FormInput";
import FormTextarea from "@/components/common/inputs/FormTextarea";

const ContactForm = () => {
    const { mutate, isPending } = useContact();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data: ContactFormValues) => {
        mutate(data, {
            onSuccess: (response) => {
                toast.success("Message sent successfully!");
                console.log("Success Response:", response);
                reset();
            },
            onError: (error) => {
                console.error("Mutation Error:", error);
            },
        });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-xl p-4 sm:p-8"
        >
            <FormInput
                type="email"
                placeholder="Your Email"
                registration={register("email")}
                error={errors.email}
            />

            <FormInput
                placeholder="Subject"
                registration={register("subject")}
                error={errors.subject}
            />

            <FormTextarea
                placeholder="Your Message..."
                rows={6}
                registration={register("message")}
                error={errors.message}
            />

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg disabled:opacity-60"
                >
                    {isPending ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;