import type { AdData } from '../types/ad-data.ts'
import type { AdResponse } from '../types/ad-response.ts'
import { Communicator } from './communicator.ts'
import { WidgetObserver } from './widget-observer.ts'

const fetchPublisher = async (foundedWidgetIds: string[]) => {
    return Communicator.publisher(foundedWidgetIds)
}

const findWidgets = () => {
    const elements = document.querySelectorAll('[id^=mithra-]')
    const elementsIds = Array.from(elements).map(
        (el) => `#${el.getAttribute('id')}`
    )
    return { elements, elementsIds }
}

const renderWidgets = () => {
    // TODO:
}

const initiateIntersectionObserver = () => {
    // TODO:
}

const watchWidgets = () => {
    // TODO:
}

class KernelImpl {
    private adDataList: AdResponse[] = []
    private adDataMap: Map<string, AdData> = new Map<string, AdData>()
    private widgetObserver = WidgetObserver

    constructor() {}

    async initiate() {
        const { elementsIds } = findWidgets()
        const publisher = await fetchPublisher(elementsIds)
        this.adDataList = publisher.data
        this.adDataMap = new Map<string, AdData>(
            publisher.data.map(
                (d) =>
                    [
                        d.widget.selector,
                        {
                            ...d,
                            isRendered: false,
                            isVerified: false,
                            widgetContainer:
                                document.querySelector(d.widget.selector) ??
                                undefined,
                        },
                    ] as [string, AdData]
            )
        )
    }
}

export const Kernel = new KernelImpl()
