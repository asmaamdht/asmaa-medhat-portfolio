import React from "react";

interface PhoneFrameProps {
    children: React.ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
    return (
        <div className="relative mx-auto w-full max-w-70 aspect-9/20 rounded-[40px] border-10 border-zinc-900 bg-zinc-950  ring-1 ring-white/10 overflow-hidden flex flex-col">
            {/* Camera notch / dynamic island style */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full mr-2"></div>
                <div className="w-8 h-1 bg-zinc-950 rounded-full"></div>
            </div>
            {/* Screen Content */}
            <div className="flex-1 w-full h-full relative overflow-hidden bg-black rounded-[30px]">
                {children}
            </div>
        </div>
    );
};

export default PhoneFrame;
