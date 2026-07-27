import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSkills from "./FooterSkills";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

const Footer = () => {
    return (
        <footer className="relative z-20 bg-background py-12 px-6 sm:px-12 lg:px-16">
            {/* Footer Background & Glass Effect */}
            <div className="absolute inset-0 z-10 bg-white/20 dark:bg-black/10 backdrop-blur-md" />
            <div className="relative z-20 mx-auto max-w-7xl">

                {/* Upper Footer Columns */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-10 border-b border-primary/10">
                    <FooterBrand />
                    <FooterLinks />
                    <FooterSkills />
                    <FooterContact />
                </div>

                {/* Bottom Footer Row */}
                <FooterBottom />

            </div>
        </footer>
    );
};

export default Footer;