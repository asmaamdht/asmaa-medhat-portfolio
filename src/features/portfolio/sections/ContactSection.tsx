import ContactForm from "../components/Contact/ContactForm";
import workImage from "/images/profile/me_work.png";
import SectionSubHeader from "@/components/common/heading/SectionSubHeader";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-background pt-10 pb-0"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 relative z-10">

                <div className="flex justify-center text-center">
                    <SectionSubHeader title="Get In Touch" description="Open to new opportunities and collaborations." />
                </div>

                <div className=" flex justify-center lg:justify-end">
                    <div className="w-full max-w-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Overlapping Image */}
            <div className="relative mx-auto mt-6 h-60 w-80 overflow-hidden lg:absolute lg:bottom-0 lg:h-105 lg:w-140 lg:left-10 lg:xl:left-40 lg:mt-0 z-0">
                <div className="absolute left-0 top-12 lg:top-20 flex h-90 w-80 lg:h-140 lg:w-140 items-end justify-center rounded-full bg-white/20 dark:bg-black/10 backdrop-blur-md">
                    <img
                        src={workImage}
                        alt="Asmaa"
                        className="absolute -top-12 lg:-top-20 h-68 lg:h-120 w-80 lg:w-140 max-w-none object-contain lg:translate-x-6"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
