import Background from "../../components/background/Background"
import ExperienceCard from "../../components/experienceCard/ExperienceCard"

const desc = "I'm a Software Engineer passionate about building seamless, user-friendly web apps. With full-stack expertise, I focus on optimizing both front-end and back-end for performance and user experience."

const experience = [
    { exp: "2007-2020", title: "school" },
    { exp: "2022-2024", title: "university" },
]

const About = () => {
    return (
        <>
            <Background />
            <div id='about' data-aos='fade-up' data-aos-delay='300' className='absolute top-0 flex lg:flex-row lg:items-center lg:justify-center w-full px-4 lg:px-40 sm:pb-24 md:pt-12 sm:pt-24 md:pb-24 md:mt-16 mt-12 z-10'>
                <div className='container px-5 py-10 mx-auto'>
                    <div className='md:pt-0 md:mt-0 mt-12 pt-52 mb-3 relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
                        <h1 data-aos='fade-up' data-aos-delay='400' className='mt-2 text-lg font-semibold text-white md:text-[40px] capitalize'>full-stack developer</h1>
                        <p data-aos='fade-up' data-aos-delay='600' className='text-sm leading-4 font-medium text-white capitalize'>teshan kalhara</p>
                    </div>
                    <div className='flex flex-col text-left w-full mb-12 pt-4'>
                        <p data-aos='fade-up' data-aos-delay='400' className='lg:w-2/3 mx-auto leading-relaxed text-base text-white'>
                            {desc}
                        </p>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap -m-4 text-center text-white'>
                        {experience && experience.map((item) => {
                            return (
                                <ExperienceCard title={item.title} exp={item.exp} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About