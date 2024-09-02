"use client";
import { TypewriterEffectSmooth } from "./TypeEfect";
export function TypewriterEffectSmoothDemoHome() {
    const words = [
        
        {
            text: "Affordable",
        },
        {
            text: "3D",
        },
        {
            text: "Rendering",
        },
        {
            text: "with",
        },
        {
            text: "Professional",
        },
        {
            text: "Excellence",
        },
        
    ];
    return (
        <div className="relative flex flex-col items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: "url('/RenderHome.jpeg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-none flex flex-col items-center justify-center">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white text-center text-4xl md:hidden">
                    
                    Affordable 3D Rendering With Professional Excellence
                </h1>
            </div>
        </div>
    );
}
