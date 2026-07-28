import type { FormFieldProps } from "./inputs.types";



const FormTextarea = ({ placeholder, rows = 6, registration, error }: FormFieldProps) => {
    return (
        <div className="relative">
            <textarea
                rows={rows}
                placeholder={placeholder}
                {...registration}
                className="w-full resize-none rounded-lg  glass-bg px-5 py-4 text-text placeholder-text-muted/60 outline-none transition duration-300 focus:border-primary"
            />

            {error && (
                <p className="absolute left-0 mt-1 text-xs font-body text-text-error">
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default FormTextarea;