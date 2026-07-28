

type LinkItem = {
    href: string;
    label: string;
    icon: React.ReactNode;
    variant?: "primary" | "outline";
};

type LinkButtonsProps = {
    links: LinkItem[];
};

const LinkButtons = ({ links }: LinkButtonsProps) => {
    if (!links.length) return null;

    return (
        <div className="flex gap-4  pt-8">
            {links.map(({ href, label, icon, variant = "outline" }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${variant === "primary"
                        ? "bg-primary text-white hover:bg-primary/85"
                        : "border border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5"
                        }`}
                >
                    {icon}
                    {label}
                </a>
            ))}
        </div>
    );
};

export default LinkButtons;