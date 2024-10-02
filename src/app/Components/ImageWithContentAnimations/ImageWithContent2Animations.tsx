import Link from "next/link";
import Image from "next/image";
export default function ImageWithContent2Animations() {
    return (
        <section>
            <div className="mx-auto gowun-batang-regular max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/1i.jpg"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl gowun-batang-bold text-black  ">
                            Visualize Your Projects with Precision  
                        </h2>
                        <p className="mt-4 text-base text-gray-800">
                        Our animation services offer a unique way to visualize your projects with unparalleled clarity. Experience the future of design with our immersive animations that showcase your ideas in a dynamic and interactive format. Perfect for client presentations, approvals, and project planning, our animations ensure you can make informed decisions with confidence.
                        <br />
                        <br />
                        See your designs come to life with our professional animation services. Browse our recent projects and discover how we can help you achieve your design goals.
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
