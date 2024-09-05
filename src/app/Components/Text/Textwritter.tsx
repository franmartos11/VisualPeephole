"use client";
import { TypewriterEffectSmooth } from "./TypeEfect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Exterior",
        },
        {
            text: "Renderings",
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
        <div className="relative flex flex-col items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('/12.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-none flex flex-col items-center justify-center">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white text-center text-4xl md:hidden">
                Exterior Renderings That Bring Your Vision To Life
                </h1>
            </div>
        </div>
    );
}
