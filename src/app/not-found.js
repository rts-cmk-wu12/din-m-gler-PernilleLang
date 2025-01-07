import Image from "next/image"
import oops from "../photos/oops.png"
import Link from "next/link";

export default function error () {

    return (
        <section className="bg-blue-50 w-[100%] h-[30em] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center text-xs">
                <Image src={oops} alt="oops" height={250} width={250} cassName="h-[20em] w-[20em] object-cover"/>
                <p className="font-bold pt-[1.5em]">Du er havnet på en side som ikke findes!</p>
                <p className="pt-[1em]">Det er vi kede af! Vi har sendt en besked af sted til vores 
                    <br /> 
                    internetbureau, og bedt dem se på fejlen.
                </p>
                <Link href="/">
                    <button className="mt-[1.5em] mb-[4em] text-xs bg-sky-950 text-white w-[10em] h-[3em]">Tilbage til forsiden</button>
                </Link>
            </div>
        </section>
    )
}