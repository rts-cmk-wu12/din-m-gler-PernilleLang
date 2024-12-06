"use client"

import Link from "next/link";
import { useState } from "react";

export default function Frontphoto (e) {

    const [search, setSearch] = useState("")

    console.log(search)

    return(
            <section className="relative bg-[url('/baggrund.jpg')] bg-cover bg-center h-[65vh] w-[100vw] flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="font-extrabold text-2xl text-white z-10 mb-[1em]">Søg efter din drømmebolig</h2>             
                <div className="bg-white z-10 h-[7em] w-[40em] p-[1em]">
                        <p className="text-xs font-bold pb-[1em]">Søg blandt 158 boliger til salg i 74 butikker </p>
                        <p className="text-xs">Hvad skal din næste bolig indeholde</p>
                        <form>
                            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" className="w-[35em] h-[2.7em] text-[0.7em] border border-gray-200 rounded-sm" />
                            <Link href={"/searchresult/" + search}>
                                <button type="submit" className="text-[0.5em] bg-blue-950 text-white mr-[1em] ml-[1em] w-[8em] h-[4.1em] border rounded-[0.5em]">Søg</button>
                            </Link>
                        </form>
                </div>
            </section>
    )
}