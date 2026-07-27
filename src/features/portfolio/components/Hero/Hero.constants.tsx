import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { RiReactjsLine, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiReactquery, SiReacthookform } from "react-icons/si";



export const SOCIAL_LINKS = [
    {
        label: "Facebook",
        href: "https://web.facebook.com/asmaa.medhat.123276",
        icon: <FacebookIcon />,
    },
    {
        label: "GitHub",
        href: "https://github.com/asmaamdht",
        icon: <FaGithub className="text-lg" />,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/asmaamedhat/",
        icon: <LinkedinIcon />,
    },
];





export const TECH_STACK = [
    {
        name: "React",
        icon: <RiReactjsLine className="text-[#61DAFB] text-lg" />,
    },
    {
        name: "Next.js",
        icon: <RiNextjsFill className="text-black dark:text-white text-lg" />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6] text-lg" />,
    },
    {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-[#06B6D4] text-lg" />,
    },
    {
        name: "Redux Toolkit",
        icon: <SiRedux className="text-[#764ABC] text-lg" />,
    },
    {
        name: "React Query",
        icon: <SiReactquery className="text-[#FF4154] text-lg" />,
    },
    {
        name: "React Hook Form",
        icon: <SiReacthookform className="text-[#EC5990] text-lg" />,
    },
    {
        name: "Git",
        icon: <FaGitAlt className="text-[#F05032] text-lg" />,
    },
];