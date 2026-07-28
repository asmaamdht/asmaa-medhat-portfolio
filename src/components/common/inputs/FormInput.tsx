import type { FormFieldProps } from "./inputs.types";




const FormInput = ({ placeholder, type = "text", registration, error, }: FormFieldProps) => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                {...registration}
                className="w-full rounded-lg  glass-bg px-5 py-3 text-text placeholder-text-muted/60 outline-none transition duration-300 focus:border-primary"
            />

            {error && (
                <p className="absolute left-0 mt-1 text-xs font-body text-text-error">
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default FormInput;