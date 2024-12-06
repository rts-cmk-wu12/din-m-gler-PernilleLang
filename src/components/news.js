"use client"

import Image from "next/image";
import vector from "../photos/vector.png"
import { useState } from "react";

export default function News () {
    const [message, setMessage] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    async function handleEmailSubmit (e) {
        e.preventDefault();

        const response = await fetch ("https://dinmaegler.onrender.com/subscribers", {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json"
            },
            "body": JSON.stringify( {
              "email": e.target.email.value
            }
        )
          })
    
        const data = await response.json()
    
        console.log(data)

        if (response.ok) {
            setSubscribed(true);
            setMessage("Tak for din tilmelding!");
        } else {
            setSubscribed(false);
            setMessage("Der er sket en fejl med din indtastning!");
        }
         
    }

    return(
        <section className="flex flex-row justify-stretch h-[20vh] w-[100%]">
              <div className="relative bg-[url('/building.png')] bg-cover bg-center w-[100%] h-[100%] flex flex-row items-center justify-around">
                    <div className="absolute inset-0  bg-sky-950 bg-opacity-90"></div>
                    <h2 className="text-white  z-10">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>
                    <form onSubmit={handleEmailSubmit} className="z-10 flex flex-row bg-white">
                        <input name="email" type="email" placeholder="Indtast din email adresse" className="w-[21em] h-[3em] text-[0.7em]"/>
                        <button type="submit">
                            <span className="sr-only">Send</span> {/*screeen readers only - kun når der ikke er læsbar tekst*/}
                            <Image src={vector} alt="vector" height={15} width={20}/>
                        </button>                    
                    </form>
                    {message && (
                        <div className="absolute bottom-0 left-0 right-0 text-center mt-4">
                        <p
                        className={`${
                        subscribed ? "text-white" : "text-red-400"
                        } font-semibold`}
                        >
                        {message}
                        </p>
                        </div>
                        )}       
                </div>    
        </section>
    )
}