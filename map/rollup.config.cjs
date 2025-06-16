const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const css = require("rollup-plugin-import-css");
const json = require('@rollup/plugin-json');

module.exports = {
  input: "src/client/main.js",
  output: {
    file: 'dist/bundle.js',
    format: "iife",
    sourcemap: "inline",
  },
  plugins: [
    css({inject:true}),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    json()
    // terser()
  ],
};
