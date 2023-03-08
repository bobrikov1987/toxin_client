const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

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
    extensions: [ '.js', 'ts', '.css', '.scss', '.sass' ],
    alias: {
      'fw': path.resolve(__dirname, 'src', 'framework'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './assets',
          to: './assets',
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'Toxin: Выбор номеров отеля',
      template: './index.html',
    }),

    new CleanWebpackPlugin(),
  ],
}
