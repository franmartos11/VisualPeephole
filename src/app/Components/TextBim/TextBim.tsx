"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "./TypeEfect";

export function TextBim() {
    const words = [
        { text: "Transform" },
        { text: "Your" },
        { text: "Projects" },
        { text: "with" },
        { text: "Our" },
        { text: "BIM" },
        { text: "Expertise" },
    ];

    return (
        <div className="relative gowun-batang-regular flex flex-col items-center justify-center h-screen">
            <Image
                src="/bim.webp"
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
                <h1 className="text-white gowun-batang-bold text-center text-4xl md:hidden">
                    Develop Your Projects with Our BIM Expertise
                </h1>
            </div>
        </div>
    );
}