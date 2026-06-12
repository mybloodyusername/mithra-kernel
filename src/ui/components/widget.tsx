import { type Component } from 'solid-js'
import type { AdResponseContent } from '../../types/ad-response.ts'
import type { WidgetSchema } from '../../types/widget-schema.ts'
import { SchemaMapper } from './schema-mapper/schema-mapper.tsx'

import './widget.scss'

type WidgetProps = {
    schema: WidgetSchema
    content: AdResponseContent
}

export const Widget: Component<WidgetProps> = ({ content, schema }) => {
    if (!content) return <div>No ad provided.</div>

    return <SchemaMapper schema={schema} content={content} />
}
