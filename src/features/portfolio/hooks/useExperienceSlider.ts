import { useEffect, useState } from "react";

export const useExperienceSlider = (length: number) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        if (length <= 1) return;

        const interval = setInterval(() => {

            setCurrentIndex((prev) => (prev + 1) % length);

        }, 5000);

        return () => clearInterval(interval);

    }, [length]);

    const next = () => {

        setCurrentIndex((prev) => (prev + 1) % length);

    };

    const previous = () => {

        setCurrentIndex((prev) => (prev - 1 + length) % length);

    };

    return {

        currentIndex,
        setCurrentIndex,
        next,
        previous

    };
};