import BubbleComponent from "@/components/bubbleComponent";

function SummaryComponent() {
    return (
        <div className="relative bg-black w-full h-full ">
            <div className="absolute top-0 w-full h-full">
                <img src="/granulated.png" className="relative top-0 h-1/2 w-full z-20"/>
                <img src="/granulated.png" className="relative top-0 h-1/2 w-full z-20"/>
            </div>

            <div className='relative top-0 w-full h-full'>
                <img src="/wave.svg" className="wave-animation bg-black z-10"/>

                <div className="bg-primary w-full h-full z-30">
                    <div
                        className='w-full h-full space-y-12 justify-center items-center text-3xl md:text-6xl text-justify text-white p-6 md:p-32 font-bold'>
                        <p> To consolidate my career in the Software Engineering field and to develop professionally by
                            working on challenging projects that add value to the company.</p>
                        <p> My focus is to improve my programming skills, acquire new knowledge in emerging technologies
                            and agile development methodologies, with the aim of delivering efficient and quality
                            solutions.</p>
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