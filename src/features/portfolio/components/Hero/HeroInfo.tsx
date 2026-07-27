// import StarIcon from '@/assets/icons/StarIcon'

import { TECH_STACK } from "./Hero.constants"

const HeroInfo = () => {
    return (
        <div className="order-3 flex flex-col items-start gap-10 lg:items-end">
            <p className="max-w-80 text-right text-sm font-semibold leading-relaxed text-text-muted ">
                Frontend Developer passionate about building fast, scalable, and user-focused web applications.
            </p>

            {/* <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md">
                <div>
                    <p className="text-xs font-semibold">12k Reviews On</p>
                    <div className="mt-1 flex items-center gap-2">
                        <div className="flex" aria-hidden="true">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                        <div className="flex -space-x-2">
                            {["#f2a65a", "#7bb0d9", "#c97b7b"].map((c, i) => (
                                <span key={i} className="h-5 w-5 rounded-full ring-2 ring-white" style={{ backgroundColor: c }} />
                            ))}
                        </div>
                        <span className="text-sm font-bold" style={{ color: "#0f4a45" }}>4.9</span>
                    </div>
                </div>
            </div> */}


            <div className="rounded-md bg-white px-5 py-4">
                <p className="text-xs font-semibold text-primary">
                    Tech Stack
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {TECH_STACK.map((tech) => (
                        <span
                            key={tech.name}
                            className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-sm font-medium"
                        >
                            {tech.icon}
                            <span>{tech.name}</span>
                        </span>
                    ))}
                </div>
            </div>
            <p className="mt-2 text-right text-3xl leading-none font-hand">
                Frontend
                <br />
                <span className="text-primary">Developer.</span>
            </p>
        </div>
    )
}

export default HeroInfo