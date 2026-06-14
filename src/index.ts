import { Communicator } from './core/communicator.ts'

;
import { Kernel } from './core/kernel.ts'

(async () => {
    console.log('@Mithra/Kernel is alive and working...')

    document.addEventListener('onunload', () => {
        Communicator.flushVerified()
    })

    await Kernel.initiate();

    document.addEventListener('DOMContentLoaded', () => {})
})()
