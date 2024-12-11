"use client"

import { contactForm } from "@/actions/contact";
import { useActionState } from "react";
import { useEffect } from "react";

export default function Contactform () {

    const [formContact, formContactAction] = useActionState(contactForm, null)

    useEffect(()=>{
        console.log("agentFormState", formContact);
       },[formContact])

    return(
        <form action={formContactAction} className="col-start-1 col-span-2 row-start-2 flex flex-col border border-gray-200 p-[1.5em] text-xs h-[35em] w-[35em]">
                <div className="flex">
                    <div className="flex flex-col">
                        <label htmlFor="">Navn</label>
                        <input className="h-[3em] w-[15.5em] border border-gray-200 p-[0.3em]" name="name" type="text" placeholder="Indtast dit navn" />
                        <span className="text-red-600">{formContact?.name?._errors[0]}</span>
                    </div>
                    <div className="flex flex-col ml-[1em]">
                        <label htmlFor="">Email</label>
                        <input className="h-[3em] w-[15.5em] border border-gray-200 p-[0.3em]" name="email" type="email" placeholder="Indtast dit email"/>
                        <span className="text-red-600">{formContact?.email?._errors[0]}</span>
                    </div>
                </div>
                <label className="pt-[1em]" htmlFor="">Emne</label>
                <input className=" h-[3em] border border-gray-200 p-[0.3em]" name="subject" type="text" placeholder="Indtast emne"/>
                <span className="text-red-600">{formContact?.subject?._errors[0]}</span>
                <label className="pt-[1em]" htmlFor="">Besked</label>
                <textarea className=" h-[10em] border border-gray-200 p-[0.4em]" name="text" id="text" placeholder="Indtast din besked..."></textarea>
                <span className="text-red-600">{formContact?.text?._errors[0]}</span>
                <label className="pt-[1em]" htmlFor=""> 
                    <input id="newsletter" type="checkbox" name="newsletter" className="mr-[0.4em]" /> 
                    Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                </label>
                <button className="mt-[1.5em] mb-[1em] bg-sky-950 text-white w-[10em] h-[3em]">Send besked</button>
            </form>
    )
}