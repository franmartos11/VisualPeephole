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
            
            <div className="flex justify-center space-x-5">
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
    
            <p className="py-10 text-center text-gray-600">
                © 2024 Visualpeephole | Designed by <a href="https://www.aspasoftware.com/" target="_blank" aria-label="See more about us in Pinterest " rel="noopener noreferrer">Aspa Software</a>
            </p>
        </div>
    );
}
