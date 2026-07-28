import { serviceIcons } from "../../constants/seviceIcons";
import type { Service } from "../../types/service.types";

type Props = {
    service: Service;
    index: number;
};

const ServiceCard = ({ service, index }: Props) => {

    const Icon = serviceIcons[service.icon];
    const animationDelay = `${index * 3}s`;

    return (

        <div 
            className="group relative overflow-hidden rounded-xl bg-services-animated backdrop-blur-xl p-4 shadow-lg"
            style={{ animationDelay }}
        >

            <div
                className=" absolute -right-10 -top-10 h-20 w-20 rounded-full bg-primary/10 blur-3xl opacity-0 "
            />

            <div className="relative z-10">

                <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
                >

                    {Icon && <Icon className="text-xl" />}

                </div>

                <h3 className="mt-4 text-lg font-normal font-heading">
                    {service.title}
                </h3>

                <p className="mt-3 leading-7 text-text-muted">
                    {service.description}
                </p>

            </div>

        </div>

    );

};

export default ServiceCard;