import { FaArrowUp } from "react-icons/fa6";

type Props = {
    onClick?: () => void;
};

const ProjectArrow = ({ onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="
                flex h-9 w-9 items-center justify-center
                rounded-full
                bg-primary
                text-white
                transition-all duration-300
                hover:rotate-45
                cursor-pointer
            "
        >
            <FaArrowUp className="rotate-45" />
        </button>
    );
};

export default ProjectArrow;