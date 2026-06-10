import type {Component, ParentProps} from "solid-js";

import './sample-widget.scss'

interface Props {
    title: string;
    slogan: string;
}

export const SampleWidget: Component<ParentProps<Props>> = ({}) => {
    return <>
        <div class="mtr-sample-widget">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut exercitationem inventore, maiores
                repellat sequi. Corporis culpa quod veniam?</p>
            <button>Click me!</button>
        </div>
    </>
}