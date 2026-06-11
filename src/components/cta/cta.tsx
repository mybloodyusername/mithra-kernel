import type {Component} from "solid-js";
import type {AdResponseCta} from "../../types/ad-response.ts";

type CtaProps = {
    cta: AdResponseCta
}

export const Cta: Component<CtaProps> = ({cta}) => {
    return <div class="mtr-cta" style={{color: cta.color || 'inherit'}}>{cta.title}</div>
}