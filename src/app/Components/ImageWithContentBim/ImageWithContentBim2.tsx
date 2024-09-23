import Link from "next/link";
import Image from "next/image";
export default function ImageWithContentBim2() {
    return (
        <section>
            <div className="mx-auto gowun-batang-regular max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/Various_09-min.jpeg"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl gowun-batang-bold text-black  ">
                        Elevate Your Projects with Our MEP and BIM Expertise
                        </h2>
                        <p className="mt-4 text-base text-gray-800">
                        
                        By utilizing BIM, we ensure precise coordination of all mechanical, electrical, and plumbing systems, reducing errors and rework. Our advanced digital fabrication techniques streamline the construction process, saving you time and costs while maintaining the highest standards of quality. With Visual Peephole, you gain a partner dedicated to optimizing your project outcomes through innovative BIM solutions.
                        </p>
                        <br></br>
                       
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
