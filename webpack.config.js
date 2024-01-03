"use strict";

const path = require("path");
// const glob = require("glob");
// const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

// Bootstrap
module.exports = {
  mode: "production",
  entry: "./custom-js/item-card.js",
  output: {
    filename: "item-card.min.js",
    path: path.resolve(__dirname, "custom-js"),
  },
  // devServer: {
  //   static: path.resolve(__dirname, "dist"),
  //   port: 8080,
  //   hot: true,
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({ template: "./src/index.html" }),
  //   new miniCssExtractPlugin(),
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(scss)$/,
  //       use: [
  //         {
  //           // Extracts CSS for each JS file that includes CSS
  //           loader: miniCssExtractPlugin.loader,
  //         },
  //         {
  //           // Interprets `@import` and `url()` like `import/require()` and will resolve them
  //           loader: "css-loader",
  //         },
  //         {
  //           // Loader for webpack to process CSS with PostCSS
  //           loader: "postcss-loader",
  //           options: {
  //             postcssOptions: {
  //               plugins: [autoprefixer],
  //             },
  //           },
  //         },
  //         {
  //           // Loads a SASS/SCSS file and compiles it to CSS
  //           loader: "sass-loader",
  //         },
  //       ],
  //     },
  //   ],
  // },
};
