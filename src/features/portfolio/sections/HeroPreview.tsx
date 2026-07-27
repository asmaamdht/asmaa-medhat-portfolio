
import HeroContent from "@/features/portfolio/components/Hero/HeroContent";
import HeroImage from "@/features/portfolio/components/Hero/HeroImage";
import HeroInfo from "@/features/portfolio/components/Hero/HeroInfo";


export default function HeroPreview() {


    return (
        <section
            id="home"
            className="w-full  px-10 py-10 sm:px-6 lg:px-20 lg:py-25 bg-background text-text font-font-body"
        >
            <div className="mx-auto max-w-7xl">
                <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr]">
                    <HeroContent />
                    <HeroImage />
                    <HeroInfo />
                </div>
            </div>
        </section >
    );
}