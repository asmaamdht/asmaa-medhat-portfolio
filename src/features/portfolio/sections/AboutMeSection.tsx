import profileImg from "/images/profile/asmaa.png";

const AboutMeSection = () => {
    return (
        <section id="about" className="relative min-h-screen w-full px-6 py-20 sm:px-6 lg:px-16 overflow-hidden bg-background">
            {/* Gradient blobs */}
            <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#f2a65a" }} />
            <div className="absolute bottom-20 left-5 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#1d9e75" }} />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Profile Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Decorative circles */}
                            <div
                                className="absolute -top-8 -left-8 w-40 h-40 rounded-full"
                                style={{ backgroundColor: "#f2a65a", opacity: 0.3 }}
                            />
                            <div
                                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full"
                                style={{ backgroundColor: "#1d9e75", opacity: 0.2 }}
                            />

                            {/* Profile Image */}
                            <div className="relative h-80 w-80 sm:h-96 sm:w-96 overflow-hidden rounded-full ring-8 ring-white shadow-2xl">
                                <img
                                    src={profileImg}
                                    alt="Asmaa Medhat"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex flex-col justify-center gap-8 ">
                        {/* Header */}
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#f2a65a" }}>
                                About Me
                            </p>
                            <p className="text-xl sm:text-xl font-bold mb-6" style={{ fontFamily: "'Baloo 2', cursive" }}>
                                Building Modern Web Experiences
                            </p>
                            <p className="text-gray-300 text-base leading-relaxed mb-8">
                                I'm a passionate Frontend Developer dedicated to crafting beautiful, intuitive, and high-performance web applications. With 2 years of experience in modern web development, I specialize in React, TypeScript, and Tailwind CSS to bring your ideas to life with clean, maintainable code.
                            </p>
                        </div>

                        {/* Contact Info Box */}
                        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#f2a65a" }}>
                                        Name
                                    </p>
                                    <p className="text-white font-semibold">Asmaa Medhat</p>
                                </div>

                                {/* Phone */}
                                <div>
                                    <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#f2a65a" }}>
                                        Phone
                                    </p>
                                    <p className="text-white font-semibold">+201023456789</p>
                                </div>

                                {/* Email */}
                                <div>
                                    <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#f2a65a" }}>
                                        Email
                                    </p>
                                    <p className="text-white font-semibold text-sm break-all">asmaa@example.com</p>
                                </div>

                                {/* Twitter */}
                                <div>
                                    <p className="text-xs font-semibold uppercase mb-2" style={{ color: "#f2a65a" }}>
                                        Twitter
                                    </p>
                                    <p className="text-white font-semibold">@AsmaaMedhat</p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                                style={{
                                    backgroundColor: "#f2a65a",
                                    cursor: "pointer"
                                }}
                            >
                                Contact me
                                <span className="text-lg">→</span>
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                                style={{
                                    borderColor: "#f2a65a",
                                    color: "#f2a65a"
                                }}
                            >
                                Download my resume
                                <span className="text-lg">📥</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
