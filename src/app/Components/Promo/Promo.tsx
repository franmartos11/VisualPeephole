export default function Promo() {
    return (
        <section className="container mx-auto px-[1rem] lg:px-[10rem] md:px-[2rem] py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center gowun-batang-regular justify-between">

                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 gowun-batang-bold">NEED A QUOTE?</h1>
                    <p className="text-xl text-gray-600 mb-6">Your 3D renderings will look stunning. Our renderings meet all the requirements of your design, contributing to your projects success by impressing potential investors.</p>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-lg shadow-2xl p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                High-definition services
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Quick turnarounds
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Affordable prices
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                24/7 support    
                            </li>
                        </ul>
                        <div className="space-y-4">
                            <a href="#" className="block text-center bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}