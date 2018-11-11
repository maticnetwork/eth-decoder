/* global __dirname, require, module */
const path = require("path")
const packageJSON = require("./package.json")

const libraryName = packageJSON.name
const config = {
  mode: "production",
  entry: `${__dirname}/src/index.js`,
  devtool: "source-map",
  output: {
    path: `${__dirname}/lib`,
    filename: `${libraryName}.js`,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: [".json", ".js"]
  },
  node: { fs: "empty", child_process: "empty" }
}

module.exports = config
