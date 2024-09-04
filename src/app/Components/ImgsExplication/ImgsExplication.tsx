"use client"
import { useState } from "react";

export default function ImgsExplication() {
    const testimonialsData = [
        {
            id: 1,
            title: "Name of Proyect",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/renderOut2.webp",
        },
        {
            id: 2,
            title: "Name of Proyect",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/render.webp",
        },
        {
            id: 3,
            title: "Name of Proyect",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/1.jpg",
        },
        {
            id: 4,
            title: "Name of Proyect",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/2.jpg",
        },
        {
            id: 5,
            title: "Name of Proyect",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/4.jpg",
        },
        {
            id: 6,
            title: "Name of Proyect",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/12.jpg",
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
        <section className="relative flex flex-col items-center pt-[5rem]">
            <div className="text-center mb-8">
                <h2 className="text-4xl text-black pt-16 pb-8 font-semibold">
                    Some of our latest exterior renders.
                </h2>
            </div>

            <div className="relative flex flex-col items-center w-full px-6 mx-auto">
                <img
                    className="object-cover object-center w-full lg:w-[80%] rounded-lg h-[38rem]"
                    src={currentTestimonial.image}
                    alt={currentTestimonial.title}
                ></img>

                <div className="absolute inset-0 flex items-center justify-between px-[12%]">
                    <button
                        title="Previous Testimonial"
                        onClick={handlePrevTestimonial}
                        className="p-2 transition-colors duration-300 border rounded-full border-gray-700 bg-white hover:bg-gray-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        title="Next Testimonial"
                        onClick={handleNextTestimonial}
                        className="p-2 transition-colors duration-300 border rounded-full border-gray-700 bg-white hover:bg-gray-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="p-4 lg:ml-8 lg:mt-0 flex-col justify-center align-middle text-center">
                    <h3 className="text-2xl font-semibold">
                        {currentTestimonial.title}
                    </h3>

                    <p className="px-[15%] mt-6 text-gray-800">
                        {currentTestimonial.content}
                    </p>
                </div>
            </div>
        </section>
    );
}