import {useTranslation} from "react-i18next";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";



export default function Contact() {
    const {t} = useTranslation('contact');

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white relative">
            <img src={'/speed-line.svg'} alt={'speed-line'}
                 className={' top-0 left-0 z-10 w-auto h-screen w-full'}/>

            <div
                className=" absolute w-2/3 md:w-1/2 min-h-[50%] grid grid-cols-1 md:grid-cols-3 rounded-3xl bg-white z-20">
                <div className="justify-center items-center flex p-12 md:p-0 ml-0 md:ml-4">

                    <img src={'/contact.jpeg'} alt={'contact'}
                         className={'rounded-full'}/>
                </div>


                <div className="text-black w-full h-full flex flex-col items-center justify-center pb-4 col-span-2 space-y-5">
                    <h1 className="text-xl sm:text-4xl font-extrabold flex justify-center font-vela-sans">Murilo Marçal de
                        Araujo</h1>
                    <h2 className="text-base sm:text-2xl font-bold flex justify-center font-vela-sans text-gray-400">{t('software_engineer')}</h2>
                    <p className="text-xs sm:text-xl font-bold flex justify-center font-vela-sans text-gray-400">murilo_marcal@outlook.com</p>
                    <div className="flex justify-center items-center space-x-4">
                        <a href={'https://www.linkedin.com/in/murilo-marcal-de-araujo/'}
                           target="_blank"
                           rel="noreferrer"
                           className={'flex justify-center items-center'}>

                            <FaLinkedin
                                className={'text-2xl md:text-4xl text-gray-400 hover:scale-110 transform transition-all duration-300 ease-in-out hover:text-blue-500'}/>
                        </a>

                        <a href={'mailto:murilo_marcal@outlook.com'}
                           target="_blank"
                           rel="noreferrer"
                           className={'flex justify-center'}>
                            <IoIosMail
                                className={'text-3xl md:text-5xl text-gray-400 hover:scale-110 transform transition-all duration-300 ease-in-out hover:text-black'}/>
                        </a>

                        <a href={'https://github.com/Murilo-Araujo'}
                           target="_blank"
                           rel="noreferrer"
                           className={'flex justify-center'}>
                            <FaGithub
                                className={'text-2xl md:text-4xl text-gray-400 hover:scale-110 transform transition-all duration-300 ease-in-out hover:text-black'}/>
                        </a>

                    </div>
                </div>


            </div>

        </div>
    );
}
