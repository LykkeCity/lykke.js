import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {minify} from 'uglify-es';


export default {
  input: './src/index.ts',
  output: {
    file: 'dist/bundle/lykke.js',
    format: 'umd',
    name: 'lykke',
    sourcemap: true
  },
  plugins: [
    typescript({
      importHelpers: true,
      typescript: require('typescript')
    }),
    commonjs(),
    nodeResolve({jsnext: true, main: true, browser: true}),
    uglify({}, minify)
  ]
}
