import Link from "next/link";
import Image from "next/image";
import { CompareDemo } from "../CompareComponent/Compare";
export default function ImageWithContentBim() {
    return (
        <section>
            <div className="mx-auto gowun-batang-regular max-w-screen-xl px-4 pt-[5rem] pb-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/Various_03-min.png"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl gowun-batang-bold text-black ">
                        MEP Modeling, Coordination & Digital Fabrication
                        </h2>

                        <p className="mt-4 text-base text-gray-900">
                        Unlock the full potential of your projects with our comprehensive MEP services. At Visual Peephole, we take complete ownership of the Model-Coordination process, acting as an extension of your in-house BIM team. Our expertise enhances your teams capacity, ensuring seamless integration and coordination across all mechanical, electrical, and plumbing systems.
                            <br />
                            <br />
                            Experience the impact of our expert MEP modeling, precise coordination, and advanced digital fabrication services. Together, we can build a sustainable and innovative future. Join us and see the difference our expertise can make.
                        </p>
                        <div className="mt-12 mb-10 text-center">
                            <Link
                                title="link"
                                href="/contact"
                                className="inline-block rounded bg-gray-500 px-[4rem] py-3 text-sm font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
