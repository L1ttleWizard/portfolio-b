const path = require('path')


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
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },
  

};