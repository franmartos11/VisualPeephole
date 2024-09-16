"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "./TypeEfect";

export function TextModeling() {
    const words = [
        { text: "High" },
        { text: "Quality" },
        { text: "3D" },
        { text: "Object" },
        { text: "Modeling" },
        { text: "Services" },
    ];

    return (
        <div className="relative gowun-batang-regular flex flex-col items-center justify-center h-screen">
            {/* Agregamos la imagen de fondo con el componente Image */}
            <Image
                src="/bedModeling.jpg" // Ruta de la imagen
                alt="Background Image"
                layout="fill" // Ocupa todo el contenedor
                objectFit="cover" // Asegura que la imagen cubra el área
                priority // Hace que la imagen se cargue con alta prioridad
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-[0.1rem] flex flex-col items-center justify-center">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white gowun-batang-bold text-center text-4xl md:hidden">
                    High Quality 3D Object Modeling Services
                </h1>
            </div>
        </div>
    );
}