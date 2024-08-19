"use client";
import { HoverEffect } from "./CardHover";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-8 pt-[10rem]">
            <h3 className=" px-40 pb-10 text-4xl font-semibold   text-center">Our Services</h3>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "EXTERIOR RENDERS",
        description:
            "Elevate your project's curb appeal with high-quality exterior renders that showcase realistic and visually striking architectural designs.",
        link: "https://stripe.com",
    },
    {
        title: "INTERIOR RENDERS",
        description:
            "Transform your interior concepts into vivid, lifelike visuals with our detailed interior renders, perfect for design presentations and client approvals.",
        link: "https://netflix.com",
    },
    {
        title: "ANIMATIONS",
        description:
            "Engage your audience with captivating 3D animations that bring your architectural visions to life through dynamic, interactive visuals.",
        link: "https://google.com",
    },
    {
        title: "MODELING",
        description:
            "From conceptual designs to detailed models, our 3D modeling services provide accurate and realistic representations for any project.",
        link: "https://meta.com",
    },
    {
        title: "SOLIDWORKS",
        description:
            "Utilize our SolidWorks expertise to develop detailed and precise engineering models, enhancing your design workflow and project outcomes.",
        link: "https://amazon.com",
    },
    {
        title: "BIM SOLUTIONS",
        description:
            "Optimize your project management with our comprehensive BIM solutions, providing integrated and efficient workflows for building design and construction.",
        link: "https://microsoft.com",
    },
];
