import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Murilo Marçal de Araujo</title>

                <link rel="icon" href="/me-with-glass.png"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
