import Image from "next/image";
import Link from "next/link";

function Error({statusCode}) {
    return (

        <>
            <img src={'/not_found_wave.svg'} alt={'error'}
                 className={'absolute top-0 left-0 w-full h-screen'}/>
            <div className="text-center absolute flex flex-col space-y-4 justify-center items-center w-full h-full">
                <h1 className="text-6xl font-extrabold font-vela-sans text-white">Oops! Page not found</h1>
                <h1 className="text-6xl font-extrabold font-vela-sans text-white ">{statusCode}</h1>
                <Link href={'/'}>
                    <div className="text-xl font-bold font-vela-sans text-blue-500 hover:text-blue-700 underline">Go back to home</div>
                </Link>
            </div>
        </>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error