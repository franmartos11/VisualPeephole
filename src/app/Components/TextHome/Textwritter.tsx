"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "./TypeEfect";

export function TypewriterEffectSmoothDemoHome() {
    const words = [
        { text: "Cost" },
        { text: "Effective" },
        { text: "3D" },
        { text: "Visualization" },
        { text: "Services" },
        
    ];

    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            
            <Image
                src="/RenderHome.jpeg" 
                alt="Background Image"
                layout="fill" 
                objectFit="cover" 
                priority 
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-none flex flex-col items-center justify-center">
                <div className="hidden md:flex">
                    <TypewriterEffectSmooth words={words} />
                </div>
                
                <img className="text-white gowun-batang-regular text-center text-4xl md:hidden" src='/logo_with_white_text_and_outline.png'></img>
            </div>
        </div>
    );
}
