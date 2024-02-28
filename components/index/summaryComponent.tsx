import BubbleComponent from "@/components/index/bubbleComponent";
import {useTranslation} from "react-i18next";

function SummaryComponent() {

    const {t} = useTranslation('summaryComponent');
    return (
        <div className="relative bg-black w-full h-full ">
            <div className="absolute top-0 w-full h-full">
                <img src="/granulated.png" className="relative top-0 h-1/2 w-full z-20"/>
                <img src="/granulated.png" className="relative top-0 h-1/2 w-full z-20"/>
            </div>

            <div className='relative top-0 w-full h-full'>
                <img src="/wave.svg" className="wave-animation bg-black z-10"/>

                <div className="bg-primary w-full h-full z-30 pt-2 ">
                    <div
                        className='w-full h-full justify-center items-center text-justify p-6 md:p-32 relative font-bold z-30 space-y-32'>
                        <p data-aos="fade-right" className="text-3xl/[2.8rem] md:text-6xl/[5.4rem] font-murs-gothic"> {t('firstParagraph')}</p>
                        <p data-aos="fade-left" className="text-3xl/[2.8rem] md:text-6xl/[5.4rem] font-murs-gothic"> {t('secondParagraph')}</p>
                    </div>
                </div>
                <div className="relative">

                    <img src="/hero-footer.svg" className=" bg-black z-10"/>
                    <BubbleComponent className={" absolute left-[10%] bottom-[10%]"}/>
                    <BubbleComponent className={" absolute left-[25%] bottom-[12%]"}/>
                    <BubbleComponent className={" absolute left-[15%] bottom-[25%]"}/>
                    <BubbleComponent className={" absolute left-[20%] bottom-[33%]"}/>
                    <BubbleComponent className={" absolute left-[5%] bottom-[45%]"}/>
                    <BubbleComponent className={" absolute left-[35%] bottom-[50%]"}/>
                    <BubbleComponent className={" absolute left-[23%] bottom-[55%]"}/>
                    <BubbleComponent className={" absolute left-[12%] bottom-[65%]"}/>
                    <BubbleComponent className={" absolute right-[10%] bottom-[10%]"}/>
                    <BubbleComponent className={" absolute right-[35%] bottom-[15%]"}/>
                    <BubbleComponent className={" absolute right-[25%] bottom-[25%]"}/>
                    <BubbleComponent className={" absolute right-[10%] bottom-[40%]"}/>
                    <BubbleComponent className={" absolute right-[12%] bottom-[55%]"}/>
                    <BubbleComponent className={" absolute right-[20%] bottom-[65%]"}/>
                    <BubbleComponent className={" absolute right-[7%] bottom-[80%]"}/>
                </div>

            </div>

        </div>
    )
}

export default SummaryComponent;