import { Html, Head, Main, NextScript } from 'next/document'
import HeaderComponent from "@/components/headerComponent";

export default function Document() {
  return (
    <Html lang="en">
        <Head >
            <link rel="icon" href="/me-with-glass.png"/>
            <title>Murilo Marçal de Araujo</title>
        </Head>
      <body>
        <HeaderComponent />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
