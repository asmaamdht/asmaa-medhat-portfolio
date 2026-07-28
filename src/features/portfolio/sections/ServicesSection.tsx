
import { useServices } from "../hooks/useServices";
import ServiceCard from "../components/Services/ServiceCard";
import SectionHeader from "@/components/common/heading/SectionHeaders";
import ViewAllButton from "@/components/ui/button/ViewAllButton";

type ServicesSectionProps = {
    limit?: number;
};

const ServicesSection = ({ limit }: ServicesSectionProps) => {

    const { data: services = [] } = useServices();
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (

        <section
            id="services"
            className="pb-20 pt-10 bg-background"
        >

            <div className="max-w-7xl mx-auto px-4">

                <SectionHeader
                    title="Services & Expertise"
                    description="Building modern, scalable and user-friendly web applications."
                />

                <div className=" mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

                    {displayedServices.map((service, index) => (

                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />

                    ))}

                </div>

                {limit && (
                    <ViewAllButton to={"/services"} label="View all services" />
                )}

            </div>

        </section>

    );

};

export default ServicesSection;