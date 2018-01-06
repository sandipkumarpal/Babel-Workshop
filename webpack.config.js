const path = require('path');

const config = {
  entry: ["babel-polyfill", './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;