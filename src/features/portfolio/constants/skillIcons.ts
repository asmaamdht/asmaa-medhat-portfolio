import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiTailwindcss,
    SiBootstrap,
    SiAntdesign,
    SiAxios,
    SiReactquery,
    SiGit,
    SiGithub,
    SiPostman,
    SiFirebase,
    SiFlutter,
    SiJquery,
    SiVite,
    SiSwagger,
    SiSass,
} from "react-icons/si";

import { SiCss } from "react-icons/si";

import { FaClock, FaComments, FaLightbulb, FaMobileAlt, FaPuzzlePiece } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import {
    MdOutlineInstallDesktop,
    MdWifiOff,
    MdOutlineHomeRepairService,
} from "react-icons/md";

import { TbWorldWww } from "react-icons/tb";

export const skillIcons = {
    React: { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
    HTML5: { icon: SiHtml5, color: "#E34F26" },
    CSS3: { icon: SiCss, color: "#1572B6" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
    "React Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
    "Ant Design": { icon: SiAntdesign, color: "#1677FF" },
    SCSS: { icon: SiSass, color: "#CC6699" },
    Apidog: { icon: TbApi, color: "#3B82F6" },
    "REST API": { icon: TbApi, color: "#10B981" },
    Axios: { icon: SiAxios, color: "#5A29E4" },
    "React Query": { icon: SiReactquery, color: "#FF4154" },
    Git: { icon: SiGit, color: "#F05032" },
    GitHub: { icon: SiGithub, color: "#181717" },
    "VS Code": { icon: VscVscode, color: "#007ACC" },
    Postman: { icon: SiPostman, color: "#FF6C37" },
    Firebase: { icon: SiFirebase, color: "#FFCA28" },
    Flutter: { icon: SiFlutter, color: "#02569B" },
    jQuery: { icon: SiJquery, color: "#0769AD" },
    Vite: { icon: SiVite, color: "#646CFF" },
    Swagger: { icon: SiSwagger, color: "#85EA2D" },
    "React Native": { icon: FaMobileAlt, color: "#61DAFB" },

    "Problem Solving": { icon: FaPuzzlePiece, color: "#8B5CF6" },
    Communication: { icon: FaComments, color: "#0EA5E9" },
    "Time Management": { icon: FaClock, color: "#F59E0B" },
    Creativity: { icon: FaLightbulb, color: "#FACC15" },

    "Progressive Web Apps": { icon: TbWorldWww, color: "#6366F1" },
    "Service Worker": { icon: MdOutlineHomeRepairService, color: "#10B981", },
    "Web App Manifest": { icon: TbApi, color: "#F59E0B" },
    "Offline Support": { icon: MdWifiOff, color: "#EF4444" },
    "Installable App": { icon: MdOutlineInstallDesktop, color: "#8B5CF6" },
};