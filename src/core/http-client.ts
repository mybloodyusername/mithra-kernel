import wretch from "wretch"

class HttpClientImpl {
    get baseUrl(): string {
        return this._baseUrl;
    }

    set baseUrl(value: string) {
        this.wretch = wretch(this.baseUrl);
        this._baseUrl = value;
    }

    private _baseUrl: string;

    private wretch = wretch('');

    constructor() {

    }

    async get<T>(_endpoint: string, _params: Record<string, string>) {
        const endpoint = new URL(_endpoint);
        endpoint.search = new URLSearchParams(_params).toString();
        return await this.wretch.get(endpoint.href)
            .json<T>()
            .catch((e: Error) => {
                console.error('Mithra --> Uncaught error: ', e);
                return e;
            })
    }

}

export const HttpClient = new HttpClientImpl();