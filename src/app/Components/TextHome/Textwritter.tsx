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
            {/* Agregamos la imagen de fondo con el componente Image */}
            <Image
                src="/RenderHome.jpeg" // Ruta de la imagen
                alt="Background Image"
                layout="fill" // Ocupa todo el contenedor
                objectFit="cover" // Asegura que la imagen cubra el área
                priority // Hace que la imagen se cargue con alta prioridad
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-none flex flex-col items-center justify-center">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white text-center text-4xl md:hidden">
                    Visualpeephole, affordable 3D Rendering With Professional Excellence
                </h1>
            </div>
        </div>
    );
}
