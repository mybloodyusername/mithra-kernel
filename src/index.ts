import {AdStoreManager} from "./core/store.ts";
import {unwrap} from "solid-js/store";
import {HttpClient} from "./core/http-client.ts";

(() => {
    console.log('@Mithra/Kernel is alive and working...')

    const {setAds, ads, wads} = AdStoreManager();

    HttpClient.publisher().then(response => {
        if (response.data.length) return;
        setAds(response.data);
    })

    setTimeout(() => {
        console.log('0100ms -------> ads: ', unwrap(ads));
        console.log('0100ms -------> wads: ', unwrap(wads));
    }, 1000)

})();