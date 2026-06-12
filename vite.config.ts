import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [solidPlugin(), cssInjectedByJsPlugin({})],
    build: {
        lib: {
            entry: 'src/index.ts',
            formats: ['umd'],
            name: 'kernel',
            fileName: (format) => {
                return `mithra.kernel.${format}.js`
            },
        },
        minify: 'esbuild',
        cssMinify: 'esbuild',
    },
})
