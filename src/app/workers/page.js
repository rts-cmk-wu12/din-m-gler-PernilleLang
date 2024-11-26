import Image from "next/image";
import vectormail from "../../../public/vectormail.png"

export default async function Workers () {

    const response = await fetch(
        "https://dinmaegler.onrender.com/agents?_limit=3",
    )

    const moreworkers = await response.json();
    console.log(moreworkers);

    return(
        <section className="flex flex-col justify-center items-center mx-auto margin-style pt-[3em]">
            <h2 className="font-bold">Mød vores engagerede medarbejdere</h2>
            <p className="text-xs pt-[1em] w-[35em]">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. <br /> Kontakt en af vores medarbejdere.</p>
            <div className="flex text-xs pt-[2em] gap-[2em]">
            <div className="mx-auto margin-style grid grid-cols-2 gap-[1em]">
                
            </div>
            </div>
            <button className="mt-[1.5em] mb-[4em] text-xs bg-sky-950 text-white w-[10em] h-[3em]">Se alle mæglere</button>
        </section>
    )
}