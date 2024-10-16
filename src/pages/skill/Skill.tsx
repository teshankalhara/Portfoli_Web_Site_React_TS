import Background from "../../components/background/Background"
import Pic1 from '../../assets/skills/pic1.jpg'
import Pic2 from '../../assets/skills/pic2.jpg'
import Pic3 from '../../assets/skills/pic3.jpg'

const desc = "I'm a Software Engineer passionate about building seamless, user-friendly web apps. With full-stack expertise, I focus on optimizing both front-end and back-end for performance and user experience."

const Skill = () => {
    return (
        <>
            <Background />
            <div id='skill' className='absolute top-0 flex lg:flex-row lg:items-center lg:justify-center w-full px-4 lg:px-40 sm:pb-24 md:pt-16 sm:pt-24 md:pb-24 md:mt-16 mt-12 z-10'>
                <div className='max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
                    <div className='md:pt-0 md:mt-0 mt-12 pt-52 relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
                        <h1 data-aos='fade-up' data-aos-delay='400' className='mt-2 text-lg font-semibold text-white md:text-[40px] capitalize'>full-stack developer</h1>
                        <p data-aos='fade-up' data-aos-delay='600' className='text-sm leading-4 font-medium text-white'>Skills</p>
                    </div>
                    <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 '>
                        <img src={Pic1} data-aos='fade-up' data-aos-delay='700' alt="pic1" className='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full' loading='lazy' />
                        <img src={Pic2} data-aos='fade-up' data-aos-delay='500' alt="pic2" className='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32' loading='lazy' />
                        <img src={Pic3} data-aos='fade-up' data-aos-delay='500' alt="pic3" className='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32' loading='lazy' />
                    </div>
                    <div className='mt-4 md:col-start-1 md:row-start-3 self-center lg:mt-2 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
                        <button data-aos='fade-up' data-aos-delay='800' type='button' className="text-slate-900 bg-white hover:bg-slate-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center lg:mt-3">
                            Download CV
                        </button>
                    </div>
                    <p data-aos='fade-up' data-aos-delay='500' className='mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 text-white lg:col-span-1'>
                       {desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Skill