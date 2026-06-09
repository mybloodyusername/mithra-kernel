import {defineConfig} from "vite";

export default defineConfig({
    plugins: [],
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
    }
})