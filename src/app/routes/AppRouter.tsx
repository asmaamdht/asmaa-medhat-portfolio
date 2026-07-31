import ProjectDetailsPage from "@/features/portfolio/pages/ProjectDetailsPage";
import PortfolioLayout from "@/layouts/PortfolioLayout/PortfolioLayout";
import NotFoundPage from "@/pages/NotFoundPage";
import ContactUsPage from "@/pages/portfolio/ContactUsPage";
import Home from "@/pages/portfolio/Home";
import ProjectsPage from "@/pages/portfolio/ProjectsPage";
import ServicesPage from "@/pages/portfolio/ServicesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<PortfolioLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetailsPage />} />
                    <Route path="contactus" element={<ContactUsPage />} />
                </Route>


                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;