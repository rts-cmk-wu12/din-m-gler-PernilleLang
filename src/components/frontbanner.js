import Image from "next/image";
import vector from "../photos/vector.png"

export default function Frontbanner () {

    return(
        <section className="flex flex-row justify-stretch h-[20vh] w-[100%]">
              <div className="relative bg-[url('/building.png')] bg-cover bg-center w-[100%] h-[100%] flex flex-row items-center justify-around">
                    <div className="absolute inset-0  bg-sky-950 bg-opacity-90"></div>
                    <h2 className="text-white w-[23%] z-10">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>
                    <div className="z-10 flex flex-row bg-white">
                        <input type="email" placeholder="Indtast din email adresse" className="w-[21em] h-[3em] text-[0.7em]"/>
                        <Image src={vector} alt="vector" height={15} width={20}/>                    
                    </div>       
                </div>    
        </section>
    )
}