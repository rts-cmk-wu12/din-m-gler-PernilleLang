import Image from "next/image";
import vectormail from "../../../public/vectormail.png"

export default async function Allworkers () {

    const response = await fetch(
        "https://dinmaegler.onrender.com/agents",
    )

    const moreworkers = await response.json();
    console.log(moreworkers);

    return(
        <section className="flex flex-col mb-[10em] w-[100%]">
           <div className="relative bg-[url('/building.png')] bg-cover bg-center h-[20vh] w-[100vw] flex flex-row items-center justify-around">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="font-extrabold text-4xl text-white z-10">Medarbejdere i Roskilde</h2>
            </div>
            <div className="mx-auto margin-style gap-[1em] text-xs pt-[2em] w-[100%] grid grid-cols-3">
                    {moreworkers.map((agent) => (
                        <div key={agent.id} className="flex flex-col items-center pt-[2em]">
                            <Image src={agent.image.url} width={100} height={100} alt="agent" className="h-[10em] w-[15em] object-cover"/>
                            <div className="flex flex-col items-center shadow-md w-[66%]">
                                <h3 className="pt-[1em] font-bold">{agent.name}</h3>
                                <p className="pt-[0.3em]">{agent.title.split(" ")[0]}</p>
                                <div className="flex flex-row items-center mt-[1em]">
                                    <Image src={vectormail} alt="vectormail" height={5} width={10} />
                                    <p className="ml-[0.5em]">{agent.email}</p>
                                </div>
                            </div>
                        </div>
                        ))}
            </div>
        </section>
    )
}