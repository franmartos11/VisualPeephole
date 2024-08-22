export default function Form() {
    return (
        <section className=" pt-[5rem] pb-[5rem]">
            <div className="py-[2rem] lg:py-16 px-[3rem] mx-auto max-w-screen-md bg-gray-200 rounded-[1rem] shadow-xl">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black text-center ">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-700 sm:text-xl">
                We are here to help! Fill out the form below, and we ll be happy to answer your questions, discuss potential collaborations, or explore your ideas.
                </p>
                <form
                    action="https://formsubmit.co/"
                    method="POST"
                    className="space-y-8"
                >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow-sm  border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-400 border-gray-600 placeholder-white text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="telefono"
                            id="telefono"
                            name="telefono"
                            className="block p-3 w-full text-sm rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-400 border-gray-600 placeholder-white text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                            placeholder="Phone Number..."
                            required
                        />
                    </div>

                    <div className="sm:col-span-2 ">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <input
                            type="message"
                            id="message"
                            name="mensaje"
                            className="block p-6 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-400 border-gray-600 placeholder-white text-black focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave your message..."
                        ></input>
                    </div>
                    <div className=" text-center ">
                        <button
                            type="submit"
                            className="py-3 px-9 text-sm font-medium text-center  text-black rounded-lg bg-white sm:w-fit hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
