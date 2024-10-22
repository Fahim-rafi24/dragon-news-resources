import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import UserProvider from "../../UserContext/UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../FireBase/firebase.config";



export default function Register() {
    // userContext
    const user = useContext(UserProvider);
    const {setUserData, setUserName} =user;

    const handleSubmitRegister= e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setUserData(result.user)
            setUserName(result.user.email)
        })
        .catch(error=> console.error(error))
    }


    return (
        <>
            <section className="py-20 bg-gray-300 min-h-[100vh]">
                <NavBar></NavBar>
                <form onSubmit={handleSubmitRegister} className="p-5 w-2/5 mx-auto rounded-lg bg-gray-100 grid grid-cols-1">
                    <div>
                        <h2 className="text-center text-4xl font-semibold ">Register your account</h2>
                        <hr className="mt-10 mb-5 border-b border-black" />
                    </div>
                    <label className="text-xl font-bold py-3" htmlFor="Name">
                        Name
                    </label>
                    <input type="text" name="name" placeholder="Type Your Name"
                        className="p-4 rounded-md" />
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
                    <label htmlFor="Term & Conditions" className="mt-5">
                    <input type="checkbox" name="Accept_Term_&_Conditions" id="checkbox" className="mr-2"/>
                        Accept Term & Conditions</label>
                    {/* submit btn */}
                    <input type="submit" value="Register" className="font-medium mt-5 bg-gray-700 p-3 rounded-md text-white" />
                    <div className="mt-5 text-center text-lg">Already Have An Account ? <Link to='/login'><span className="text-red-600">Login</span></Link></div>
                </form>
            </section>
        </>
    )
}