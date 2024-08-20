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
                                        className="block w-full px-5 py-3 mt-2 border  rounded-md placeholder-gray-600 bg-gray-300 text-gray-300 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        className="block w-full px-5 py-3 mt-2   border  rounded-md placeholder-gray-600 bg-gray-300 text-gray-300 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-900">
                                        Phone Number
                                    </label>
                                    <input
                                        type="telefono"
                                        placeholder=""
                                        className="block w-full px-5 py-3 mt-2  border  rounded-md placeholder-gray-600 bg-gray-300 text-gray-300 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-900">
                                    Menssage
                                </label>
                                <input
                                    type="telefono"
                                    className="block w-full h-32 px-5 py-3 mt-2  border  rounded-md md:h-56 placeholder-gray-600 bg-gray-300 text-gray-300 border-white focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder=""
                                ></input>
                            </div>

                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>

                                <span className="mx-2  truncate w-72 text-gray-600">
                                    <a
                                        title="link"
                                        href="https://www.google.com/maps/place/ASPA+software/@-31.4105525,-64.1954704,17z/data=!3m1!4b1!4m6!3m5!1s0x94329971ec68f335:0x312ba76f9ee8aeac!8m2!3d-31.4105525!4d-64.1928955!16s%2Fg%2F11kjyf86bj?entry=ttu"
                                    >
                                        744 Jefferson Ave, Miami, FL 33139
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
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>

                                <span className="mx-2  truncate w-72 ms:w-50 text-gray-600">
                                    <a
                                        title="link"
                                        href="https://wa.me/5493513140217?text=Hola,%20quiero%20enviar%20un%20mensaje%20a%20trav%C3%A9s%20de%20WhatsApp."
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
                                        stroke-linecap="round"
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

                        <div className="mt-6 w-80 md:mt-8">
                            <h3 className="text-gray-900 ">Follow Us</h3>

                            <div className="flex mt-4 -mx-1.5 ">
                                <a
                                    title="link"
                                    className="mx-1.5 hover:text-blue-400 text-gray-900 transition-colors duration-300 transform "
                                    href="https://www.linkedin.com/company/visual-peephole/"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>

                                <a
                                    title="link"
                                    className="mx-1.5 hover:text-pink-400 text-gray-900 transition-colors duration-300 transform "
                                    href="https://www.instagram.com/visual.peephole"
                                >
                                    <svg
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
