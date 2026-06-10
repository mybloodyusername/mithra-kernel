import type {AdData} from "./ad-data.ts";

export type AdRendered = AdData & {
    isRendered: boolean;
    isVerified: boolean;
    widgetContainer?: HTMLElement;
}