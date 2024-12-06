import Image from "next/image";
import Link from "next/link";
import footer from "../photos/footer.png"
import phone from "../photos/phone.png"
import flyer from "../photos/flyer.png"
import mark from "../photos/mark.png"


export default function Footer () {

    return(
        <footer className="pt-[2em]">
            <section className="grid grid-cols-2 grid-rows-3 mx-auto margin-style ">
                <article className="col-span-3  bg-gray-100">
                    <div className="flex">
                        <Image src={footer} alt="dinmaegler" height={40} width={50} className="h-[2em] w-[3em]"/>
                        <h2 className="h-[23px] text-sky-950 font-bold text-xl ml-[0.5em] flex items-start">DIN MÆGLER</h2>
                    </div>
                    <p className="mr-[30em] pt-[1em]">
                        <small>
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have 
                            suffered alteration in some form, by injected humour, 
                            or randomised words.
                        </small>
                    </p>
                </article>
                <article className="row-start-2 flex flex-col ml-[2em] w[100%] bg-gray-100 pl-[2em] pt-[2em]">
                    <div className=" bg-white w-[20em] shadow-lg">
                    <div className="flex items-center">
                        <Image src={phone} alt="phone" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em]">
                            <p className=" text-gray-300 text-xs">Ring til os</p>
                            <p><small>+45 7070 4000</small></p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Image src={flyer} alt="flyer" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em]">
                            <p className=" text-gray-300 text-xs pt-[1em]">Send en email</p>
                            <p><small>4000@dinmaegler.com</small></p>
                        </div>
                        </div>
                    <div className="flex items-center">
                        <Image src={mark} alt="mark" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em]">
                            <p className=" text-gray-300 text-xs pt-[1em]">Butik</p>
                            <p><small>Stændertorvet 78, 4000 Roskilde</small></p>
                        </div>
                    </div>
                    <p className="text-xs w-[15em] pt-[2em]">Din Mægler Roskilde, er din boligbutik i lokalområdet.</p>
                    </div>
                </article>
                <nav className="col-start-2  bg-gray-100">
                        <p className="font-medium">Quick Links</p>
                        <ul className="flex flex-col pt-[1em]">
                            <li className="text-xs pt-[0.5em]">
                                <Link href="/all">
                                 Boliger til salg
                                </Link>
                            </li>    
                            <li className="text-xs pt-[0.5em]">
                                <Link href="/allworkers">
                                 Mægler
                                </Link>
                            </li>    
                            <li className="text-xs pt-[0.5em]">
                                <Link href="/favorite">
                                 Mine favoritter
                                </Link>
                            </li>    
                            <li className="text-xs pt-[0.5em]">
                                <Link href="/contact">
                                 Kontakt os
                                </Link>
                            </li>    
                        </ul>
                </nav>
                <article className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-3">
                    <div className="flex flex-col col-start-2">
                    <p className="text-xs">Medlem af</p>
                    <p className="text-xl font-bold">DMS</p>
                    <p className="text-xs">Dansk Mægler Sammenslutning</p>
                    </div>
                </article>
            </section>
            <section className="bg-sky-950 text-white flex justify-center items-center text-xs h-[4em]">
                <h3>Layout By Jit Banik 2020</h3>
            </section>          
        </footer>
    )
}