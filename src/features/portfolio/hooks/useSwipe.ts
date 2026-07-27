import { useState } from "react";

type Props = {
    onNext: () => void;
    onPrev: () => void;
};

export const useSwipe = ({ onNext, onPrev }: Props) => {

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    return {

        onTouchStart: (e: React.TouchEvent) => {

            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);

        },

        onTouchMove: (e: React.TouchEvent) => {

            setTouchEnd(e.targetTouches[0].clientX);

        },

        onTouchEnd: () => {

            if (!touchStart || !touchEnd) return;

            const distance = touchStart - touchEnd;

            if (distance > minSwipeDistance) {

                onNext();

            }

            if (distance < -minSwipeDistance) {

                onPrev();

            }

        }

    };

};