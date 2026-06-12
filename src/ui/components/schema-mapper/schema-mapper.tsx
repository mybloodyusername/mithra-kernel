import { type Component, For } from 'solid-js'
import { Slogan } from './slogan/slogan.tsx'
import { Media } from './media/media.tsx'
import { Cta } from './cta/cta.tsx'
import { Container } from './container/container.tsx'
import type { AdResponseContent } from '../../../types/ad-response.ts'
import type { WidgetSchema } from '../../../types/widget-schema.ts'

type SchemaMapperProps = {
    schema: WidgetSchema
    content: AdResponseContent
}

export const SchemaMapper: Component<SchemaMapperProps> = ({
    content,
    schema,
}) => {
    if (!content) return <div>No ad provided.</div>

    switch (schema.type) {
        case 'slogan':
            return (
                <>
                    <Slogan slogan={content.slogan} />
                </>
            )
        case 'media':
            return (
                <>
                    <Media media={content.media} />
                </>
            )
        case 'cta':
            return (
                <>
                    <Cta cta={content.cta} />
                </>
            )
        case 'row':
        case 'column':
            return (
                <>
                    <Container type={schema.type}>
                        <For each={schema.children}>
                            {(childSchema) => (
                                <SchemaMapper
                                    content={content}
                                    schema={{ ...childSchema }}
                                />
                            )}
                        </For>
                    </Container>
                </>
            )
        default:
            return (
                <>
                    <div class="">wtf?</div>
                </>
            )
    }
}
