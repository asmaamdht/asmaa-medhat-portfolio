import Footer from "@/features/portfolio/components/Footer/Footer";
import Header from "@/features/portfolio/components/Header/Header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const timer = setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
};

const PortfolioLayout = () => {
    return (
        <>
            <ScrollToHash />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default PortfolioLayout;