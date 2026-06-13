import { GlobalStore } from './core/store.ts'
import { Communicator } from './core/communicator.ts'

;(() => {
    console.log('@Mithra/Kernel is alive and working...')

    const { findAndRenderAds, dispose } = GlobalStore

    document.addEventListener('onunload', () => {
        dispose()
        Communicator.flushVerified()
    })

    document.addEventListener('DOMContentLoaded', () => {
        findAndRenderAds()
    })
})()
