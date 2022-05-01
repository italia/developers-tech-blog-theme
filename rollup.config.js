import {string} from 'rollup-plugin-string';
import scss from 'rollup-plugin-scss';
import uglify from "@lopatnov/rollup-plugin-uglify";

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        compact: true,
        format: 'iife'
    },
    plugins: [
        string({
            include: "./src/views/*.html",
        }),
        scss({
            outputStyle: 'compressed'
        }),
        uglify()
    ]
};