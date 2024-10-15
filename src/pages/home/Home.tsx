const name = 'teshan kalhara'
const desc = "I'm a Software Engineer passionate about building seamless, user-friendly web apps. With full-stack expertise, I focus on optimizing both front-end and back-end for performance and user experience."

const Home = () => {
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center">
            <div className="md:h-[620px] h-[620px] md:w-[1500px] lg:w-[1800px] xl:w-[2100px] w-[900px] sm:w-[900px] bg-gradient-to-r absolute bg-slate-900 rounded-full transform rotate-6 -top-32">
            </div>
            <div id='home' className='flex lg:flex-row lg:items-center lg:justify-center w-full px-4 lg:px-40 sm:pb-24 md:pt-16 sm:pt-24 md:pb-24 md:mt-0 z-10'>
                <div data-aos='fade-up' className='basis-4/5 md:text-left mt-10 md:mt-0'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 capitalize'>
                        {name}
                    </h1>
                    <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-base md:text-base text-gray-300 mb-4'>
                        {desc}
                    </p>
                    <button type="button" className="text-slate-900 bg-white hover:bg-slate-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center ">
                        Contact
                    </button>
                </div>
                <div data-aos='fade-up' className='basis-3/5 flex justify-center items-center mt-0 md:mt-0 text-white'>
                    picture
                </div>
            </div>
        </div>
    )
}

export default Home