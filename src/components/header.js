import Image from "next/image";
import dinmaegler from "../photos/din-maegler.png"
import call from "../photos/call.png"
import paperplane from "../photos/paper-plane.png"
import user from "../photos/user.png"
import Link from "next/link";

export default function Header () {

    return(
        <header className="mb-[1em]">
            <div>
                <div className="bg-sky-950 text-white w-[70em] mx-auto margin-style flex justify-between">
                    <div className="flex h-[2.5em] w-[25em]">
                            <div className="flex items-center">
                                <Image src={paperplane} alt="paperplane" height={15} width={15}/>
                                <p className="text-xs">4000@dinmaegler.com</p>
                            </div>
                            <div className="flex items-center pl-[2em]">
                                <Image src={call} alt="call" height={15} width={15}/>
                                <p className="text-xs">+45 7070 4000</p>
                            </div>

                    </div>
                    <div className="flex items-center w-[15em] justify-end">
                        <Image src={user} alt="user" height={15} width={15}/>
                        <p className="text-xs">Log ind</p>
                    </div>
                </div>
                <div className="flex justify-between w-[70em] mx-auto margin-style">
                    <div className="flex items-end w-[15em] mt-[1em]">
                        <Link href="/frontinfo">
                            <Image src={dinmaegler} alt="dinmaegler" height={40} width={50} className="h-[3em] w-[5em]"/>
                        </Link>
                        <h1 className="h-[23px] text-sky-950 font-bold text-xl ml-[0.5em]">DIN MÆGLER</h1>
                    </div>
                    <nav className="flex justify-between items-center w-[19em]">
                        <ul className="flex flex-row space-x-4">
                            <li className="text-xs">
                                <Link href="/all">
                                 Boliger til salg
                                </Link>
                            </li>    
                            <li className="text-xs">
                                <Link href="/">
                                 Mægler
                                </Link>
                            </li>    
                            <li className="text-xs">
                                <Link href="/">
                                 Mine favoritter
                                </Link>
                            </li>    
                            <li className="text-xs">
                                <Link href="/">
                                 Kontakt os
                                </Link>
                            </li>    
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}