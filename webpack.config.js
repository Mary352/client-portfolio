const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

module.exports = {
   mode,
   devServer: {
      open: true
   },
   entry: path.resolve(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: 'index.[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext]'
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      })
   ],
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: "html-loader",
         },
         {
            test: /\.(c|sc)ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               devMode ? "style-loader" : MiniCssExtractPlugin.loader,
               // Translates CSS into CommonJS
               "css-loader",
               // Compiles Sass to CSS
               "sass-loader",
            ],
         },
      ],
   },
}