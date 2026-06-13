import { createStore } from 'solid-js/store'
import type { AdResponse } from '../types/ad-response.ts'
import type { AdData } from '../types/ad-data.ts'
import { createEffect, createRoot } from 'solid-js'
import { widgetRenderer } from './widget-renderer.ts'
import type { PublisherResponse } from '../types/server.ts'
import { HttpClient } from './http-client.ts'

type StoreModel = {
    foundedWidgetIds: string[]
    publisher?: PublisherResponse
    adsMap: Record<string, AdData>
    observer?: IntersectionObserver
}

const [store, setStore] = createStore<StoreModel>({
    foundedWidgetIds: [],
    publisher: undefined,
    adsMap: {},
    observer: undefined,
})

const setAdsMap = (data: AdResponse[]) => {
    const adsMap = data.reduce<Record<string, AdData>>(
        (previousValue, currentValue) => {
            previousValue[currentValue.widget.selector] = {
                ...currentValue,
                isRendered: false,
                isVerified: false,
                widgetContainer:
                    document.querySelector(currentValue.widget.selector) ??
                    undefined,
            } satisfies AdData
            return previousValue
        },
        {} satisfies Record<string, AdData>
    )
    setStore('adsMap', adsMap)
}

const findWidgets = () => {
    const elements = document.querySelectorAll('[id^=mithra-]')
    const elementsIds = Array.from(elements).map(
        (el) => `#${el.getAttribute('id')}`
    )
    return { elements, elementsIds }
}

const findAndRenderAds = () => {
    const { elementsIds } = findWidgets()
    startWidgetWatcher()
    setStore('foundedWidgetIds', elementsIds)
    HttpClient.publisher(elementsIds).then((response) => {
        setStore('publisher', response)
    })
}

const startWidgetWatcher = () => {
    store.observer?.disconnect()
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const element = entry.target
                    const elementId = element.getAttribute('id')
                    setStore('adsMap', `#${elementId}`, (v) => ({
                        ...v,
                        isVerified: true,
                    }))
                    element.setAttribute('mtr-verified', '')
                    observer.unobserve(element)
                }
            })
        },
        {
            threshold: [0, 0.45, 0.5, 0.55, 1.0],
            root: null,
            rootMargin: '0px',
        }
    )
    setStore('observer', observer)
}

const observeWidget = (element: HTMLElement) => {
    const observer = store.observer
    observer.observe(element)
}

const StorePrimitive = () => {
    createEffect(() => {
        const publisher = store.publisher
        if (!publisher) return
        setAdsMap(publisher.data)
    })

    createEffect(() => {
        const adsMap = store.adsMap
        if (!adsMap) return
        Object.entries(adsMap)
            .filter(([, ad]) => !ad.isRendered)
            .forEach(([key, ad]) => {
                if (!ad) return
                try {
                    widgetRenderer(ad)
                    setStore('adsMap', key, (v) => ({
                        ...v,
                        isRendered: true,
                    }))
                    observeWidget(ad.widgetContainer)
                } catch (error) {
                    console.error(
                        `Failed to render widget with selector: ${ad.widget.selector}, id: ${ad.widget.id}`,
                        error
                    )
                }
            })
    })

    return {
        findAndRenderAds,
        get foundedWidgetIds() {
            return store.foundedWidgetIds
        },
        get publisher() {
            return store.publisher
        },
        get adsMap() {
            return store.adsMap
        },
    }
}

export const GlobalStore = createRoot((dispose) => {
    return {
        ...StorePrimitive(),
        dispose,
    }
})
