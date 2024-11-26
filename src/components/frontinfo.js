import Image from "next/image";
import family from "../photos/family.png"
import house from "../photos/house.png"
import home from "../photos/home.png"
import customer from "../photos/customer.png"
import property from "../photos/property.png"
import flags from "../photos/flags.png"


export default function Frontinfo () {
    return(
    <section className="flex justify-center flex-col mt-[4em] mb-[2em]" >
        <div className="flex justify-center mx-auto margin-style">
            <Image src={family} alt="family" height={400} width={450} className="flex-shrink-0"/>
            <div className="ml-[15em] h-[25em] w-[50%] flex-grow mt-[6em]">
                <h2 className="text-2xl mb-[0.5em] font-bold">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                <p className="text-1xl mb-[0.5em] font-medium mt-[2em]">Det synes vi siger noget om os!</p>
                <p className="text-xs mb-[0.5em]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                <p className="text-xs mb-[0.5em]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div className="flex row mt-[2em]">
                    <Image src={house} alt="house" height={100} width={100} className="flex-shrink-0 w-[2em] h-[3em]"/>
                    <div className="pl-[1em]">    
                        <p>4829</p>
                        <p>boliger solgt</p>
                    </div>
                    <Image src={home} alt="home" height={100} width={100} className="flex-shrink-0 w-[2em] h-[3em] ml-[6em]"/>
                    <div className="pl-[1em]">    
                        <p>158</p>
                        <p>boliger til salg</p>
                    </div>
                </div>
            </div>
        </div>
        <ul className="flex justify-between pt-[2.5em] mx-auto margin-style">
            <li className="flex-1 w-[15em] pr-[15em]">
                <div className="flex">
                    <Image src={property} alt="property" height={25} width={25}/>
                    <p className="text-xs font-bold">Bestil et salgstjek</p>
                </div>
                <p className="text-xs pt-[0.5em] pl-[2em]">
                    Med et Din Mægler Salgstjek 
                    bliver du opdateret på værdien 
                    af din bolig.
                </p>
            </li>
            <li className="flex-1 w-[15em] pr-[15em]">
                <div className="flex">
                    <Image src={flags} alt="flags" height={25} width={25}/>
                    <p className="text-xs font-bold">74 butikker</p>
                </div>
                <p className="text-xs pt-[0.5em] pl-[2em]">
                    Hos Din Mægler er din bolig 
                   til salg i alle vores 74 butikker, 
                   som er fordelt rundt om i Danmark.
                </p>
            </li>
            <li className="flex-1 w-[15em]">
                <div className="flex">
                    <Image src={customer} alt="customer" height={25} width={25}/>
                    <p className="text-xs font-bold">Tilmeld køberkartotek</p>
                </div>
                <p className="text-xs pt-[0.5em] pl-[2em]">
                    Når du er tilmeldt vores køberkartotek, 
                    bliver du kontaktet inden en ny bolig bliver annonceret.
                </p>
            </li>
        </ul>
    </section>
    )
}