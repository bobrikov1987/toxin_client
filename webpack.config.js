const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),

  mode: 'development',

  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  devtool: 'eval',

  devServer: {
    port: 3300,
  },

  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
