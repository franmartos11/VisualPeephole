import Link from "next/link";
import Image from "next/image";
export default function ImageWithContent() {
    return (
        <section>
            <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt="crecimiento"
                            title="crecimiento"
                            src="/render3.jpeg"
                            className="h-[90%] rounded-lg w-full object-cover"
                            width={1500}
                            height={800}
                        ></Image>
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl text-black font-bold ">
                            Transform Your Outdoor Spaces
                        </h2>

                        <p className="mt-4 text-base text-gray-900">
                            Explore how our cutting edge exterior renders can bring your outdoor projects to life. From stunning residential landscapes to innovative commercial designs, our high quality visualizations help you envision every detail with clarity. Whether you re planning a garden, patio, or entire facade, our team delivers precise and engaging renders that capture your vision and inspire possibilities.
                            <br />
                            <br />
                            Discover a selection of our recent projects and see how we turn concepts into vivid, realistic images. Let us help you make informed decisions and achieve your design goals with confidence.
                        </p>
                        <div className="mt-12 mb-10 text-center">
                            <Link
                                title="link"
                                href="/contact"
                                className="inline-block rounded bg-gray-500 px-[4rem] py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
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
