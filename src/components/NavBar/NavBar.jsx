import { Link } from "react-router-dom";
import { SlPeople } from "react-icons/sl";

export default function NavBar() {
    return (
        <section className="">
            <ul className="flex py-3 w-3/5 mx-auto justify-center space-x-5">
                <Link to={'/'}><li className="hover:underline underline-offset-8 hover:text-red-500">Home</li></Link>
                <Link to={'/login'}><li className="hover:underline underline-offset-8 hover:text-red-500">Login</li></Link>
                <Link to={'/register'}><li className="hover:underline underline-offset-8 hover:text-red-500">Register</li></Link>
            </ul>
            {/* user conditional */}
            {<div id="User" className=" mt-3">
                <SlPeople className="text-4xl relative bottom-14 left-[71%]" />
                <button className="px-5 py-3 text-white bg-gray-700 relative bottom-24 left-[27%]">Log Out</button>
            </div>}
        </section>
    )
}