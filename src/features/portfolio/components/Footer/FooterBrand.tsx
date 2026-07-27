import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SOCIAL_LINKS } from "../Hero/Hero.constants";

const FooterBrand = () => {
    const getSocialIcon = (label: string) => {
        switch (label.toLowerCase()) {
            case "facebook":
                return <FaFacebookF size={16} />;
            case "github":
                return <FaGithub size={16} />;
            case "linkedin":
                return <FaLinkedinIn size={16} />;
            default:
                return null;
        }
    };

    return (
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a href="/" className="text-2xl font-bold tracking-tight font-heading">
                <span className="text-primary">A</span>
                <span className="text-text">Smaa.</span>
            </a>
            <p className="text-sm leading-relaxed text-text-muted max-w-sm">
                Frontend Developer passionate about building fast, scalable, and user-focused web applications with rich visual experiences.
            </p>

            {/* Social Buttons */}
            <ul className="flex items-center gap-3 mt-2">
                {SOCIAL_LINKS.map((social) => (
                    <li key={social.label}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-white/40 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-md"
                        >
                            {getSocialIcon(social.label)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterBrand;
