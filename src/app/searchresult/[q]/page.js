import HouseInfo from "../../../components/houseinfo";

export default async function SearchResult ( {params}) {

        const { q } = await params

        const response = await fetch("https://dinmaegler.onrender.com/homes?description_contains=" + q,  {
            "method": "GET"
          })
            // .then(response => console.log(response))
            .catch(err => console.error(err));

            const data = await response.json()

            console.log(data)
    
    return (
        <>
        <div className="relative bg-[url('/building.png')] bg-cover bg-center h-[20vh] w-[100vw] flex flex-row items-center justify-around">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="font-extrabold text-4xl text-white z-10">Søgeresultat</h2>
        </div>
        <section>
            <div>
            <div>
                {data.map((search)=> (
                    <HouseInfo key={search.id} house={search}></HouseInfo> 
                ))}
            </div>
            </div>
        </section>
        </>
    )
}