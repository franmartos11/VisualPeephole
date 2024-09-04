import Image from "next/image";
export default function ContactCardImg() {
    return (
        <section className="min-h-screen pt-[8rem]  ">
            <div className="container px-6  mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-10">
                    <div className="lg:w-1/2 lg:mx-10 bg-gray-100 p-[2.5rem] rounded-2xl">
                        <h1 className="text-3xl font-semibold   capitalize text-black lg:text-5xl">
                            Contact Us
                        </h1>

                        <p className="mt-4 text-gray-800 ">
                            Were here to help! Fill out the form below, and we ll be happy to answer your questions, discuss potential collaborations, or explore your ideas.
                        </p>

                        <form
                            className="mt-12"
                            action="https://formsubmit.co/74c5c743d951c678ce020a82cc431fa4"
                            method="POST"
                        >
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-900">
                                        Full Name
                                    </label>
                                    <input
                                        type="Nombre"
                                        placeholder=""
                                        className="block w-full px-5 py-3 mt-2 border  rounded-md placeholder-gray-600 bg-gray-400 text-gray-800 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        className="block w-full px-5 py-3 mt-2   border  rounded-md placeholder-gray-600 bg-gray-400 text-gray-800 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-900">
                                        Phone Number
                                    </label>
                                    <input
                                        type="telefono"
                                        placeholder=""
                                        className="block w-full px-5 py-3 mt-2  border  rounded-md placeholder-gray-600 bg-gray-400 text-gray-800 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-900">
                                    Message
                                </label>
                                <input
                                    type="telefono"
                                    className="block w-full h-32 px-5 py-3 mt-2  border  rounded-md md:h-56 placeholder-gray-600 bg-gray-400 text-gray-800 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder=""
                                ></input>
                            </div>

                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md bg-gray-400 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-900 focus:ring-opacity-50">
                                Send
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 pt-[3rem] lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                        <Image
                            className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                            src="/logovp.png"
                            alt="aspa logo"
                            title="aspa logo"
                            width={612}
                            height={612}
                        ></Image>
                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-2 text-gray-900 "
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <span className="mx-2  truncate w-72 text-gray-600">
                                    <a
                                        title="link"
                                        href="https://www.google.com/maps/place/744+Jefferson+Ave,+Miami+Beach,+FL+33139,+EE.+UU./@25.7778414,-80.1401509,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9b48b5eb638bb:0x2320cda3a9e4490!8m2!3d25.7778414!4d-80.1375706!16s%2Fg%2F11c10j64my?hl=es&entry=ttu"
                                    >
                                        Miami, Fl
                                    </a>
                                </span>
                            </p>

                            <p className="flex items-start -mx-2 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-2 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>

                                <span className="mx-2  truncate w-72 ms:w-50 text-gray-600">
                                    <a
                                        title="link"
                                        href="tel:+17866544082?"
                                    >
                                        +1 (786) 654 4082
                                    </a>
                                </span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-2 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                <span className="mx-2  truncate w-72 text-gray-600">
                                    <a
                                        title="link"
                                        href="mailto:info@Visualpeephole.com"
                                    >
                                        info@Visualpeephole.com
                                    </a>
                                </span>
                            </p>
                        </div>

                        <div className="mt-6 w-80 md:mt-8 ">
                            <h3 className="text-gray-900 ">Follow Us</h3>

                            <div className="flex mt-4 -mx-1.5 space-x-5 ">
                            <a href="https://www.youtube.com/@visualpeephole" target="_blank" aria-label="See more about us in YouTube " rel="noopener noreferrer">
        
        <img alt="Youtube Logo" src="https://img.icons8.com/fluent/30/000000/youtube.png" />
    </a>
    <a href="https://www.linkedin.com/company/visual-peephole/?originalSubdomain=ar" target="_blank" aria-label="See more about us in Linkdin " rel="noopener noreferrer">
        <img alt="Linkdin Logo" src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://www.instagram.com/visual.peephole/" target="_blank" aria-label="See more about us in Instagram " rel="noopener noreferrer">
        <img alt="Instagram Logo" src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    
    <a href="https://ar.pinterest.com/visualpeephole/" target="_blank" aria-label="See more about us in Pinterest " rel="noopener noreferrer">
        <img alt="Pinterest Logo" src="https://img.icons8.com/fluent/30/000000/pinterest.png" />
    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
