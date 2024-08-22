import Link from "next/link";

export default function Footer() {
    return (
        <div className="relative   px-4 pt-20 ">
            <hr className=" mb-[5rem] mt-[-5.5rem] h-[0.1rem] bg-black"></hr>
            <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4  bg-gray-700 p-[0.2rem]">
                <Link title="link" href={"#top-page"}>
                    <img
                        className="h-full object-contain"
                        src="/vp.png"
                        alt="aspa logo"
                        title="aspa logo"
                    />
                </Link>
            </div>
            <nav
                aria-label="Footer Navigation"
                className="mx-auto  mb-10 flex max-w-lg flex-col gap-10 text-center justify-center sm:flex-row sm:text-left"
            >
                <a title="link" href="/" className="font-medium text-black">
                    Inicio
                </a>
                <a
                    title="link"
                    href="/servicios"
                    className="font-medium text-black"
                >
                    Servicios
                </a>
                <a
                    title="link"
                    href="/nosotros"
                    className="font-medium text-black"
                >
                    Nosotros
                </a>
                <a
                    title="link"
                    href="/contact"
                    className="font-medium text-black"
                >
                    Contacto
                </a>
            </nav>
            <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/youtube-logo-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/pinterest.png" />
        </a>
    </div>
            <p className="py-10 text-center text-gray-600">
                © 2024 Visualpeephole | Designed by Aspa Software
            </p>
        </div>
    );
}
