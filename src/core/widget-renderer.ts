import type {AdData} from "../types/ad-data.ts";
import {render} from "solid-js/web";
import {Widget} from "../components/widget/widget.tsx";

export const widgetRenderer = (wad: AdData) => {
    if (!wad.widgetContainer) return;
    try {
        render(() => Widget({schema: {...wad.widget.schema}, content: {...wad.content[0]}}), wad.widgetContainer)
        wad.widgetContainer.setAttribute('mtr-rendered', '');
    } catch (error) {
        console.error(`Failed to render widget with selector: ${wad.widget.selector}, id: ${wad.widget.id}`, error);
    }
}