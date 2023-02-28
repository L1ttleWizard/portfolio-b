const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    main:'./src/index.js',
    vendor:'./src/vendor.js',
    jquery:'./src/jq.js',
    fontawesome:'./src/fontawesome.js'
  },
  output:{
    assetModuleFilename: 'img/[hash][ext][query]'
  },
  module: {
    rules: [
      
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          esModule: false
        },
      },
      {
        test: /\.jpg/,
        type: 'asset/resource'
      }
    ],
  },
  

};