import Link from "next/link";
import Image from "next/image";
import vectormail from "../../../public/vectormail.png"

export default async function Workers () {

    const response = await fetch(
        "https://dinmaegler.onrender.com/agents?_limit=3",
    )

    const moreworkers = await response.json();
    console.log(moreworkers);

    return(
        <section className="flex flex-col justify-center items-center mx-auto margin-style pt-[3em] w-[100%]">
            <h2 className="font-bold">Mød vores engagerede medarbejdere</h2>
            <p className="text-xs pt-[1em] w-[35em]">Din Mægler er garant for altid veluddannet assistance i dit boligsalg. <br /> Kontakt en af vores medarbejdere.</p>
            <div className="mx-auto margin-style gap-[1em] flex text-xs pt-[2em] items-center justify-center w-[100%]">
                    {moreworkers.map((agent) => (
                        <div key={agent.id}>
                            <Image src={agent.image.url} width={100} height={100} alt="agent" className="h-[10em] w-[15em] object-cover"/>
                            <div className="flex flex-col justify-center items-center shadow-md pb-[0.5em]">
                                <h3 className="pt-[1em] font-bold">{agent.name}</h3>
                                <p className="pt-[0.3em]">{agent.title}</p>
                                <div className="flex flex-row items-center mt-[0.5em]">
                                    <Image src={vectormail} alt="vectormail" height={5} width={10} />
                                    <p className="ml-[0.5em]">{agent.email}</p>
                                </div>
                            </div>
                        </div>
                        ))}
            </div>
            <Link href="/allworkers">
                <button className="mt-[1.5em] mb-[4em] text-xs bg-sky-950 text-white w-[10em] h-[3em]">Se alle mæglere</button>                 
            </Link>
        </section>
    )
}