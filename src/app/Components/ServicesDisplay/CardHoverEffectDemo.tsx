"use client";
import { HoverEffect } from "./CardHover";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-[80rem] gowun-batang-regular mx-auto px-8 pt-[4rem]">
            <h3 className=" pb-0 text-4xl font-semibold gowun-batang-bold   text-center">Our Services</h3>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "EXTERIOR RENDERINGS",
        description:
            "Elevate your curb appeal with high-quality, photorealistic exterior renders that capture every detail of your architectural designs.",
        link: "/ExteriorRenders",
    },
    {
        title: "INTERIOR RENDERINGS",
        description:
            "Turn your interior concepts into vivid, lifelike images. Our detailed renders ensure that your designs resonate with clients and stakeholders.",
        link: "/InteriorRenders",
    },
    {
        title: "ANIMATIONS",
        description:
            "Engage your audience with immersive 3D animations that bring your architectural ideas to life, offering a dynamic visual experience.",
        link: "/Animations",
    },
    {
        title: "MODELING",
        description:
            "From concept to completion, our 3D modeling services provide accurate, realistic representations, ensuring flawless execution of your projects.",
        link: "/Modeling",
    },
    {
        title: "BIM SOLUTIONS",
        description:
            "Optimize project efficiency with our BIM solutions, delivering integrated workflows for seamless design and construction management.",
        link: "/bim",
    },
    {
        title: "SOLIDWORKS",
        description:
            "Utilize our precision-driven SolidWorks expertise to create detailed engineering models that elevate your design process and project outcomes.",
        link: "/SolidWorks",
    },
   
];
