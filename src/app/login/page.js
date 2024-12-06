"use client"

import login from "@/actions/login"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function Login () {


    const [formState, formAction] = useActionState(login, null)

    useEffect(function() {

        if (!formState) return

        if (!formState.success){
            alert("FEJL!")
        }

        if (formState.success){
            redirect("/favorite")
        }

    }, [formState]) //dependecy array

    return(
        <section>
            <div className="relative bg-[url('/building.png')] bg-cover bg-center h-[20vh] w-[100vw] flex flex-row items-center justify-around">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="font-extrabold text-4xl text-white z-10">Log ind</h2>
            </div>
            <section className="flex flex-col justify-center items-center mt-[4em] mb-[3em] ml-[30em] border border-gray-100 h-[30em] w-[35em]">
                <h3 className="font-medium text-4x">Log ind på din konto</h3>
                <div>
                    <form action={formAction} method="POST" className="flex flex-col">
                        <label htmlFor="" className="pt-[1em]"><small>Email</small></label>
                        <input required type="email" placeholder="Email" name="identifier" className="border border-gray-100 w-[20em]"/>
                        <label htmlFor="" className="pt-[1em]"><small>Password</small></label>
                        <input required type="password" placeholder="Password" name="password" className="border border-gray-100"/>
                        <button type="submit" className="bg-blue-950 text-white mt-[1em]">Log Ind</button>
                        {/* <span>{formState?.success.toString()}</span> */}
                    </form>
                </div>
                <div className="mt-[1em] flex flex-col">
                    <p><small>Log ind med</small></p>
                    <div className="flex justify-evenly w-[100%]">
                        <button className="bg-red-600 text-white w-[5em]"><small>Google</small></button>
                        <button className="bg-blue-700 text-white w-[5em] ml-[1em]"><small>Facebook</small></button>
                        <button className="bg-blue-950 text-white w-[5em] ml-[1em]"><small>Twitter</small></button>
                    </div>
                </div>
            </section>
        </section>
    )
}