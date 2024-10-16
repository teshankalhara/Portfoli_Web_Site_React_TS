import Background from "../../components/background/Background"
import Pic1 from '../../assets/skills/pic1.jpg'

const name = 'teshan kalhara'
const desc = "I'm a Software Engineer passionate about building seamless, user-friendly web apps. With full-stack expertise, I focus on optimizing both front-end and back-end for performance and user experience."

const Home = () => {
    return (
        <>
            <Background />
            <div id='home' data-aos='fade-up' data-aos-delay='300' className='absolute top-0 flex lg:flex-row lg:items-center lg:justify-center w-full px-4 lg:px-40 sm:pb-24 md:pt-16 sm:pt-24 md:pb-24 md:mt-16 mt-12 z-10'>
                <div data-aos='fade-up' data-aos-delay='500' className='basis-4/5 md:text-left mt-10 md:mt-0 lg:pt-16'>
                    <h1 data-aos='fade-up' className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 capitalize'>
                        {name}
                    </h1>
                    <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-base md:text-base text-gray-300 mb-4'>
                        {desc}
                    </p>
                    <button type="button" data-aos='fade-up' data-aos-delay='400' className="text-slate-900 bg-white hover:bg-slate-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center lg:mt-3">
                        Contact
                    </button>
                </div>
                <div data-aos='fade-up' data-aos-delay='600' className='basis-3/5 flex justify-center items-center mt-0 md:mt-0 text-white'>
                    <img src={Pic1} alt="Hero Image" className='h-[300px] sm:h-[300px] md:h-[400px] w-[250px] sm:w-[360px] object-cover rounded-lg' />
                </div>
            </div>
        </>
    )
}

export default Home