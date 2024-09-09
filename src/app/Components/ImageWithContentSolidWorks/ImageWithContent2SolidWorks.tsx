import Link from "next/link";
import Image from "next/image";
export default function ImageWithContent2SolidWorks() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/Verteilergehause_2300002-202110.001-confidential.jpg"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl text-black font-bold ">
                        Top-Notch SolidWorks for Precision Engineering
                        </h2>
                        <p className="mt-4 text-base text-gray-800">
                        Unlock the full potential of your engineering projects with our expert SolidWorks 3D CAD services. Our team specializes in creating highly detailed and accurate 3D models that bring your designs to life. From product prototypes to complex assemblies, we ensure precision and quality in every project. Enhance your workflow with our custom solutions tailored to meet the unique needs of various industries. Trust us for timely delivery and exceptional results. Contact us today to elevate your design process with SolidWorks.</p>
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
