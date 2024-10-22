"use client"
import { useState } from "react";

export default function IImgsExplicationAnimations() {
    const testimonialsData = [
        {
            id: 1,
            title: "Modern Commercial Complex Rendering",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/10.jpg",
        },
        
        
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex(
            (prevIndex) => (prevIndex + 1) % testimonialsData.length
        );
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex(
            (prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1)
        );
    };

    const currentTestimonial = testimonialsData[currentTestimonialIndex];

    return (
        <section className="relative gowun-batang-regular flex flex-col items-center pt-[5rem]">
            <div className="text-center mb-8">
                <h2 className="text-4xl text-black pt-16 pb-8 font-semibold">
                    Other Animations
                </h2>
            </div>
            <div className="p-4 lg:ml-8 lg:mt-0 flex-col justify-center align-middle text-center">
                    <h3 className="text-2xl font-semibold">
                        {}
                    </h3>
                </div>
            <div className="relative flex flex-col items-center w-full px-6 mx-auto">
                
                <video
                src="/Timelapse.mp4" // Ruta del video
                autoPlay
                loop
                muted // Desactiva el sonido
                playsInline
                className="object-cover object-center w-full lg:w-[80%] rounded-lg h-[38rem]"
            />

                <div className="absolute inset-0 flex items-center justify-between px-[12%]">
                    
                </div>

                
            </div>
        </section>
    );
}