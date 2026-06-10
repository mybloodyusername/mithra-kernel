import {AdStoreManager} from "./core/store.ts";
import {HttpClient} from "./core/http-client.ts";

(() => {
    console.log('@Mithra/Kernel is alive and working...')

    const {setAds} = AdStoreManager();

    HttpClient.publisher().then(response => {
        if (!response.data.length) return;
        setAds(response.data);
    })

})();