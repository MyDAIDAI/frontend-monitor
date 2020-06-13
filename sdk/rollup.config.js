import babel from 'rollup-plugin-babel';
const isDev = process.env.NODE_ENV === 'development';

let babelConfig = {
  "presets": [
    [
      "env",
      {
        "modules": false,
        "targets": {
          "browsers": ["chrome > 40", "safari >= 7"]
        }
      }
    ]
  ]
}

export default {
  input: 'index.js',
  watch: {
    exclude: 'node_modules/**'
  },
  output: {
    file: isDev ? '../website/client/js/monitor/bundle.umd.js' : '../dist/bundle.umd.js',
    name: 'Monitor',
    format: 'umd', // cmd umd window
    sourcemap: true
  },
  plugin: [
    babel({
      babelrc: false,
      presets: babelConfig.presets,
      plugins: babelConfig.plugins,
      exclude: 'node_modules/**'
    })
  ]
}