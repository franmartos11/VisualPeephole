import Link from "next/link";
export default function ImageWithContentAnimations() {
    return (
        <section>
            <div className="mx-auto gowun-batang-regular max-w-screen-xl px-4 pt-[5rem] pb-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/5i.jpg"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl text-black font-bold ">
                        Bring Your Designs to Life with Animations
                        </h2>

                        <p className="mt-4 text-base text-gray-900">
                            Discover the power of our cutting-edge animation services. From detailed architectural walkthroughs to dynamic visualizations, our high-quality animations help you see every aspect of your project in motion. Whether its a residential development or a commercial space, our animations provide a realistic and engaging way to present your designs.
                            <br />
                            <br />
                            Explore our web to see how we transform concepts into captivating animations. Let us help you communicate your vision clearly and effectively, ensuring every detail is brought to life.
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
