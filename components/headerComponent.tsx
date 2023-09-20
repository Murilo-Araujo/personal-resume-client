function HeaderComponent(){
    return (
        <div className="fixed backdrop-blur-sm h-16 w-full z-50">
            <div className="flex justify-between items-center h-full w-full">
                <span className="ml-1 md:ml-16 text-white font-bold text-sm md:text-2xl">Murilo Marçal</span>
                <div className="flex items-center justify-end mr-1 md:mr-12 ">
                    <span className="text-white text-xs md:text-xl font-bold underline-header">Home</span>
                    <span className="text-white text-xs md:text-xl font-bold ml-8 underline-header">About</span>
                    <span className="text-white text-xs md:text-xl font-bold ml-8 underline-header">Projects</span>
                    <span className="text-white text-xs md:text-xl font-bold ml-8 underline-header">Contact</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;