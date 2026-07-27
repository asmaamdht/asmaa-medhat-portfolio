import type { FormFieldProps } from "./inputs.types";



const FormTextarea = ({ placeholder, rows = 6, registration, error }: FormFieldProps) => {
    return (
        <div>
            <textarea
                rows={rows}
                placeholder={placeholder}
                {...registration}
                className="w-full resize-none rounded-lg  glass-bg px-5 py-4 text-text placeholder-text-muted/60 outline-none transition duration-300 focus:border-primary"
            />

            {error && (
                <p className="mt-2 text-sm font-body text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default FormTextarea;