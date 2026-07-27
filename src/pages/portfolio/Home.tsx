import SkillsList from "@/features/portfolio/sections/SkillsList"
import HeroPreview from "@/features/portfolio/sections/HeroPreview"
import ProjectsSection from "@/features/portfolio/sections/ProjectsSection"
import ExperienceList from "@/features/portfolio/sections/ExperienceList"
import ServicesSection from "@/features/portfolio/sections/ServicesSection"
import ContactSection from "@/features/portfolio/sections/ContactSection"
// import AboutMeSection from "@/features/portfolio/sections/AboutMeSection"

const Home = () => {
    return (
        <>
            <HeroPreview />
            {/* <AboutMeSection /> */}
            <ExperienceList />
            <SkillsList />
            <ProjectsSection limit={3} />
            <ServicesSection limit={6} />
            <ContactSection />
        </>
    )
}

export default Home