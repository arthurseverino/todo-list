/*
  No need for script tag in here (the src index.html) when using HTMLWebpackPlugin-->

  My issue with HTML webpack plugin was that the template was pointing to index.ejs by default, 
  had to set it to ./src/index.html. make sure you always do this template 
  The plugin rewrites this file from src and generates a new index.html in dist just in case we rename any entry points
  The index.html file in dist is literally just a copy of the one in src. 


  Without the plugin, it works fine too.
  You just need one index.html file, always make it in src, 
  comment out htmlwebpackplugin in webpack.config.js, and put -> script src = "main.js" defer <- in here
  It works the same but doesn't make a new index.html file in dist 
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
