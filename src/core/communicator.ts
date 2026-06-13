import wretch from 'wretch'
import type { PublisherResponse } from '../types/server.ts'

class CommunicatorImpl {
    private readonly baseUrl = 'http://localhost:3000'
    private readonly wretch = wretch(this.baseUrl)

    private beaconTimeout: NodeJS.Timeout
    private trackIdList: string[] = []

    public async publisher(foundedWidgetIds: string[]) {
        return await this.wretch
            .post({ foundedWidgetIds }, '/api/publisher')
            .json<PublisherResponse>()
            .catch((_e: Error) => {
                console.error(_e)
                return { referrer: '', data: [] } as PublisherResponse
            })
    }

    public verified(trackId: string) {
        this.beaconTimeout && clearTimeout(this.beaconTimeout)
        this.trackIdList.push(trackId)
        this.beaconTimeout = setTimeout(() => {
            this.flushVerified()
        }, 500)
    }

    public flushVerified() {
        this.beaconTimeout && clearTimeout(this.beaconTimeout)
        this.trackIdList = []
        window.navigator.sendBeacon(
            new URL('/api/verified', this.baseUrl),
            new Blob(this.trackIdList)
        )
    }
}

export const Communicator = new CommunicatorImpl()
