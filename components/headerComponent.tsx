import ChangeLocaleComponent from "@/components/changeLocaleComponent";
import Link from "next/link";
import {useTranslation} from "react-i18next";


function HeaderComponent(){
    const { t } = useTranslation('headerComponent');

    return (
        <div className="fixed backdrop-blur-sm h-16 w-full z-50">
            <div className="flex justify-between items-center h-full w-full">
                <span className="ml-1 md:ml-16 text-white font-bold text-sm md:text-2xl">Murilo Marçal</span>
                <div className="flex items-center justify-end mr-1 md:mr-12 space-x-4 md:space-x-8 text-sm md:text-2xl">
                    <Link href={'/'} className="text-white text-xs md:text-xl font-bold underline-header">{t('home')}</Link>
                    <Link href={'/about'} className="text-white text-xs md:text-xl font-bold underline-header">{t('about')}</Link>
                    <Link href={'/projects'} className="text-white text-xs md:text-xl font-bold underline-header">{t('projects')}</Link>
                    <Link href={'/contacts'} className="text-white text-xs md:text-xl font-bold underline-header">{t('contact')}</Link>
                    <ChangeLocaleComponent className={""}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;