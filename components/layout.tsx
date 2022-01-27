import { Settings } from 'luxon'
import { useI18n } from 'next-localization'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

interface Props {
    children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    const router = useRouter()
    const i18n = useI18n()

    useEffect(() => {
        async function changeLocale() {
            i18n.set(router.locale, await import(`../locales/${router.locale}.json`))
            i18n.locale(router.locale)
            Settings.defaultLocale = router.locale
        }
        changeLocale()
    }, [router.locale])

    return <div>
        {children}
    </div>
}

export default Layout
