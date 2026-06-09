import type {WidgetSchema} from "./widget-schema.ts";

export type AdData = {
    widget: {
        id: string;
        selector: string;
        isSlider: boolean;
        type: WidgetSchema;
    },
    content: {
        id: string;
        trackId: string;
        media: {
            video: AdDataVideo[],
            image: AdDataImage[]
        };
        title: string;
        slogan: string;
        landingUrl: string;
    }[]
}

export type AdDataVideo = {
    id: string;
    aspectRatio: number;
    format: string;
    url: string;
}

export type AdDataImage = {
    id: string;
    width: number;
    height: number;
    format: string;
    url: string;
}