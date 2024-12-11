import love from "../../public/love.png"
import Image from "next/image";

export default function HouseInfo ( {house} ) {

    const bgColors = {
        "A": "#008000",  // Grøn
        "B": "#FFD700",  // Gul
        "C": "#FF7F00",  // Orange
        "D": "#FF0000",  // Rød
    };


    const energyLabelColor = bgColors[house.energylabel];

    return(
        <section className="flex flex-col mt-[3em] mb-[2em] w-[100%]">
            <div className="relative">
                <img src={house.images[0].url} alt="houseimage" height={100} width={350} className="h-[15em] w-[100%]"/>
                <div className="absolute bg-white top-2 right-2 z-10 rounded-full">
                    <Image src={love} alt="love" height={15} width={20}/>
                </div>
            </div>
            <div className="flex flex-col justify-start pl-[1em] shadow-lg pb-[1em]">
                <h3 className="text-xs pt-[1.5em]"><strong>{house.adress1} {house.adress2}</strong></h3>
                <p className="pt-[1em] text-xs"><small>{house.postalcode} {house.city}</small></p>
                <p className="pt-[1em] pb-[1em] text-xs"><strong>{house.type}</strong><small> * Ejerudgift: {house.cost} kr.</small></p>
                <div className="flex flex-row justify-between border-t border-gray-300">
                    <p className="pt-[1em] text-xs"><strong className="h-[100%]" style={{ backgroundColor: energyLabelColor }}>{house.energylabel}</strong> <small>{house.rooms} værelser * {house.lotsize} m2</small></p>
                    <p className="text-xs pt-[1em]"><strong>Kr. {house.price.toLocaleString('da-DK')}</strong></p> 
                    {/* Denne metode formaterer tallet til danske lokale indstillinger, som bruger punktum som tusindadskiller og komma som decimalseparator.*/}
                </div>
            </div>
        </section>
    )
}