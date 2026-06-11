import type {AdResponse} from "./ad-response.ts";

export type PublisherResponse = {
    referrer: string;
    data: AdResponse[];
}