import { FC, useEffect } from 'react'
import { useI18n } from 'next-localization'
import Layout from 'components/layout'

const Home: FC = () => {
    const { t } = useI18n()

    const load = async () => {
        const response = await fetch('/api/v1/hello')
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        load()
    }, [])

    return <Layout>
        {t('hello')}
    </Layout>
}

export default Home
