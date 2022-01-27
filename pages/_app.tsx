import { FC } from 'react'
import type { AppProps } from 'next/app'
import { I18nProvider } from 'next-localization'
import { useRouter } from 'next/router'
import 'styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()

    const { lngDict, ...rest } = pageProps

    return <I18nProvider lngDict={lngDict} locale={router.locale}>
        <Component {...rest} />
    </I18nProvider>
}

export default App
