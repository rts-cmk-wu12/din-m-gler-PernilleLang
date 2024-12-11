import Image from "next/image";
import Link from "next/link";
import footer from "../photos/footer.png"
import phone from "../photos/phone.png"
import flyer from "../photos/flyer.png"
import mark from "../photos/mark.png"


export default function Footer () {

    return(
        <footer className="gap-4 min-h-[50vh] grid grid-cols-[auto,35em,35em,auto] grid-rows-3 bg-gray-100">
                <section className="col-start-2 col-end-4 mb-[1em]">
                    <div className="flex margin-style pt-[5em]">
                        <Image src={footer} alt="dinmaegler" height={40} width={50} className="h-[2em] w-[3em]"/>
                        <h2 className="h-[23px] text-sky-950 font-bold text-xl ml-[0.5em] flex items-start">DIN MÆGLER</h2>
                    </div>
                    <p className="pt-[1em] margin-style">
                        <small>
                            There are many variations of passages of Lorem Ipsum available, 
                            but the majority have 
                            <br />
                            suffered alteration in some form, by injected humour, 
                            or randomised words.
                        </small>
                    </p>
                </section >
                <section className="col-start-3 col-end-4">
                    <nav>
                        <h2 className="font-medium">Quick Links</h2>
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
                </section>
                <section className="grid grid-cols-2 row-start-3 row-end-4 col-start-1 col-end-5 bg-white pt-[2em]">
                    <div className="flex flex-col col-start-2">
                    <p className="text-xs">Medlem af</p>
                    <h2 className="text-xl font-bold">DMS</h2>
                    <p className="text-xs">Dansk Mægler Sammenslutning</p>
                    </div>
                </section>
                <section className="row-start-2 row-end-4 col-start-2 col-end-3 bg-white flex flex-col w-[20em] h-[17em] shadow-lg">
                    <div>
                    <div className="flex items-center pt-[2em] pl-[2em]">
                        <Image src={phone} alt="phone" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em]">
                            <p className=" text-gray-300 text-xs">Ring til os</p>
                            <p><small>+45 7070 4000</small></p>
                        </div>
                    </div>
                    <div className="flex items-center pl-[2em]">
                        <Image src={flyer} alt="flyer" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em]">
                            <p className=" text-gray-300 text-xs pt-[1em]">Send en email</p>
                            <p><small>4000@dinmaegler.com</small></p>
                        </div>
                        </div>
                    <div className="flex items-center pl-[2em]">
                        <Image src={mark} alt="mark" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em]">
                            <p className=" text-gray-300 text-xs pt-[1em]">Butik</p>
                            <p><small>Stændertorvet 78, 4000 Roskilde</small></p>
                        </div>
                    </div>
                    <h2 className="text-xs w-[18em] pt-[2em] pl-[3em]">Din Mægler Roskilde, er din boligbutik i lokalområdet.</h2>
                    </div>
                </section>  
        </footer>
    )
}