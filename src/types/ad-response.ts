export type AdResponse = {
    widget: AdResponseWidget
    content: AdResponseContent
}

export type AdResponseWidget = {
    id: string
    selector: string
}

export type AdResponseContent = {
    id: string
    trackId: string
    slogan: string
    media: AdResponseMedia
    cta: AdResponseCta
    landingUrl: string
}

export type AdResponseCta = {
    title: string
    color: string
    backgroundColor: string
    borderRadius: string
}

export type AdResponseMedia = {
    video: AdResponseVideo
    image: AdResponseImage
}

export type AdResponseVideo = {
    id: string
    aspectRatio: number
    format: string
    url: string
}

export type AdResponseImage = {
    id: string
    width: number
    height: number
    format: string
    url: string
}
