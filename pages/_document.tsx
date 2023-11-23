import {Html, Head, Main, NextScript} from 'next/document'
import HeaderComponent from "@/components/index/headerComponent";
import ChangeLocaleComponent from "@/components/index/changeLocaleComponent";

export default function Document() {

    return (
        <Html lang="en">
            <Head title={'Murilo Marçal de Araujo'}>
                <link rel="icon" href="/me-with-glass.png"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
