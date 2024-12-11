import Image from "next/image";
import phone from "../../photos/phone.png"
import flyer from "../../photos/flyer.png"
import mark from "../../photos/mark.png"
import map from "../../photos/map.png"
import Contactform from "@/components/contactform";

    
export default function Contact () {
    
    return (
        <section>
        <div className="relative bg-[url('/building.png')] bg-cover bg-center h-[20vh] w-[100vw] flex flex-row items-center justify-around">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="font-extrabold text-4xl text-white z-10">Kontakt os</h2>
        </div>
        <section className="grid grid-rows-3 grid-cols-3 margin-style h-[40em] w-[75%]">
            <div className="mt-[4em] col-start-1 col-span-2 row-start-1">
                <h3 className="font-bold">Vi sidder klar til at besvare dine spørgsmål</h3>
                <p className="text-xs mt-[2em]">
                    Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. 
                    <br />
                    Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.
                </p>
            </div>
            <Contactform/>
            <article className="col-start-3 row-start-2 border border-gray-200 h-[26.5em] w-[15em] flex flex-col justify-center p-[1em]">
                    <div className="flex flex-col items-center border-b p-[1.5em] mt-[3em]">
                        <Image src={phone} alt="phone" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em] flex flex-col items-center">
                            <p className="text-xs font-bold pt-[1em]">Ring til os</p>
                            <p className="pt-[0.5em]"><small>+45 7070 4000</small></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center border-b p-[1.5em]">
                        <Image src={flyer} alt="flyer" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em] flex flex-col items-center">
                            <p className="pt-[1em] text-xs font-bold">Send en email</p>
                            <p className="pt-[0.5em]"><small>4000@dinmaegler.com</small></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-[1.5em] mb-[3em]">
                        <Image src={mark} alt="mark" height={25} width={50} className="h-[2em] w-[2em]"/>
                        <div className="pl-[0.5em] flex flex-col items-center">
                            <p className="text-xs pt-[0.5em] font-bold">Besøg butikken</p>
                            <p className="pt-[0.5em]"><small>Stændertorvet 78,</small></p>
                            <p><small>4000 Roskilde</small></p>
                        </div>
                    </div>
        </article>
        </section>
        <Image src={map} alt="mark" height={400} width={450} className="h-[20em] w-[100%] mt-[4em]"/>
        </section>
    )

}