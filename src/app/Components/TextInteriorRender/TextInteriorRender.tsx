"use client";
import Image from 'next/image';
import { TypewriterEffectSmooth } from "./TypeEfect";

export function TextInteriorRender() {
    const words = [
        { text: "Interior" },
        { text: "Renderings" },
        { text: "That" },
        { text: "Bring" },
        { text: "Your" },
        { text: "Vision" },
        { text: "to Life.", className: "text-blue-500 dark:text-blue-500" },
    ];

    return (
        <div className="relative gowun-batang-bold flex flex-col items-center justify-center h-screen bg-cover bg-center">
            {/* Agregamos una imagen de fondo con el componente Image */}
            <Image
                src="/8.jpg" // Ruta de la imagen
                alt="Background Image"
                layout="fill" // Ocupa todo el contenedor
                objectFit="cover" // Asegura que la imagen cubra el área
                priority // Hace que la imagen se cargue con alta prioridad
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center backdrop-blur-[0.03rem]">
                <div className="hidden md:flex">
                    {/* Mostrar TypewriterEffectSmooth solo en pantallas mayores a 768px */}
                    <TypewriterEffectSmooth words={words} />
                </div>
                <h1 className="text-white gowun-batang-bold text-center text-4xl md:hidden">
                    Visualpeephole, affordable 3D Rendering With Professional Excellence
                </h1>
            </div>
        </div>
    );
}
