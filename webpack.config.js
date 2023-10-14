const {resolve} = require('path');

module.exports = {
  entry: {
    main: './src/app.ts'
  },
  output: {
    filename: 'app-bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  mode: 'production'
}
