import Link from "next/link";
import Image from "next/image";
export default function ImageWithContentAboutUs() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-[7rem] sm:py-[8rem] sm:px-6 lg:py-[15rem] lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className=" h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        <Image
                            alt="quienes somos"
                            title="quienes somos"
                            src="/vp.png"
                            className=" h-[80%] rounded-lg w-full object-cover "
                            width={500}
                            height={100}
                        ></Image>
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl uppercase  font-bold">
                            Our Story
                        </h2>

                        <p className="mt-4 text-base text-gray-700">
                            Welcome to Visual Peephole LLC, a premier 3D visualization studio based in Miami, FL. We specialize in turning your concepts and ideas into stunning, photorealistic visual representations. Our team of experienced professionals is dedicated to providing high-quality services that cater to a wide range of needs in the architecture, real estate, and design industries.
                            <br />
                            <br />
                            Our commitment to excellence and innovation drives us to deliver exceptional results that exceed our clients expectations. Whether you are looking to impress potential investors, showcase your design concepts, or enhance project presentations, Visual Peephole is here to help you achieve your goals with unparalleled expertise and creativity.

                            Let us transform your ideas into visual masterpieces and bring your vision to life with our cutting-edge 3D visualization services.
                        </p>
                        <div className="mt-12 mb-10 text-center">
                            <Link
                                title="link"
                                href="/contact"
                                className="inline-block rounded bg-blue-400 px-[4rem] py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
                            >
                                Contct Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
