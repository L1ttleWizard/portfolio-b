const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');


let htmlPageNames = ['home', 'about'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});


module.exports  =  merge(common,{
  mode: 'development',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'pages')
  },
  devServer:{
    static: path.resolve(__dirname, 'pages'),

    port: 8080,
    open: true,
    hot: true,
    
},
  module:{
    rules:[
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          
          {
            loader: 'css-loader'
          },
          
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          },
          
          
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home.html",
      chunks: ['main']
    })
  ].concat(multipleHtmlPlugins)
});