import Link from 'next/link'
import { useRouter } from 'next/router';

interface ChangeLocaleComponentProps {
    className: string
}

const ChangeLocaleComponent = (props: ChangeLocaleComponentProps) => {
    const router = useRouter();

    return (
        <Link href={router.locale === 'en' ? '/pt-BR' : '/en'} locale={false} className={`text-white text-xl font-semibold hover:text-gray-400 ${props.className}`}>
            <p className="text-white text-xl font-semibold hover:text-gray-400">{router.locale === 'en' ? 'PT' : 'EN'}</p>
        </Link>
    )
}

export default ChangeLocaleComponent;
