import type { Component, ParentProps } from 'solid-js'

import './container.scss'

interface ContainerProps extends ParentProps {
    type: 'row' | 'column'
}

export const Container: Component<ContainerProps> = ({ type, children }) => {
    const containerClass = `mtr-${type}`

    return <div class={containerClass}>{children}</div>
}
