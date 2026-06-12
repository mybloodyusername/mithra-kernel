import wretch from 'wretch'
import type { PublisherResponse } from '../types/server.ts'

class HttpClientImpl {
    private readonly baseUrl = 'http://localhost:3000'
    private readonly wretch = wretch(this.baseUrl)

    constructor() {}

    public async publisher(foundedWidgetIds: string[]) {
        return await this.wretch
            .post({ foundedWidgetIds }, '/api/publisher')
            .json<PublisherResponse>()
            .catch((_e: Error) => {
                console.error(_e)
                return { referrer: '', data: [] } as PublisherResponse
            })
    }
}

export const HttpClient = new HttpClientImpl()
