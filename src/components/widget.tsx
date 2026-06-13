import { type Component } from 'solid-js'

import './widget.scss'
import type { AdData } from '../types/ad-data.ts'

type WidgetProps = {
    adData: AdData
}

export const Widget: Component<WidgetProps> = ({ adData }) => {
    const { content } = adData
    if (!content) return
    return (
        <div class="mtr-container">
            <a class="mtr-widget" href="#">
                <div class="mtr-row">
                    <div
                        class="mtr-media"
                        style={{
                            'aspect-ratio':
                                content.media.image.width /
                                content.media.image.height,
                        }}>
                        <img
                            src={content.media.image.url}
                            alt={content.slogan}
                        />
                    </div>
                    <div class="mtr-content">
                        <p class="mtr-slogan">{content.slogan}</p>
                        <div
                            role="button"
                            class="mtr-cta"
                            style={{
                                color: content.cta.color,
                                'background-color': content.cta.backgroundColor,
                                'border-radius': content.cta.borderRadius,
                            }}>
                            {content.cta.title}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
