import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
    plugins: [solidPlugin()],
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
