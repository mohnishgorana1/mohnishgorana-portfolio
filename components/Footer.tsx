import { FaGithub, FaLinkedin, FaLocationArrow, FaTwitter } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import Link from "next/link";

function Footer() {
    let date = new Date();
    let year = date.getFullYear()
    return (
        <footer className="w-full sm:h-[90vh] flex flex-col px-4 sm:px-10 ">
            <div className="w-full h-[85%] sm:py-16 py-8 flex flex-col items-center justify-center gap-y-8 text-center">
                <h1 className="sm:-mt-10 sm:w-[39vw] w-[88vw] font-bold text-2xl sm:text-3xl md:text-5xl ">
                    Ready to take your digital presence to the <span className="text-purple">next</span> level?
                </h1>
                <p className="w-[60vw] leading-tight opacity-45 text-sm sm:text-xl">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
                <a href="mailto:mohnishgorana1@gmail.com" className='md:mt-10 hover:scale-95 duration-300 ease-in'>
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className="h-[15%] px-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-y-4 py-5 ">
                <p>Copyright &copy; {year} Mohnish Gorana</p>
                <div className="flex items-center gap-x-5">
                    <Link href={"https://github.com/mohnishgorana1"}>
                        <button className="p-2 border rounded-lg bg-black-200 text-xl opacity-50  hover:opacity-100 hover:brightness-150">

                            <FaGithub />
                        </button>
                    </Link>
                    <Link href={"/"}>
                        <button className="p-2 border rounded-lg bg-black-200 text-xl opacity-50  hover:opacity-100 hover:brightness-150">

                            <FaTwitter />
                        </button>
                    </Link>
                    <Link href={"/"}>
                        <button className="p-2 border rounded-lg bg-black-200 text-xl opacity-50  hover:opacity-100 hover:brightness-150">

                            <FaLinkedin />
                        </button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer