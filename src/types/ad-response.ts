import type {WidgetSchema} from "./widget-schema.ts";

export type AdResponse = {
    widget: AdResponseWidget,
    content: AdResponseContent[]
}

export type AdResponseWidget = {
    id: string;
    selector: string;
    isSlider: boolean;
    schema: WidgetSchema;
}
export type AdResponseContent = {
    id: string;
    trackId: string;
    media: AdResponseMedia;
    title: string;
    slogan: string;
    landingUrl: string;
    cta: AdResponseCta
}

export type AdResponseCta = {
    title: string;
    color: string
}

export type AdResponseMedia = {
    video: AdResponseVideo[],
    image: AdResponseImage[]
};

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