import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

// img
import Q1Img from '../../assets/img/qZone1.png';
import Q2Img from '../../assets/img/qZone2.png';
import Q3Img from '../../assets/img/qZone3.png';



export default function RightBar() {
    return (
        <section className="p-3">
            {/* log in section */}
            <div className="grid gap-1">
                <h4 className="text-xl font-medium">Login With</h4>
                <GoogleLoginButton></GoogleLoginButton>
                <GithubLoginButton></GithubLoginButton>
            </div>
            {/* find us info */}
            <h4 className="text-xl mt-7 mb-2 font-medium">Find Us</h4>
            <div>
                <a href="https://www.facebook.com" className="flex hover:bg-gray-300 border p-3"><BsFacebook className="mr-2 text-xl" /> Facebook</a>
                <a href="https://www.twitter.com" className="flex hover:bg-gray-300 border-x p-3"><BsTwitter className="mr-2 text-xl" /> Twitter</a>
                <a href="https://www.instagram.com" className="flex hover:bg-gray-300 border p-3"><BsInstagram className="mr-2 text-xl" /> Instragram</a>
            </div>
            <div className="bg-gray-300 mt-20 p-2 rounded-md">
                <h4 className="text-xl font-bold">Q-Zone</h4>
                <img src={Q1Img} alt="img-1" className="my-5"/>
                <img src={Q2Img} alt="img-2" className="my-5"/>
                <img src={Q3Img} alt="img-3" className="my-5"/>
            </div>
        </section>
    )
}