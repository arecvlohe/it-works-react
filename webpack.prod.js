const path = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: path.resolve(__dirname, "src", "index"),
  output: {
    filename: "bundle.js",
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
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
