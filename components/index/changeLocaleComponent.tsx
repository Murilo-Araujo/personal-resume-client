import Link from 'next/link'
import { useRouter } from 'next/router';

interface ChangeLocaleComponentProps {
    className: string
}

const ChangeLocaleComponent = (props: ChangeLocaleComponentProps) => {
    const router = useRouter();
    // new path with locale as first segment
    let path = router.asPath;
    path = path.replace('/', `/${router.locale === 'en' ? 'pt-BR' : 'en'}/`);

    return (
        <Link href={path} locale={false} className={`text-white text-xl font-semibold hover:text-gray-400 ${props.className}`}>
            <p className="text-white text-xs md:text-xl font-bold underline-header">{router.locale === 'en' ? 'EN' : 'PT' }</p>
        </Link>
    )
}

export default ChangeLocaleComponent;
