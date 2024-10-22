import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



export default function Login() {
    return (
        <section className="py-20 bg-gray-300 min-h-[100vh]">
            <NavBar></NavBar>
            <form className="p-5 w-2/5 mx-auto rounded-lg bg-gray-100 grid grid-cols-1">
                <div>
                    <h2 className="text-center text-4xl font-semibold ">Login your account</h2>
                    <hr className="mt-10 mb-5 border-b border-black" />
                </div>
                <label className="text-xl font-bold py-3" htmlFor="Email">
                    Email
                </label>
                <input type="email" name="email" placeholder="Type Your Email" autoComplete='username'
                    className="p-4 rounded-md" />
                <label className="text-xl font-bold py-3" htmlFor="Password">
                    Password
                </label>
                <input type="password" name="password" placeholder="Type Your Strong Password" autoComplete='current-password'
                    className="p-4 rounded-md" />
                {/* submit btn */}
                <input type="submit" value="Login" className="font-medium mt-5 bg-gray-700 p-3 rounded-md text-white" />
                <div className="mt-5 text-center text-lg">Dont’t Have An Account ? <Link to='/register'><span className="text-red-600">Register</span></Link></div>
            </form>
        </section>
    )
}