const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    main:'./src/index.js',
    vendor:'./src/vendor.js',
    jquery:'./src/jq.js',
    fontawesome:'./src/fontawesome.js'
  },
  module: {
    rules: [
      
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      

    ],
  },
  

};