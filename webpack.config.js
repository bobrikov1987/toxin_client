const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),

  mode: 'development',

  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'eval',

  devServer: {
    port: 3300,
  },

  resolve: {
    alias: {
      'fw': path.resolve(__dirname, 'src', 'framework'),
    },
  },

  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
