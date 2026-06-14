class WidgetObserverImpl {
    private observer: IntersectionObserver

    constructor() {
        this.observer = new IntersectionObserver(this.intersectionCallback, {
            root: null,
            threshold: [0, 0.25, 0.45, 0.5, 0.55, 0.75, 1],
        })
    }

    private intersectionCallback(
        _entries: IntersectionObserverEntry[],
        _observer: IntersectionObserver
    ) {
        // TODO:
    }
}

export const WidgetObserver = new WidgetObserverImpl()
