import type { Component } from 'solid-js'
import type { AdResponseCta } from '../../../../types/ad-response.ts'

import './cta.scss'

type CtaProps = {
    cta: AdResponseCta
}

export const Cta: Component<CtaProps> = ({ cta }) => {
    return (
        <div class="mtr-cta" style={{ color: cta.color || 'inherit' }}>
            {cta.title}
        </div>
    )
}
