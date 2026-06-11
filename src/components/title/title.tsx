import type {Component} from "solid-js";

type TitleProps = {
    title: string
}

export const Title: Component<TitleProps> = ({title}) => {
    return <>
        <div class="mtr-title">
            {title}
        </div>
    </>
}