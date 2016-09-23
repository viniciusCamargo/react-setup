var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './to-compile/index.jsx',
  output: {
    path: './compiled',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        // include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
