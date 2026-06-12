import { type Component, Show } from 'solid-js'
import type { AdResponseMedia } from '../../../../types/ad-response.ts'

import './media.scss'

type MediaProps = {
    media: AdResponseMedia
}

export const Media: Component<MediaProps> = ({ media }) => {
    if (media.image) {
    }
    return (
        <>
            <div class="mtr-media">
                <Show when={media.image}>
                    <img
                        src={media.image.url}
                        alt="Mithra Image"
                        style={{
                            'aspect-ratio':
                                media.image.width / media.image.height,
                        }}
                    />
                </Show>
            </div>
        </>
    )
}
