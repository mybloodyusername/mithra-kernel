import type {AdData} from "../types/ad-data.ts";
import {render} from "solid-js/web";
import {SampleWidget} from "../components/sample-widget.tsx";

export const widgetRenderer = (wad: AdData) => {
    if (!wad.widgetContainer) return;
    try {
        render(() => SampleWidget({
            title: wad.content[0].title,
            slogan: wad.content[0].slogan
        }), wad.widgetContainer)
        wad.widgetContainer.setAttribute('mtr-rendered', '');
    } catch (error) {
        console.error(`Failed to render widget with selector: ${wad.widget.selector}, id: ${wad.widget.id}`, error);
    }
}