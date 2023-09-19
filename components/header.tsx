function Header(){
    return (
        <div className="fixed backdrop-blur-sm h-24 w-full z-50">
            <div className="flex justify-between items-center h-full w-full">
                <span className="ml-1 md:ml-16 text-white font-bold text-sm md:text-2xl">Murilo Marçal</span>
                <div className="flex items-center justify-end mr-1 md:mr-12">
                    <span className="text-white text-xs md:text-xl font-bold">Home</span>
                    <span className="text-white text-xs md:text-xl font-bold ml-8">About</span>
                    <span className="text-white text-xs md:text-xl font-bold ml-8">Projects</span>
                    <span className="text-white text-xs md:text-xl font-bold ml-8">Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Header;