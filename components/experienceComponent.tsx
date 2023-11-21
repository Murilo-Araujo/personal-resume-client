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


    // 22/09/2022 to now
    const [years, months, days] = Object.values(calculateDifference(new Date(2022, 8, 1), new Date()));
    const locale = i18n.language === 'pt-BR' ? ptBR : enGB;

    const experiences: Experience[] = t('experiences', {returnObjects: true})


    return (
        <div className="bg-white w-full h-full pt-12 z-40 ">
            <div
                className='w-full h-full justify-center items-center text-justify text-gray-900 spa p-6 md:p-32 relative font-bold z-30'>
                <p className={'text-4xl md:text-6xl font-bold text-center z-30 w-full top-1/4 lg:mt-5'}
                   data-aos="fade-left">{t('title')}
                    <span className={'text-xl ml-2 md:text-2xl text-gray-400 text-center z-30 w-full top-1/4 lg:mt-5 '}>
                       ({years} {years > 1 ? l('years') : l('year')} {l('and')} {months} {months > 1 ? l('months') : l('month')})
                    </span>
                </p>

                <div className={'flex flex-col mt-16 lg:mt-32 items-center'}>
                    { experiences.map((job: Experience, index: number) => {
                        return (
                            <div key={index} className={'mt-10'}>
                                <p className={'text-2xl md:text-3xl font-bold z-30 w-full top-1/4 lg:mt-5'}
                                   data-aos="fade-right">{job.company}
                                    <span className={'text-xl ml-2 md:text-2xl text-gray-400 z-30 w-full top-1/4 lg:mt-5'}>
                                        ({format(parse(job.startDate, 'yyyy-MM-dd', new Date()), 'MMMM yyyy', {locale})} - {job.endDate ? format(parse(job.endDate, 'yyyy-MM-dd', new Date()), 'MMMM yyyy', {locale}) : l('present')})
                                    </span>
                                </p>


                                <p className={'text-lg md:text-2xl z-30 w-full text-justify top-1/4 mt-6 items-center flex flex-wrap'}
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


                                <p className={'text-lg md:text-2xl z-30 w-full text-justify top-1/4 mt-3'}
                                   data-aos="fade-right">{job.description}</p>

                            </div>
                        )
                    })}
                </div>


            </div>

        </div>
    )
}