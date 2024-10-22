import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";




export default function MarqueNews() {
    return (
        <>
            <Marquee>
                <Link to={'https://marquenews.com.au/subaru-solterra-awd-touring/'}><p className="mr-16">SUBARU SOLTERRA AWD TOURING</p></Link>
                <Link to={'https://marquenews.com.au/rambo-in-carpet-slippers-drives-tank-into-battle/'}><p className="mr-16">RAMBO IN CARPET SLIPPERS’ DRIVES TANK INTO BATTLE</p></Link>
                <Link to={'https://marquenews.com.au/country-music-to-toyota-land-cruiser-ears/'}><p className="mr-16">COUNTRY … MUSIC TO TOYOTA LAND CRUISER EARS</p></Link>
                <Link to={'https://marquenews.com.au/gwm-haval-jolion/'}><p className="mr-16">GWM HAVAL JOLION</p></Link>
                <Link to={'https://marquenews.com.au/isuzu-ute-mu-x/'}><p className="mr-16">VERSATILE MU-X IS A BIG SELLER FOR ISUZU UTE</p></Link>
            </Marquee>
        </>
    )
}