export default function FeatureExteriorBim() {
    return (
        <div className="max-w-screen-xl gowun-batang-regular mx-auto py-8 px-4 lg:py-16 lg:px-6">
            <div className="text-center mb-10">
                <h2 className="text-4xl text-black font-bold">Why Choose Our Bim Services?</h2>
            </div>

            <div className="flex flex-col lg:flex-row">

                <div className=" p-[1rem] md:w-[35rem] md:h-[35rem] mx-auto overflow-hidden">
                    <img
                        className="w-full h-full object-cover rounded-lg "
                        src="/render.webp"
                        alt="can_help_banner"
                    />
                </div>


                <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Expert Coordination</h3>
                            <p className="text-sm">Our team excels in managing complex MEP projects, ensuring every detail is meticulously planned and executed.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Enhanced Efficiency</h3>
                            <p className="text-sm"> By leveraging advanced digital fabrication techniques, we streamline the construction process, reducing time and costs.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Seamless Integration</h3>
                            <p className="text-sm">We work closely with your team to ensure our solutions fit perfectly within your existing workflows, enhancing overall productivity.</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 mb-4 px-2 ">
                        <div className="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
                            <h3 className="text-2xl font-bold text-md mb-6">Prefabrication Advantage</h3>
                            <p className="text-sm">Take the leap to prefab with our innovative solutions that bring precision and efficiency to your projects.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}