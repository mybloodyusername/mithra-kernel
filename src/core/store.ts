import {createStore} from "solid-js/store";
import type {AdData} from "../types/ad-data.ts";
import type {AdRendered} from "../types/ad-rendered.ts";
import {createEffect} from "solid-js";
import {widgetRenderer} from "./widget-renderer.ts";

const [adsStore, setAdsStore] = createStore<AdData[]>([]);
const [wadsStore, setWadsStore] = createStore<Record<string, AdRendered>>({});

const AdStoreManager = () => {

    createEffect(() => {
        const wads = adsStore.reduce<Record<string, AdRendered>>((previousValue, currentValue) => {
            previousValue[currentValue.widget.selector] = {
                ...currentValue,
                isRendered: false,
                isVerified: false,
                widgetContainer: document.querySelector(currentValue.widget.selector) ?? undefined
            } satisfies AdRendered;
            return previousValue
        }, {} satisfies Record<string, AdRendered>)
        setWadsStore(wads);
    })

    createEffect(() => {
        const wads = wadsStore;
        Object.keys(wads).forEach(key => {
            const wad = wads[key];
            wad && widgetRenderer(wad);
        })
    })

    const setAds = (value: AdData[]) => {
        setAdsStore(value);
    }

    const setWad = (selector: string, value: AdRendered) => {
        setWadsStore(selector, value);
    }

    return {
        setAds,
        setWad,
        get ads() {
            return adsStore;
        },
        get wads() {
            return wadsStore
        },
    }
}

export {AdStoreManager};