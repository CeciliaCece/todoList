const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");
const DEV_MODE = process.env.NODE_ENV === "development";
const glob = require("glob-all");

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    index: "./src/js/index.js",
    register: "./src/js/register.js",
    login: "./src/js/login.js",
  },

  output: {
    path: path.resolve("dist"),
    filename: "js/[name].js",
    clean: true,
  },

  devtool: DEV_MODE ? "inline-source-map" : false,

  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [
                  require("autoprefixer"),
                  require("postcss-preset-env")({
                    browsers: "last 2 versions",
                  }),
                  require("cssnano")({
                    preset: [
                      "default",
                      { discardComments: { removeAll: true } },
                    ],
                  }),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|webp|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "img/[name][ext]",
        },
      },
      {
        test: /\.(ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new miniCssExtractPlugin({
      filename: `css/style.css`,
    }),
    new PurgeCSSPlugin({
      paths: glob.sync([`${path.join("src")}/**/*`], { nodir: true }),
    }),
    new HtmlWebpackPlugin({
      template: "./src/ejs/index.ejs",
      filename: "html/index.html",
      chunks: ["vendor", "index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ejs/login.ejs",
      filename: "html/login.html",
      chunks: ["vendor", "login"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ejs/register.ejs",
      filename: "html/register.html",
      chunks: ["vendor", "register"],
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          priority: 10,
          enforce: true,
        },
      },
    },
  },

  devServer: {
    static: {
      directory: path.resolve("./dist/html"),
    },
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9000,
  },
};
