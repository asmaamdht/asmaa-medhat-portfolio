import { SOCIAL_LINKS } from "./Hero.constants"

const HeroContent = () => {
    return (
        <div className="relative order-2 lg:order-1">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Hy! I Am
            </h1>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl" style={{ fontFamily: "'Baloo 2', cursive", color: "#f2a65a" }}>
                Asmaa Medhat.
            </h1>

            <svg viewBox="0 0 220 140" className="mt-6 hidden h-28 w-52 md:block" style={{ color: "#1d9e75" }} aria-hidden="true">
                <path d="M10 20c40 0 20 70 70 70s60-70 110-55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
                <path d="M185 25l10 10-14 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="mt-10 flex items-center gap-3">
                <span className="text-4xl font-bold" style={{ fontFamily: "'Baloo 2', cursive", color: "#0f4a45" }}>04</span>
                <span className="text-xs font-semibold uppercase leading-tight">
                    Years
                    <br />
                    Experience
                </span>
            </div>

            <ul className="mt-8 flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                    <li key={s.label}>
                        <a href={s.href} target="_blank" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#f2a65a" }}>
                            {s.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default HeroContent