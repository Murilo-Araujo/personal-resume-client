import BubbleComponent from "@/components/index/bubbleComponent";
import {useTranslation} from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactComponent() {
    const {t} = useTranslation('contact')
    return (
        <div className="relative bg-black w-full h-full ">
            <div className="absolute top-0 w-full h-full overflow-hidden">
                <img src="/granulated.png" className="relative top-0 w-full z-20"/>
            </div>

            <div className='relative top-0 w-full h-full'>
                <img src="/wave.svg" className="wave-animation bg-black z-10"/>

                <div className="bg-primary w-full h-full z-30">
                    <div
                        className='w-full h-full space-y-12 justify-center items-center text-3xl md:text-6xl text-justify text-white p-6  relative font-bold z-30'>
                    {/*    hrefs with icons*/}
                        <div className={"flex justify-center items-center space-x-4"}>
                            <a href="">
                                <FaGithub className={"w-10 h-10 text-white"}/>
                            </a>
                            <a href="">
                                <FaLinkedin className={"w-10 h-10 text-white"}/>
                            </a>
                            <a href="">
                                <FaInstagram className={"w-10 h-10 text-white"}/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}