import {useTranslation} from "react-i18next";
import Image from "next/image";
import {FaExternalLinkAlt} from "react-icons/fa";


type project = {
    project: string;
    url: string;
    description: string;
    image: string;
    technologiesUsed: string[];
    myContributions: string[];
    elementsToObserve: string[];
    impactAndResults: string[];
};


export default function HighlightedProjectsComponent() {
    const {t} = useTranslation('highlightedProjectsComponent');
    const {t: ts} = useTranslation('shared');

    const projects: project[] = t('highlightedProjects', {returnObjects: true});

    return (
        <div className={'relative bg-black pb-6'}>
            <div className="bg-white w-full h-full z-40 pt-16 lg:pt-32">
                <div
                    className='w-full h-full justify-center items-center text-gray-900 spa p-6 md:p-32 relative font-bold z-30'>
                    <p className={'text-4xl/[3.37rem] md:text-7xl font-bold text-center z-30 w-full top-1/4 lg:mt-5 font-murs-gothic'}
                       data-aos="fade-left uppercase">{t('title')} </p>

                    <div className={'flex flex-col mt-16 items-center space-y-64'}>
                        {projects.map((project: project, index: number) => {
                            return (
                                <div key={index} className={'mt-16 lg:mt-32 w-full lg:w-4/5'}>
                                    <Image src={project.image} alt={project.project} width={500} height={300}
                                           className={'rounded-lg w-full shadow-2xl'}
                                           data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}/>
                                    <div className={'mt-4 space-y-6'}>
                                        <h1 className={'text-2xl md:text-5xl font-bold z-30 w-full top-1/4 mt-12 font-vela-sans'}
                                            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                                            {project.project}
                                        </h1>


                                        <div data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                                            <a href={project.url} target={'_blank'}
                                               className={'text-xl flex flex-row text-blue-600 hover:underline items-center w-fit'}>
                                                {t('seeLiveProject')}
                                                <FaExternalLinkAlt className={'text-lg ml-2'}/>
                                            </a>
                                        </div>

                                        <div className={'text-lg font-normal text-gray-500'}
                                             dangerouslySetInnerHTML={{__html: project.description}}
                                             data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}/>

                                        <div className={'text-lg text-gray-500'}
                                             data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
                                            <ul className={'flex flex-row space-x-4 items-center'}>
                                                {project.technologiesUsed.map((tech: string, index: number) => {
                                                    return (
                                                        <li key={index}>
                                                            <Image src={`/icons/${tech}.png`} alt={tech} width={40}
                                                                   height={40}
                                                                   className={'inline-block'}/>
                                                        </li>
                                                    )
                                                })}
                                            </ul>

                                        </div>

                                        <div data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>

                                            <a href={project.url} target={'_blank'}
                                               className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                {ts('seeMore')}
                                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="2"
                                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a>
                                        </div>
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