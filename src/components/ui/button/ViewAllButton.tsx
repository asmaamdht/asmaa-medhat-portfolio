import { Link } from "react-router-dom";

interface ViewAllButtonProps {
    to: string;
    label?: string;
}

const ViewAllButton = ({ to, label = "View all" }: ViewAllButtonProps) => {
    return (
        <div className="mt-12 flex justify-center">
            <Link
                to={to}
                className="group inline-flex items-center gap-2 text-white bg-primary py-2 px-4 font-normal rounded-lg transition-colors duration-300"
            >
                {label}
            </Link>
        </div>
    );
};

export default ViewAllButton;