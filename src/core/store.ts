import {createStore} from "solid-js/store";
import type {AdData} from "../types/ad-data.ts";
import type {AdRendered} from "../types/ad-rendered.ts";
import {createEffect} from "solid-js";

type AdStoreType = {
    ads: AdData[];
    wads: Record<string, AdRendered>;
}

const [store, setStore] = createStore<AdStoreType>({ads: [], wads: {}});

const AdStoreManager = () => {

    createEffect(() => {
        const ads = store.ads;
        const wads = ads.reduce<Record<string, AdRendered>>((previousValue, currentValue) => {
            previousValue[currentValue.widget.selector] = {
                ...currentValue,
                isRendered: false,
                isVerified: false
            } satisfies AdRendered;
            return previousValue
        }, {} satisfies Record<string, AdRendered>)
        setStore('wads', wads);
    })

    const setAds = (value: AdData[]) => {
        setStore('ads', [...value]);
    }

    return {
        setAds,
        store
    }
}

export {AdStoreManager};