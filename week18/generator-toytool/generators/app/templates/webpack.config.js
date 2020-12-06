/*
 * @Author: vivien
 * @Date: 2020-11-22 14:52:59
 * @Last Modified by: vivien
 * @LastEditTime: 2020-12-06 21:16:59
 */
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env"],
          }
        }
      ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/*.html", to: "[name].[ext]" },
      ],
    }),
  ],
};