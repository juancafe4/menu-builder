const path = require('path')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: ['node_modules ']
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: ['node_modules ']
      }
    ]
  }
}