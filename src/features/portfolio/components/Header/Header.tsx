import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "./Header.constants"

const Header = () => {
    const location = useLocation();

    const isLinkActive = (href: string) => {
        const [path, hash] = href.split("#");

        if (hash === "projects") {
            return location.pathname === "/projects" || (location.pathname === "/" && location.hash === "#projects");
        }
        if (hash === "services") {
            return location.pathname === "/services" || (location.pathname === "/" && location.hash === "#services");
        }
        if (hash === "home") {
            return location.pathname === "/" && (!location.hash || location.hash === "#home");
        }
        if (hash === "contact") {
            return location.pathname === "/" && location.hash === "#contact";
        }

        return location.pathname === path && location.hash === (hash ? `#${hash}` : "");
    };

    return (
        <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-6 lg:px-16  bg-background">
            <a href="/" className="text-2xl font-bold tracking-tight font-heading" >

                <span className="text-primary">A</span>
                <span>Smaa.</span>

            </a>

            <nav>
                <ul className="flex items-center gap-8 text-sm font-medium">
                    {NAV_LINKS.map((link) => {
                        const active = isLinkActive(link.href);
                        return (
                            <li key={link.label}>
                                <Link
                                    to={link.href}
                                    className={`transition-colors duration-300 ${active
                                        ? "text-primary before:content-['('] after:content-[')'] before:mr-1 after:ml-1"
                                        : "text-text hover:text-primary before:content-['('] after:content-[')'] before:mr-1 after:ml-1 before:invisible after:invisible"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <a
                href="/cv/Asmaa_Medhat_CV.pdf"
                download="Asmaa_Medhat_CV.pdf"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
                Download CV
            </a>
        </header>
    )
}

export default Header