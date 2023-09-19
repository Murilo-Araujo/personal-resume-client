function HeroComponent() {
    return (
        // colocando um css para que quando a imagem ultrapassar a direita, ela não apareça
        <div className='h-screen bg-black w-full relative overflow-hidden'>
            <div className="w-full h-full flex justify-center items-center absolute">
                <div className="md:mb-24 md:ml-16 -space-y-6">
                     {/*eslint-disable-next-line react/no-unescaped-entities */}
                    <div className="text-white z-50 text-[25px] md:text-[60px]">HELLO THERE, I'M </div>
                    <div className="text-white z-50 text-[40px] md:text-[90px] font-extrabold">MURILO MARÇAL</div>
                    <div className="text-white z-50 text-[25px] md:text-[60px]">A FULLSTACK DEVELOPER</div>
                </div>
            </div>

            <img src="/granulated.png" className="w-full h-full abosolute"/>
            <img src="/cloud2.png" className="md:h-1/2 h-[30%] first-cloud-animation absolute bottom-0 md:-right-36 -right-24 top-0 rounded-full opacity-80 scale-7"/>
            <img src="/cloud.png" className="md:h-1/2 h-[30%] second-cloud-animation absolute bottom-0 md:-right-24 -left-24 rounded-full"/>
            <img src="/me-in-astronaut.png" className='md:h-1/2 h-2/6 absolute bottom-4 left-5 astronaut-animation'/>
        </div>
    )
}

export default HeroComponent;