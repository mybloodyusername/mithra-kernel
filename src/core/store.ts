import {createStore} from "solid-js/store";
import type {AdResponse} from "../types/ad-response.ts";
import type {AdData} from "../types/ad-data.ts";
import {createEffect} from "solid-js";
import {widgetRenderer} from "./widget-renderer.ts";
import type {PublisherResponse} from "../types/server.ts";
import {HttpClient} from "./http-client.ts";

type StoreModel = {
    foundedWidgetIds: string[];
    publisher?: PublisherResponse,
    adsMap: Record<string, AdData>,
}

const [store, setStore] = createStore<StoreModel>({
    foundedWidgetIds: [],
    publisher: undefined,
    adsMap: {}
})

const setAdsMap = (data: AdResponse[]) => {
    const adsMap = data.reduce<Record<string, AdData>>((previousValue, currentValue) => {
        previousValue[currentValue.widget.selector] = {
            ...currentValue,
            isRendered: false,
            isVerified: false,
            widgetContainer: document.querySelector(currentValue.widget.selector) ?? undefined
        } satisfies AdData;
        return previousValue
    }, {} satisfies Record<string, AdData>)
    setStore('adsMap', adsMap);
}

const findWidgets = () => {
    const elements = document.querySelectorAll("[id^=mithra-]");
    const elementsIds = Array.from(elements).map((el) => el.getAttribute('id'));
    return {elements, elementsIds}
}

const findAndRenderAds = () => {
    const {elementsIds} = findWidgets();
    setStore('foundedWidgetIds', elementsIds)
    HttpClient.publisher().then(response => {
        setStore('publisher', response);
    })
}

const StorePrimitive = () => {

    createEffect(() => {
        const publisher = store.publisher;
        if (!publisher) return;
        setAdsMap(publisher.data);
    })

    createEffect(() => {
        const adsMap = store.adsMap;
        if (!adsMap) return;
        Object.keys(adsMap).forEach(key => {
            const ad = adsMap[key];
            ad && widgetRenderer(ad);
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

export const GlobalStore = StorePrimitive();