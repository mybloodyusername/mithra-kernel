import {GlobalStore} from "./core/store.ts";

(() => {
    console.log('@Mithra/Kernel is alive and working...')

    const {findAndRenderAds} = GlobalStore;

    findAndRenderAds();
})();