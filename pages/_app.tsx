import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import HeaderComponent from "@/components/headerComponent";
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useRouter} from "next/router";


export default function App({Component, pageProps}: AppProps) {

    const locale = useRouter().locale;

    i18n
        .use(initReactI18next)
        .init({
            resources: loadLocales(),
            lng: locale,
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false,
            },
        });

    return (
        <>
            <HeaderComponent/>
            <Component {...pageProps} />
        </>

    )

}


function loadLocales() {
    const locales: any = {};

    // @ts-ignore
    const requireContext = require.context('../locales', true, /\.json$/);

    requireContext.keys().forEach((key: string) => {
        const split = key.split('/');
        const folder = split[1];

        if (!locales[folder]) {
            locales[folder] = {};
        }

        const json = requireContext(key);
        locales[folder] = {
            ...locales[folder],
            ...json,
        }
    });

    return locales;
}