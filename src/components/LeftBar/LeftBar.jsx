import { Link, NavLink } from "react-router-dom";



export default function LeftBar() {


    return (
        <div className="">
            <h2 className="text-center text-3xl my-4">All Caterogy</h2>
            <ul>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><NavLink>National News</NavLink></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>All News</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>Breaking News</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>Regular News</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>International News</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>Sports</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>Entertainment</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>Culture</Link></li>
                <li className={`hover:bg-gray-400 hover:text-white py-4 pl-10`}><Link>Arts</Link></li>
            </ul>
        </div>
    )
}