import {useTranslation} from "react-i18next";
import {format, intervalToDuration, parse} from "date-fns";
import {enGB, ptBR} from "date-fns/locale";
import i18n from "i18next";

type Experience = {
    company: string;
    startDate: string;
    endDate?: string;
    role: string;
    technologies?: string[];
    description: string;
};

function Blobs() {
    return (
        <>
            <img src='/blob-white5.svg' className='absolute top-[30%] right-[47%] w-1/5 z-20'/>
            <img src='/blob-white7.svg' className='absolute top-[40%] left-[0%] w-1/5 z-20'/>
            <img src='/blob-white8.svg' className='absolute top-[55%] left-[20%] w-1/5 z-20'/>
            <img src='/blob-white9.svg' className='absolute top-[40%] right-[0%] w-1/5 z-20'/>
            <img src='/blob-white10.svg' className='absolute top-[45%] left-[50%] w-1/5 z-20'/>
            <img src='/blob-white11.svg' className='absolute top-[20%] left-[70%] w-1/5 z-20'/>
            <img src='/blob-animated.svg' className='absolute top-[50%] right-[15%] w-[15%] z-20'/>
            <img src='/blob-animated2.svg' className='absolute spin top-[70%] left-[45%] w-[10%] z-20'/>
        </>

    )
}

export default function ExperienceComponent() {
    const {t} = useTranslation('experienceComponent');
    const {t: l} = useTranslation('shared');

    const calculateDifference = (startDate: Date, endDate: Date) => {
        const duration = intervalToDuration({
            start: startDate,
            end: endDate
        });

        return {
            years: duration.years || 0,
            months: duration.months || 0,
            days: duration.days || 0,
            hours: duration.hours || 0,
            minutes: duration.minutes || 0,
            seconds: duration.seconds || 0,
        };
    };


    const [years, months, days] = Object.values(calculateDifference(new Date(2022, 8, 1), new Date()));
    const locale = i18n.language === 'pt-BR' ? ptBR : enGB;

    const experiences: Experience[] = t('experiences', {returnObjects: true})


    return (
        <div className={'relative bg-black pb-6'}>
            <div className="bg-white w-full h-full z-40 pt-32">
                <div
                    className='w-full h-full justify-center items-center text-justify text-gray-900 spa p-6 md:p-32 relative font-bold z-30'>
                    <p className={'text-4xl/[3.37rem] md:text-7xl font-bold text-center z-30 w-full top-1/4 lg:mt-5 font-murs-gothic'}
                       data-aos="fade-left uppercase">{t('title')}
                        <span
                            className={'text-xl ml-2 md:text-2xl text-gray-400 text-center z-30 w-full top-1/4 whitespace-nowrap lg:mt-5 font-vela-sans'}>
                       ({years} {years > 1 ? l('years') : l('year')} {l('and')} {months} {months > 1 ? l('months') : l('month')})
                    </span>
                    </p>

                    <div className={'flex flex-col mt-16 lg:mt-32 items-center space-y-44'}>
                        {experiences.map((job: Experience, index: number) => {
                            return (
                                <div key={index} className={'mt-10'}>
                                    <p className={'text-2xl md:text-5xl font-bold z-30 w-full top-1/4 lg:mt-5 font-vela-sans'}
                                       data-aos="fade-right">{job.company}
                                        <span
                                            className={'text-xl ml-2 md:text-2xl text-gray-400 z-30 w-full top-1/4 lg:mt-5 '}>
                                        ({format(parse(job.startDate, 'yyyy-MM-dd', new Date()), 'MMMM yyyy', {locale})} - {job.endDate ? format(parse(job.endDate, 'yyyy-MM-dd', new Date()), 'MMMM yyyy', {locale}) : l('present')})
                                    </span>
                                    </p>


                                    <p className={'text-lg md:text-4xl/[3.37rem] z-30 w-full mb-16 text-justify top-1/4 mt-6 items-center font-vela-sans flex flex-wrap'}
                                       data-aos="fade-right">
                                        {job.role} -
                                        {job.technologies && job.technologies.length > 0 &&
                                            job.technologies.map((technology: string) => (

                                                // eslint-disable-next-line react/jsx-key
                                                <span
                                                    className={'px-3 py-1 text-xs text-white m-1 rounded-full bg-primary/80 hover:bg-primary flex'}>
                                                    {technology}
                                            </span>
                                            ))
                                        }
                                    </p>

                                    <div className={'text-lg md:text-3xl/[2.8rem] z-30 w-full text-justify top-1/4 mt-6 font-vela-sans'}
                                         data-aos="fade-right">
                                        <div dangerouslySetInnerHTML={{__html: job.description}}/>

                                    </div>

                                </div>
                            )
                        })}
                    </div>


                </div>

            </div>
            <div className={'bg-green-radial-gradient w-full relative h-auto top-0 pb-2 left-0 z-30'}>
                <Blobs/>
                <div className={'w-full h-full bg-[#1b1c1e]/50 absolute top-0 left-0 z-10'}/>
                <img src={'/wave-white-footer.svg'}
                     className={'w-full z-20 text-white absolute  bg-none'}/>
                <img src={'/astronaut.png'}
                     className={'z-10 text-white -ml-32 pt-24 wave-animation h-screen/2  bg-none'}/>

            </div>
        </div>
    )
}