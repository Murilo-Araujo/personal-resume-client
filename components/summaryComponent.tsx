function SummaryComponent() {
    return (
        <div className="relative bg-black w-full h-full ">
            <img src="/wave.png" className="absolute -bottom-20 md:-top-80 right-0 wave-animation z-20"/>
            <img src="/granulated.png" className="w-full h-full abosolute z-10"/>

            <div className="bg-primary w-full h-full absolute -bottom-48 z-20">
                <div className=' w-full h-full space-y-12 justify-center items-center text-7xl text-justify text-white p-32 font-extrabold'>
                    <p> To consolidate my career in the Software Engineering field and to develop professionally by working on challenging projects that add value to the company.</p>
                    <p> My focus is to improve my programming skills, acquire new knowledge in emerging technologies and agile development methodologies, with the aim of delivering efficient and quality solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default SummaryComponent;