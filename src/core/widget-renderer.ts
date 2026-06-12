import type { AdData } from '../types/ad-data.ts'
import { render } from 'solid-js/web'
import { Widget } from '../components/widget.tsx'

export const widgetRenderer = (adData: AdData) => {
    if (!adData.widgetContainer) return
    try {
        render(() => Widget({ adData: { ...adData } }), adData.widgetContainer)
        adData.widgetContainer.setAttribute('mtr-rendered', '')
    } catch (error) {
        console.error(
            `Failed to render widget with selector: ${adData.widget.selector}, id: ${adData.widget.id}`,
            error
        )
    }
}
