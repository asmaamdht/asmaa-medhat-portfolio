import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../Header/Header.constants";

const FooterLinks = () => {
    return (
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="text-lg font-bold font-heading text-text">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium text-text-muted">
                {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                        <NavLink
                            to={link.href}
                            className="transition-colors hover:text-primary"
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
