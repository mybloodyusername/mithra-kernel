import type { Component } from 'solid-js'

type SloganProps = {
    slogan: string
}

export const Slogan: Component<SloganProps> = ({ slogan }) => {
    return (
        <>
            <div class="mtr-slogan">{slogan}</div>
        </>
    )
}
