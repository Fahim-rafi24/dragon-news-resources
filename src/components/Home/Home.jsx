import LeftBar from "../LeftBar/LeftBar";
import NewsBar from "../NewsBar/NewsBar";
import RightBar from "../RightBar/RightBar";



export default function Home (){
    return(
        <section className="md:grid grid-cols-4 gap-2 w-3/5 mx-auto">
        <LeftBar></LeftBar>
        <div className="col-span-2"><NewsBar></NewsBar></div>
        <RightBar></RightBar>
        </section>
    )
}