const miniCssExtractPlugin = require('mini-css-extract-plugin');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const path = require('path');
const glob = require("glob-all");





module.exports = {
 
  entry: './src/js/index.js',
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
    clean: true, 
  },

  //production mode no compress
  mode: 'development',
    optimization: {
    usedExports: true,
  }, 

  // Define development options

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',

    
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
          process.env.NODE_ENV === 'production' ? miniCssExtractPlugin.loader : "style-loader",
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'), 
                  require('postcss-preset-env')({ browsers: 'last 2 versions', }), 
                  require('cssnano')({ preset: ["default", { discardComments: { removeAll: true },}] })
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(jpg|jpeg|png|webp|gif|svg|ico)$/i,
        type: "asset",
        generator: {
          filename: 'img/[name][ext]',
        }
      }, {
        test: /\.(ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        }
      },
      {
        test: /.*font.*\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              "...",
              {
              tag: "script",
              attribute: "src",
              type: "src",
              filter:()=>false,
            }, ]
          }, 
        }
      },
    ],
  },
  
  // Define used plugins
  plugins: [
    new Dotenv(),
    new miniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync([`${path.resolve(__dirname, "src")}/**/*`, `${path.resolve(__dirname, "src")}.html`,] ,{ nodir: true }),
      safelist() {
        return {
          standard: [],
          deep: [],
          greedy: [],
        };
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        /*collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        sortAttributes: true,
        useShortDoctype: true,*/
      },
    }),
  ],

  optimization: {
    //production mode no compress
    minimize: true,
    minimizer: [
      /*new TerserPlugin({
        test: /\.js(\?.*)?$/i, 
        extractComments: false,
        terserOptions: {
          compress:false,
          toplevel: true,
          ie8: true,
          safari10: true,
          format: {
            comments: false,
          },
        },
      })*/
    ],
    usedExports: true,  
  },

  // Configure the "webpack-dev-server" plugin
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    port: 9000,
  },
  
  // Performance configuration
  /* performance: {
    hints: false
  } */
  
};