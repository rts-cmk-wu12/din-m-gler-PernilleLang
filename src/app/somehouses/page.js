import Link from "next/link";
import HouseInfo from "@/components/houseinfo";

export default async function Somehouses () {

    const response = await fetch(
        "https://dinmaegler.onrender.com/homes?_limit=4",
    )

    const somehouses = await response.json();
    console.log(somehouses);

    return(
        <section className="flex flex-col justify-center items-center mx-auto margin-style pt-[3em]">
            <h2 className="font-bold">Udvalgte Boliger</h2>
            <p className="text-xs pt-[1em] w-[35em]">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            <div className="mx-auto margin-style grid grid-cols-2 gap-[1em]">
                {somehouses.map((fewhouses)=> (
                    <HouseInfo key={fewhouses.id} house={fewhouses}></HouseInfo> 
                ))}
            </div>
            <Link href="/all">
                <button className="mt-[1.5em] mb-[4em] text-xs bg-sky-950 text-white w-[10em] h-[3em]">Se alle boliger</button>
            </Link>
        </section>
    )
}