import ExperienceCardType from "../../types/ExperienceCardType"

const ExperienceCard = ({ exp, title }: ExperienceCardType) => {
    return (
        <div className='p-4 md:w-1/4 sm:w-1/2 w-full text-slate-100'>
            <div className='border-2 border-slate-100 hover:bg-slate-100 hover:text-slate-900 px-4 py-6 rounded-lg'>
                <h2 className='title-font font-medium text-3xl hover:text-slate-900 capitalize'>{exp}</h2>
                <p className='leading-relaxed capitalize mt-1'>{title}</p>
            </div>
        </div>
    )
}

export default ExperienceCard