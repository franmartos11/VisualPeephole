"use client";
import { TypewriterEffectSmooth } from "./TypeEfect";
export function TextModeling() {
    const words = [
        {
            text: "High",
        },
        {
            text: "Quality",
        },
        {
            text: "3D",
        },
        {
            text: "Object",
        },
        {
            text: "Modeling",
        },
        {
            text: "Services",
        },
        
    ];
    return (
        <div className="relative flex flex-col items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bedModeling.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-10  flex flex-col items-center justify-center backdrop-blur-[0.1rem]">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white text-center text-4xl md:hidden">
                High Quality 3D Object Modeling Services
                </h1>
            </div>
        </div>
    );
}
