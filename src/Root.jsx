import Footer from "./components/Footer/Footer";
import MarqueNews from "./components/MarqueNews/MarqueNews";



export default function Root() {
    return (
        <div className="min-h-[100vh] flex flex-col poppins">
            {/* Header */}
            <header className="text-center text-gray-500 flex-grow">
                <h1 className="mt-10 text-gray-600">The Dragon News</h1>
                <p className="text-xl">Journalism Without Fear or Favour</p>
                {/* Live time Area */}
                {/* Marque News  */}
                <div className="flex bg-gradient-to-l text-white pl-4 py-3 from-[#D72050] to-gray-900 w-3/5 mx-auto my-5">
                <button className="btn bg-[#D72050] border-none text-white hover:text-black text-xl">Letest</button>
                <MarqueNews></MarqueNews>
                </div>
            </header>
            {/* Main Body */}
            {/* Footer */}
            <Footer></Footer>
        </div>
    )
}