import {string} from 'rollup-plugin-string';
import scss from 'rollup-plugin-scss';
import uglify from "@lopatnov/rollup-plugin-uglify";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';


export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        compact: true,
        format: 'iife'
    },
    plugins: [
        string({
            include: "./dist/*.html",
        }),
        scss({
            outputStyle: 'compressed'
        }),
        nodeResolve(),
        uglify(),
        cleanup({
            comments: 'none'
        })
    ]
};