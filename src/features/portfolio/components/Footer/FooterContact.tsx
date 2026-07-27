import { MapPin, Mail } from "lucide-react";

const FooterContact = () => {
    return (
        <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-lg font-bold font-heading text-text">Get In Touch</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-text-muted">
                <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <MapPin size={16} />
                    </span>
                    <span>Cairo, Egypt</span>
                </li>
                <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                        <Mail size={16} />
                    </span>
                    <a href="mailto:asmaamedhat507@gmail.com" className="hover:text-primary transition-colors">
                        asmaamedhat507@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterContact;
