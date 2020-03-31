const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './example/index.html'),
  filename: './index.html'
});
module.exports = {
  entry:
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, './example/index.js')
      : path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'development' ? [htmlWebpackPlugin] : [],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000
  }
};
