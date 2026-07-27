import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type FormFieldProps = {
    as?: "input" | "textarea";
    placeholder: string;
    registration: UseFormRegisterReturn;
    error?: FieldError;
    type?: React.HTMLInputTypeAttribute;
    rows?: number;
};