const miniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const glob = require('glob');

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
 
  entry: './src/js/index.js',
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
    clean: true,
    
  },

  // Define development options

  devtool: devMode ? "eval-cheap-module-source-map" : "source-map",

  // Define used plugins
  plugins: [
    new Dotenv(),
    new miniCssExtractPlugin({
      filename:'main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/img",
          to: "img",
        }
      ]
    }),],
    
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.s[ac]ss$/,
        use: [
          devMode ? "style-loader" : miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      // File loader for images
      {
        test: /\.(jpg|jpeg|png)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
      // File loader for svg
      {
        test: /\.(svg)$/i,
        loader: 'svg-inline-loader',
      }
    ],
  },
  
  // Configure the "webpack-dev-server" plugin
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true
  },
  
  // Performance configuration
  performance: {
    hints: false
  }
};