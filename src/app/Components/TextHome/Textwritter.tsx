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
        <div className="flex flex-col items-center justify-center  bg-cover bg-center  h-screen " style={{ backgroundImage: "url('/render3Op.jpeg')" }}>
            <div className="flex flex-col items-center justify-center absolute inset-0 bg-black bg-opacity-10 backdrop-blur-[0.2rem]">
                <TypewriterEffectSmooth words={words} /></div>
        </div>
    );
}
