import { config } from 'lib/config'
import { Settings } from 'luxon'

export async function middleware() {
    const siteConfig = config()

    console.log('in api/v1/_middleware.ts', {
        siteConfig,
        zone: Settings.defaultZone.name,
    })
}
