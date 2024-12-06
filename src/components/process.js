import Image from "next/image";
import apple from "../photos/apple.png"
import playstore from "../photos/play-store.png"
import group from "../photos/group.png"

export default function Process () {

    return(
        <section className="h-[40vh] w-[100%] bg-sky-950 flex items-center justify-center">
              <div className="flex flex-col items-center flex-grow w-[50%] ml-[1em]">
                    <h2 className="text-white w-[15em] font-bold">Hold dig opdateret på salgsprocessen</h2> 
                    <p className="text-white pt-[1em] text-xs w-[40%]">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>    
                    <div className="flex flex-row pt-[1em] w-[16em]">
                        <button className="bg-white text-black text-xs mr-[1em] w-[8em] h-[3em] flex items-center">
                            <Image src={playstore} alt="vector" height={10} width={15}/>     
                            Google Play
                        </button>
                        <button className="text-white text-xs w-[8em] h-[3em] border border-whit flex items-center">
                            <Image src={apple} alt="vector" height={10} width={15}/>     
                            Apple Store
                        </button>
                    </div>
                </div>  
                <div className="w-[50%] flex justify-center margin-style flex-grow">
                    <Image src={group} alt="group" height={150} width={250} className="h-[15em]" />
                </div>  
        </section>
    )
}