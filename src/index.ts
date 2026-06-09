import {AdStoreManager} from "./core/store.ts";
import {unwrap} from "solid-js/store";

(() => {
    console.log('@Mithra/Kernel is alive and working...')

    const {setAds, store} = AdStoreManager();

    setAds([
        {
            widget: {
                type: 'SAMPLE_1',
                selector: '#mithra-1',
                isSlider: false,
                id: '1'
            },
            content: [
                {
                    id: '1',
                    landingUrl: 'digikala.ir',
                    media: {
                        image: [],
                        video: []
                    },
                    slogan: 'This is a one time only chance to sing along Lady Gaga!',
                    title: 'Wanna be a singer?',
                    trackId: '1a2b3c4d5e6f7g8h9i0j'
                }
            ]
        }
    ])


    console.log('0000ms -------> ads: ', unwrap(store.ads));

    setTimeout(() => {
        console.log('0100ms -------> ads: ', unwrap(store.ads));
        console.log('0100ms -------> wads: ', unwrap(store.wads));
    }, 100)

})();