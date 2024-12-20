import Link from "next/link";
import Image from "next/image";
export default function ImageWithContent2Modeling() {
    return (
        <section>
            <div className="mx-auto gowun-batang-regular max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/Building Modeling_02.JPG"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl text-black font-bold ">
                        Turn Your Vision into Reality
                        </h2>
                        <p className="mt-4 text-base text-gray-800">
                        Transform your projects with our high-definition 3D object modeling services. Our team excels in creating detailed and photorealistic 3D models that bring your concepts to life. Whether you need product prototypes, architectural elements, or custom designs, our precision-crafted models ensure accuracy and realism. Enhance engagement with interactive 3D designs optimized for web performance. Trust our tailored solutions to meet the unique needs of every industry, ensuring timely delivery and exceptional quality.</p>
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
