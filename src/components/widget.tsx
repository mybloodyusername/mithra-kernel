import { type Component } from 'solid-js'

import './widget.scss'
import type { AdData } from '../types/ad-data.ts'

type WidgetProps = {
    adData: AdData
}

export const Widget: Component<WidgetProps> = ({adData}) => {
    if (!adData.content) return
    return <div>This is a widget!</div>
}
