export type WidgetSchema = {
    type: 'slogan' | 'media' | 'cta' | 'row' | 'column',
    style: never,
    children: WidgetSchema[]
}