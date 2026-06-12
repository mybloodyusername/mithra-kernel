import type { Component } from 'solid-js'
import type { AdResponseMedia } from '../../types/ad-response.ts'

type MediaProps = {
    media: AdResponseMedia
}

export const Media: Component<MediaProps> = ({}) => {
    return (
        <>
            <div class="">Media goes here...</div>
        </>
    )
}
