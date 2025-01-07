import Image from "next/image"
import photoone from "../../../../public/photoone.png"
import phototwo from "../../../../public/phototwo.png"
import photothree from "../../../../public/photothree.png"
import photofour from "../../../../public/photofour.png"
import phone from "../../../../public/phone.svg"
import paperplane from "../../../../public/paperplane.svg"

export default async function housedetail ({params}) {

    const {id} = params
    console.log("params id", id);

    const response = await fetch(
        `https://dinmaegler.onrender.com/homes/${id}`
    );

    const details = await response.json();
    console.log("details", details);

    return (
        <section>
            <div>
                <Image 
                    src={details.images[0].url} 
                    alt="detailfront" 
                    height={250} 
                    width={250} 
                    className="h-[35em] w-[100%] object-cover"
                />
            </div>
            <section>
                <div className="flex justify-around w-[100%] pt-[2em]">
                    <div>
                        <h3 className="text-xs">
                            <strong>{details.adress1} {details.adress2}</strong>
                        </h3>
                        <p className="text-xs font-bold">
                            <small>{details.postalcode} {details.city}</small>
                        </p>
                    </div>
                    <div className="flex justify-evenly w-[10em]">
                        <Image src={photoone} alt="photoone" height={100} width={100} className="h-[1.5em] w-[2em]"/>
                        <Image src={phototwo} alt="phototwo" height={100} width={100} className="h-[1.5em] w-[2em]"/>
                        <Image src={photothree} alt="photothree" height={100} width={100} className="h-[1.5em] w-[2em]"/>
                        <Image src={photofour} alt="photofour" height={100} width={100} className="h-[1.5em] w-[2em]"/>
                    </div>
                    <div>
                        <p className="text-xl"><strong>Kr. {details.price.toLocaleString('da-DK')}</strong></p> 
                    </div>
                </div>
                <div className="flex flex-row justify-around w-[100%] text-xs pt-[2em] pb-[2em]">
                    <div>
                        <p>Boligareal: {details.livingspace}m2</p>
                        <p>Grundareal: {details.lotsize}m2</p>
                        <p>Rum/værelser: {details.rooms}</p>
                    </div>
                    <div>
                        <p>Kælder: {details.basementsize}</p>
                        <p>Byggeår: {details.built}</p>
                        <p>Ombygget: {details.remodel}</p>
                        <p>Energimærke: {details.energylabel}</p>
                    </div>
                    <div>
                        <p>Udbetaling: Kr. {details.payment.toLocaleString('da-DK')}</p>
                        <p>Brutto ex ejerudgift: Kr. {details.gross.toLocaleString('da-DK')}</p>
                        <p>Netto ex ejerudgift: Kr. {details.netto.toLocaleString('da-DK')}</p>
                        <p>Ejerudgifter: Kr. {details.cost.toLocaleString('da-DK')}</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-row margin-style pb-[5em]">
                <div className="w-[50%] pr-[5em]">
                    <h3 className="font-bold">Beskrivelse</h3>
                    <p className="text-xs">{details.description}</p>
                </div>
                <div className="w-[40%]">
                    <h3 className="font-bold">Ansvarlig mægler</h3>
                    <div className="flex border border-gray-300 p-[1em]">
                         <Image src={details.agent.image.url} width={200} height={200} alt="agent" className="h-[10em] w-[10em] object-cover"/>
                         <div className="ml-[1em]">
                            <p className="font-bold text-sm">{details.agent.name}</p>
                            <p className="text-xs text-gray-400 pb-[0.5em]">{details.agent.title}</p>
                            <p className="text-xs pt-[1em] border-t border-gray-300 flex"> 
                                <Image src={phone} alt="phone" height={200} width={200} className="h-[1em] w-[2em] pr-[0.5em]"/>
                                {details.agent.phone}
                            </p>
                            <p className="text-xs pt-[0.5em] flex">
                                <Image src={paperplane} alt="paperplane" height={200} width={200} className="pr-[0.5em] h-[1em] w-[2em]"/>
                                {details.agent.email}
                            </p>
                         </div>
                    </div>
                </div>
            </section>
        </section>
    );
}