import NavBar from "../navbar/NavBar"

const Hero = () => {
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
            <div className="md:h-[600px] h-[880px] md:w-[1500px] w-[900px] sm:w-[900px] bg-gradient-to-r absolute bg-blue-900 rounded-full transform rotate-6 -top-32">
            </div>
            <NavBar />
        </div>
    )
}

export default Hero