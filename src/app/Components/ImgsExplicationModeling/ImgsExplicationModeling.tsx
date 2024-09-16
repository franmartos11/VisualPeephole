"use client"
import { useState } from "react";

export default function ImgsExplicationModeling() {
    const testimonialsData = [
        
        {
            id: 3,
            title: "Commercial Storefronts Rendering",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/modeling1.jpg",
        },
        {
            id: 4,
            title: "Street View Storefronts Rendering",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/modeling2.jpg",
        },
        {
            id: 6,
            title: "Commercial Building with Storefronts Rendering",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/modeling4.jpg",
        },
        {
            id: 1,
            title: "Modern Commercial Complex Rendering",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/modeling.jpg",
        },
        {
            id: 5,
            title: "Twilight Street Scene Rendering",
            content: "Digital render of a modern bedroom with large floor-to-ceiling windows offering a stunning view of the sea, greenery, and distant wind turbines. The interior is contemporary and minimalistic, featuring a bed, chairs, and tables. Natural light floods the space, creating a bright and airy atmosphere, perfect for showcasing architectural design",
            author: "Joaquín Metral",
            position: "Cliente",
            image: "/modeling3.jpg",
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
                    Some of our latest 3D modelings
                </h2>
            </div>
            <div className="p-4 lg:ml-8 lg:mt-0 flex-col justify-center align-middle text-center">
                    <h3 className="text-2xl font-semibold">
                        {}
                    </h3>
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

                
            </div>
        </section>
    );
}