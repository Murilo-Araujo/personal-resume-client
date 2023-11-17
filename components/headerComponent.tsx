import ChangeLocaleComponent from "@/components/changeLocaleComponent";
import Link from "next/link";
import {useTranslation} from "react-i18next";


function HeaderComponent(){
    const { t } = useTranslation('header');

    return (
        <div className="fixed backdrop-blur-sm h-16 w-full z-50">
            <div className="flex justify-between items-center h-full w-full">
                <span className="ml-1 md:ml-16 text-white font-bold text-sm md:text-2xl">Murilo Marçal</span>
                <div className="flex items-center justify-end mr-1 md:mr-12 ">
                    <Link href={'/'} className="text-white text-xs md:text-xl font-bold underline-header">{t('HOME')}</Link>
                    <Link href={'/about'} className="text-white text-xs md:text-xl font-bold ml-8 underline-header">{t('ABOUT')}</Link>
                    <Link href={'/projects'} className="text-white text-xs md:text-xl font-bold ml-8 underline-header">{t('PROJECTS')}</Link>
                    <Link href={'/contacts'} className="text-white text-xs md:text-xl font-bold ml-8 underline-header">{t('CONTACT')}</Link>
                    <ChangeLocaleComponent className={"ml-8"}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;