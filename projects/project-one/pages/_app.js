import Head from 'next/head'
import { GlpThemeProvider } from 'components'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Project One</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5e7662fe45630059ae9347cf/1588662098088-YIU53RDZNTCCDI2JU0V4/ke17ZwdGBToddI8pDm48kFHuvyq-Sr_o8e-dvP-jC25Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIqfoiNJC-Ls_8uKMOnfDCy5Jt-ds5cksGKcyU-MtDa7Q/favicon.ico?format=100w" />
      </Head>
      <GlpThemeProvider>
        <Component {...pageProps} />
      </GlpThemeProvider>
    </>
  )
}

export default MyApp
