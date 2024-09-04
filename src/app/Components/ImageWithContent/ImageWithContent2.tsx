import Link from "next/link";
import Image from "next/image";
export default function ImageWithContent2() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                        
                        <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/12.jpg"
                        alt="can_help_banner"
                    />
                    </div>
                    <div className="lg:py-24">
                        <h2 className="text-4xl text-black font-bold ">
                        Turn Your Vision into Reality
                        </h2>
                        <p className="mt-4 text-base text-gray-800">
                        With our exterior visualizations, you can confidently move forward with your project, knowing exactly how it will look upon completion. Our realistic and high definition renders serve as a powerful tool for presentations, client approvals, and project planning. See your ideas come to life and make informed decisions with our professional rendering services.
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
