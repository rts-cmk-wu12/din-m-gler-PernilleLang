import HouseInfo from "@/components/houseinfo";

export default async function All () {

    const response = await fetch(
        "https://dinmaegler.onrender.com/homes",
    )

    const forsale = await response.json();
    console.log("hej", forsale);

    return(
        <section>
            <div className="relative bg-[url('/baggrund.jpg')] bg-cover bg-center h-[30vh] w-[100vw] flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="font-extrabold text-4xl text-white z-10">Boliger til salg</h2>
            </div>
            <section className="mx-auto margin-style pt-[3em]">
                <h2 className="text-sm"><strong>Søg efter din drømmebolig</strong></h2>
                <div className="flex flex-row">
                    <div className="flex-row">
                        <p className="text-xs pt-[1em]"><small>Ejendomstype</small></p>
                        <select name="Ejendomstype" id="" className="text-xs bg-white">
                            <option value="Villa">Ejendomstype</option>
                            <option value="Villa">Villa</option>
                            <option value="Rækkehus">Ejerlejlighed</option>
                            <option value="Villa">Landejendom</option>
                            <option value="Villa">Byhus</option>
                        </select>
                        </div>
                    <div className="ml-[2em] flex-row pt-[0.6em]">
                        <p className="text-xs" ><small>Pris-interval</small></p>
                        <input type="range" placeholder="Kroner" className="text-xs w-[35em] h-[2.7em] text-[0.7em] border border-gray-200 rounded-sm"/>
                    </div>
                </div>
            </section>
            <div className="mx-auto margin-style grid grid-cols-2 gap-[1em]">
                {forsale.map((house)=> (
                    <HouseInfo key={house.id} house={house}></HouseInfo> 
                ))}
            </div>
        </section>
    )
}