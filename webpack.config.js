const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PORT = process.env.PORT || 4443
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-delay-webpack.bundle.js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    compress: true,
    port: PORT,
  },
}
