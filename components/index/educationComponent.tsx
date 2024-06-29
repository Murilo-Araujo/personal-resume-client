import BubbleComponent from "@/components/index/bubbleComponent";
import {useTranslation} from "react-i18next";

function Blobs() {
    return (
        <>
            <img src='/blob-white1.svg' className='blob-animation absolute top-[50%] left-0 w-1/5 z-10'/>
            <img src='/blob-white2.svg' className='blob-animation absolute top-[65%] left-[20%] w-1/5 z-10'/>
            <img src='/blob-white3.svg' className='blob-animation absolute top-[90%] left-[45%] w-1/5 z-10'/>
            <img src='/blob-white4.svg' className='blob-animation absolute top-[85%] left-[70%] w-1/5 z-10'/>
            <img src='/blob-white5.svg' className='blob-animation absolute top-[40%] left-[80%] w-1/5 z-10'/>
            <img src='/blob-white6.svg' className='blob-animation absolute top-[25%] left-[55%] w-1/5 z-10'/>
            <img src='/blob-white7.svg' className='blob-animation absolute top-[30%] left-[30%] w-1/5 z-10'/>
            <img src='/blob-white8.svg' className='blob-animation absolute top-[5%] left-[10%] w-1/5 z-10'/>
            <img src='/blob-white9.svg' className='blob-animation absolute top-[0%] left-[0%] w-1/5 z-10'/>
            <img src='/blob-white10.svg' className='blob-animation absolute top-[0%] left-[50%] w-1/5 z-10'/>
            <img src='/blob-white11.svg' className='blob-animation absolute top-[20%] left-[70%] w-1/5 z-10'/>

        </>

    )
}

function Bubbles() {
    return (
        <>
            <BubbleComponent className={'absolute top-[45%] left-0 z-10'}/>
            <BubbleComponent className={'absolute top-[10%] left-[20%] z-10'}/>
            <BubbleComponent className={'absolute top-[15%] left-[30%] z-10'}/>
            <BubbleComponent className={'absolute top-[5%] left-[60%] z-10'}/>
            <BubbleComponent className={'absolute top-[0%] left-[80%] z-10'}/>
            <BubbleComponent className={'absolute top-[20%] left-[80%] z-10'}/>
            <BubbleComponent className={'absolute top-[25%] left-[70%] z-10'}/>
            <BubbleComponent className={'absolute top-[30%] left-[50%] z-10'}/>
            <BubbleComponent className={'absolute top-[10%] left-[90%] z-10'}/>
            <BubbleComponent className={'absolute top-[15%] left-[10%] z-10'}/>
            <BubbleComponent className={'absolute top-[20%] left-[35%] z-10'}/>
            <BubbleComponent className={'absolute top-[30%] left-[80%] z-10'}/>
            <BubbleComponent className={'absolute top-[40%] left-[25%] z-10'}/>
            <BubbleComponent className={'absolute top-[50%] left-[10%] z-10'}/>
            <BubbleComponent className={'absolute top-[60%] left-[60%] z-10'}/>
            <BubbleComponent className={'absolute top-[70%] left-[45%] z-10'}/>
            <BubbleComponent className={'absolute top-[80%] left-[60%] z-10'}/>
            <BubbleComponent className={'absolute top-[85%] left-[90%] z-10'}/>
            <BubbleComponent className={'absolute top-[90%] left-[30%] z-10'}/>


        </>
    )
}

export default function EducationComponent() {
    const {t} = useTranslation('educationComponent');
    return (
        <div className='relative top-0 w-full h-full'>

            <div className="relative bg-black w-full h-full ">
                <div className="absolute top-0 w-full h-screen overflow-hidden">
                    <div className="absolute top-0 w-full h-full bg-black">
                        <img src="/granulated.png" className="relative top-0 w-full z-20"/>
                        <img src="/granulated.png" className="relative top-0 w-full z-20"/>
                    </div>
                </div>


                <div className=' relative h-[600px] top-0 w-full bg-black'>
                    <Bubbles/>
                    <Blobs/>

                </div>
                <div className={' relative bg-black'}>
                    <img src="/wave-white.svg" className={'wave-animation bg-none'}/>
                    <div className="bg-white w-full h-full z-40">
                        <div
                            className='w-full h-full justify-center items-center text-justify text-gray-900 p-6 md:p-32  relative font-bold z-30'>
                            <p className={'text-4xl/[3.37rem] md:text-7xl/[5rem] font-bold text-center z-30 w-full mt-32 font-murs-gothic uppercase'}
                               data-aos="fade-right">{t('degree')}
                            </p>
                            <p className={'text-xl ml-2 md:text-2xl text-gray-400 text-center mb-12 z-30 w-full top-1/4 lg:mt-5 font-vela-sans'}>
                                ({t('graduationDate')})
                            </p>

                            <p className={'text-2xl md:text-3xl/[2.8rem] font-bold text-center z-30 w-full top-1/4 lg:mt-5 font-vela-sans'}
                               data-aos="fade-left">{t('university')}
                                <span
                                    className={'text-xl ml-2 md:text-2xl text-gray-400 text-center z-30 w-full top-1/4 lg:mt-5 font-vela-sans'}>
                                    ({t('score')})
                                </span>
                            </p>


                            <p className={'text-lg md:text-3xl/[2.8rem] leading-10 text-gray-800 font-vela-sans z-30 w-full text-justify top-1/4 mt-16 lg:mt-32 '}
                               data-aos="fade-right" dangerouslySetInnerHTML={{__html: t('description')}}/>


                        </div>
                    </div>

                </div>


            </div>
        </div>

    )
}