import ChangeLocaleComponent from "@/components/index/changeLocaleComponent";
import Link from "next/link";
import {useTranslation} from "react-i18next";


function HeaderComponent(){
    const { t } = useTranslation('headerComponent');

    return (
        <div className="fixed backdrop-blur-sm h-16 w-full z-50 bg-black/10">
            <div className="flex justify-between items-center h-full w-full">
                <Link href={'/'} className="ml-1 md:ml-16 text-white font-bold text-sm md:text-2xl hidden sm:block">Murilo Marçal</Link>
                <div className="flex-1 flex items-center justify-end mr-1 md:mr-12 space-x-4 md:space-x-8 text-sm md:text-2xl px-4">
                    <Link href={'/'} className="text-xs md:text-xl font-bold underline-header text-white">{t('home')}</Link>
                    {/*<Link href={'/about'} className="text-xs md:text-xl font-bold underline-header text-white">{t('about')}</Link>*/}
                    {/*<Link href={'/projects'} className="text-xs md:text-xl font-bold underline-header text-white">{t('projects')}</Link>*/}
                    <Link href={'/contacts'} className="text-xs md:text-xl font-bold underline-header text-white">{t('contact')}</Link>
                    <ChangeLocaleComponent className={""}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;