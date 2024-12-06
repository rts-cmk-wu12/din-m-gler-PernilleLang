import News from "@/components/news";
import Frontinfo from "@/components/frontinfo";
import Frontphoto from "@/components/frontphoto";
import Process from "@/components/process";
import Workers from "./workers/page";
import Somehouses from "./somehouses/page";

export default function Frontside () {

    return(
        <main>
            <Frontphoto/>
            <Frontinfo/>
            <Somehouses/>
            <News/>
            <Workers/>
            <Process/>
        </main>
    )
}

