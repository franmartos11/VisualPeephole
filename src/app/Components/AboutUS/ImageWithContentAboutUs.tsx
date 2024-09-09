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
                            Visual Peephole LLC is a premier visualization studio specializing in architectural and engineering projects. Headquartered in Miami, FL, with sales representatives in Plano, TX, and San Francisco, CA, we are dedicated to delivering the highest quality visualization services.
                            <br />
                            <br />
                            As a team of artists committed to good taste and quality, we bring a refined aesthetic and meticulous attention to detail to every project. Our experienced professionals provide tailored solutions for the architecture, real estate, and design industries. Whether you’re aiming to impress potential investors, bring your design concepts to life, or elevate project presentations, Visual Peephole is here to help you succeed with unmatched expertise and creativity.
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
