const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: {
    vendor: [
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "react-bootstrap",
      "recompose",
      "redux",
      "redux-most",
      "styled-components"
    ],
    app: path.resolve(__dirname, "src", "index")
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "IT Works React",
      filename: path.resolve(__dirname, "dist", "index.html"),
      template: path.resolve(__dirname, "src", "template", "index.html")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      filename: "[name].[chunkhash].js",
      minChunks: Infinity
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: true
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      API: JSON.stringify(
        "https://iwg-prod-web-interview.azurewebsites.net/stem/v1/funds"
      ),
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
