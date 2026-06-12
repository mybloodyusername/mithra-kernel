import type { AdResponse } from './ad-response.ts'

export type AdData = AdResponse & {
    isRendered: boolean
    isVerified: boolean
    widgetContainer?: HTMLElement
}
