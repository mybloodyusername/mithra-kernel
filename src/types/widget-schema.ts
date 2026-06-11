// export type WidgetSchema = {
//     type: 'TITLE' | 'SLOGAN' | 'MEDIA' | 'CONTAINER';
//     orientation: 'HORIZONTAL' | 'VERTICAL';
//     children: WidgetSchema[]
// }

export type WidgetSchema = {
    type: 'title' | 'slogan' | 'media' | 'cta' | 'row' | 'column',
    style: never,
    children: WidgetSchema[]
}