import { cookies } from "next/headers"
import HouseInfo from "@/components/houseinfo";

export default async function Favorite () {

    const cookieStore = await cookies()

    const cookieToken = cookieStore.get("dm_token")

    console.log(cookieToken)

    const response = await fetch("https://dinmaegler.onrender.com/users/me", {
        "method": "GET",
        "headers": {
          "Authorization": "Bearer " + cookieToken.value
        }
      })
        // .then(response => console.log(response))
        .catch(err => console.error(err));

        const favoriteHome = await response.json()

        console.log(favoriteHome)       
    

    return (
        <section>
        <div className="relative bg-[url('/building.png')] bg-cover bg-center h-[20vh] w-[100vw] flex flex-row items-center justify-around mb-[4em]">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="font-extrabold text-4xl text-white z-10">Mine favoritboliger</h2>
        </div>
        <form action="" className="margin-style border-b pb-[0.5em]">
            <input placeholder="Søg i favoritter" className="pl-[0.5em] border border-gray-200 text-xs h-[2em] w-[15.5em]"/>
        </form>
        <div>
            {favoriteHome.homes.map((favoriteHouse) => (
                <HouseInfo key={favoriteHouse.id} favoriteHouse={favoriteHouse}></HouseInfo>
            ))}
        </div>
        </section>
    )
}