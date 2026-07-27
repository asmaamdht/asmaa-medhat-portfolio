import {
    FaCode,
    FaReact,
    FaMobileAlt,
    FaLayerGroup,
    FaTachometerAlt,
    FaGitAlt,
} from "react-icons/fa";

import { MdDashboard, MdApi } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SiFirebase } from "react-icons/si";
import { MdInstallDesktop } from "react-icons/md";


export const serviceIcons = {
    code: FaCode,
    react: FaReact,
    responsive: HiOutlineSquares2X2,
    api: MdApi,
    dashboard: MdDashboard,
    mobile: FaMobileAlt,
    firebase: SiFirebase,
    components: FaLayerGroup,
    performance: FaTachometerAlt,
    git: FaGitAlt,
    pwa: MdInstallDesktop,
};

export type ServiceIcon = keyof typeof serviceIcons;