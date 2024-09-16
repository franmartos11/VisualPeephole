import Link from "next/link";
export default function ImageWithContentSolidWorks() {
    return (
        <section>
            <div className="mx-auto gowun-batang-regular max-w-screen-xl px-4 pt-[5rem] pb-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/WELLE-2.jpg"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl text-black font-bold ">
                        Innovative SolidWorks Solutions for Advanced Engineering
                        </h2>

                        <p className="mt-4 text-base text-gray-900">
                        Transform your engineering projects with our innovative SolidWorks solutions. Our team of experts excels in delivering high-precision 3D CAD models that meet the rigorous demands of modern engineering. From initial concept to final product, we provide comprehensive support to ensure your designs are both functional and manufacturable. Leverage our state-of-the-art technology and industry expertise to streamline your development process. Contact us today to discover how our SolidWorks services can elevate your engineering projects to new heights.
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
