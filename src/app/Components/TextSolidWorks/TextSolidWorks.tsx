"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "./TypeEfect";

export function TextSolidWorks() {
    const words = [
        { text: "Top-Rated" },
        { text: "SolidWorks" },
        { text: "Design" },
        { text: "and" },
        { text: "Engineering" },
        { text: "Services" },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            
            <Image
                src="/solidworks2.jpg" 
                alt="Background Image"
                layout="fill" 
                objectFit="cover" 
                priority 
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-[0.2rem] flex flex-col items-center justify-center">
                <div className="hidden md:flex">
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white text-center text-4xl md:hidden">
                Top-Rated SolidWorks Design and Engineering Services
                </h1>
            </div>
        </div>
    );
}