import { DateTime, Settings } from 'luxon'
import type { NextApiRequest, NextApiResponse } from 'next'

const handle = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const response = {
        date: DateTime.local().toISO(),
        zone: Settings.defaultZone.name,
    }
    // start the server, wait ~30 seconds, uncomment the following line
    // console.log('in api/v1/hello.ts', response)
    res.status(200).json(response)
}
export default handle
