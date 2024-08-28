"use client";
import { TypewriterEffectSmooth } from "./TypeEfect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Exterior",
        },
        {
            text: "Renders",
        },
        {
            text: "That",
        },
        {
            text: "Bring",
        },
        {
            text: "Your",
        },
        {
            text: "Vision",
        },
        {
            text: "to Life.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center  bg-cover bg-center  h-screen " style={{ backgroundImage: "url('/renderOut.webp')" }}>
            <div className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-10 backdrop-blur-[0.1rem]">
                <p className="text-neutral-300 dark:text-neutral-200 text-xs sm:text-base  ">
                    See How We Bring Outdoor Spaces to Life
                </p>
                <TypewriterEffectSmooth words={words} /></div>
        </div>
    );
}
