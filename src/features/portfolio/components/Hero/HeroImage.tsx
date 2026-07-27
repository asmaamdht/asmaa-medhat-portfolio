import profileImg from "@/assets/images/asmaa.png";

const HeroImage = () => {
    return (
        <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-72 w-72 overflow-hidden rounded-full ring-8 ring-white sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <img
                    src={profileImg}
                    alt="Asmaa Medhat"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}

export default HeroImage