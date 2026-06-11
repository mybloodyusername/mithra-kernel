import type {WidgetSchema} from "./widget-schema.ts";

export type AdResponse = {
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
            video: AdResponseVideo[],
            image: AdResponseImage[]
        };
        title: string;
        slogan: string;
        landingUrl: string;
    }[]
}

export type AdResponseVideo = {
    id: string;
    aspectRatio: number;
    format: string;
    url: string;
}

export type AdResponseImage = {
    id: string;
    width: number;
    height: number;
    format: string;
    url: string;
}