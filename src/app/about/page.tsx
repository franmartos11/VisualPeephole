"use client";
import ImageWithContent2AboutUs from "../Components/AboutUS/ImageWithContent2AboutUs";
import ImageWithContentAboutUs from "../Components/AboutUS/ImageWithContentAboutUs";
import AboutUsTeam from "../Components/AboutUsTeam/AboutUsTeam";
import MoovingLogos from "../Components/MoovingLogos/MoovingLogos";


export default function about(){
    return(
        <>
        <ImageWithContentAboutUs></ImageWithContentAboutUs>
        <ImageWithContent2AboutUs></ImageWithContent2AboutUs>
        <AboutUsTeam></AboutUsTeam>
        <div className="mb-[8rem] text-center">
                <h2 className="text-blue-600 text-center font-medium mb-4 block">
                    Our Clients
                </h2>
                <h3 className="text-4xl  text-center font-bold">
                    Those who trust us
                </h3>
            </div>
        <MoovingLogos></MoovingLogos>
        </>
    )
}