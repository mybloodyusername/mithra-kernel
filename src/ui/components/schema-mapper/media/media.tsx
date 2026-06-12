import type { Component } from 'solid-js'
import type { AdResponseMedia } from '../../../../types/ad-response.ts'

import './media.scss'

type MediaProps = {
    media: AdResponseMedia
}

export const Media: Component<MediaProps> = ({}) => {
    return (
        <>
            <div class="mtr-media">Media goes here...</div>
        </>
    )
}
