export default function FeatureModeling() {
    return (
        <div className="max-w-screen-xl gowun-batang-regular mx-auto py-8 px-4 lg:py-16 lg:px-6">
            <div className="text-center mb-10">
                <h2 className="text-4xl  text-black font-bold">Why Choose Our 3D Modeling Services?</h2>
            </div>

            <div className="flex flex-col lg:flex-row">

                <div className=" p-[1rem] md:w-[35rem] md:h-[35rem] mx-auto overflow-hidden">
                    <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/modeling3.jpg"
                        alt="can_help_bannerr"
                    />
                </div>


                <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">High-Quality Visuals</h3>
                            <p className="text-sm"> Experience unparalleled realism with our meticulously crafted 3D models, tailored to highlight every aspect of your design.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Detailed Insights</h3>
                            <p className="text-sm"> Gain valuable insights into how your project will look in real life, helping you make informed decisions before production begins.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Custom Solutions</h3>
                            <p className="text-sm">Whether you need detailed object models, modern facades, or complete environments, our bespoke renders are tailored to your unique vision and requirements.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Timely Delivery</h3>
                            <p className="text-sm">Rely on us for timely and reliable delivery, ensuring your project stays on track and within budget.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}