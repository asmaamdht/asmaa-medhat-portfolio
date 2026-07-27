import type { FormFieldProps } from "./inputs.types";




const FormInput = ({ placeholder, type = "text", registration, error, }: FormFieldProps) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                {...registration}
                className="w-full rounded-lg  glass-bg px-5 py-3 text-text placeholder-text-muted/60 outline-none transition duration-300 focus:border-primary"
            />

            {error && (
                <p className="mt-2 text-sm font-body text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default FormInput;