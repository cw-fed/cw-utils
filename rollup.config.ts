import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: {
    entries: ['src/index.ts']
  },
  output: {
    dir: 'dist',
    sourcemap: false,
    strict: false,
    esModule: false,
    format: 'iife',
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
          declarationMap: false,
          baseUrl: '.',
        }
      },
      include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)'],
      clean: true,
    }),
    terser(),
    commonjs(),
    resolve(),
    json(),
  ],
  treeshake: 'smallest'
}
