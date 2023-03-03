const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['index', 'about'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});


module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: "js/[contenthash].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader

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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  optimization: {
    minimize:true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line

      new CssMinimizerPlugin(),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i, // you should add this property
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info'], // Delete console
          },
        },
      }),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/pages/index.html',
        filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about.html',
        filename: 'about.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].css"
    }),
  ]
});