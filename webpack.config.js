const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath:path.resolve(__dirname, './dist')
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test:/\.[s]css$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts','.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath:path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({inject:'body', template:'./src/index.html'})],
  devServer: {
    static: path.resolve(__dirname, './dist'),
    hot: true,
    port:3000
  },
};