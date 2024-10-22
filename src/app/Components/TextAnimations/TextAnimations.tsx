"use client";
import { TypewriterEffectSmooth } from "./TypeEfect";

export function TextAnimations() {
    const words = [
        { text: "Experience" },
        { text: "Your" },
        { text: "Designs" },
        { text: "in" },
        { text: "Motion", className: "text-blue-500 dark:text-blue-500" },
    ];

    return (
        <div className="relative gowun-batang-bold flex flex-col items-center justify-center h-screen bg-cover bg-center">
            {/* Agregamos un video de fondo */}
            <video
                src="/Animation2.mp4" // Ruta del video
                autoPlay
                loop
                muted // Desactiva el sonido
                playsInline
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-[0.03rem]">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white gowun-batang-bold text-center text-4xl md:hidden">
                    Experience Your Designs in Motion
                </h1>
            </div>
        </div>
    );
}