const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirShared = path.join(__dirname, 'shared')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

module.exports = {
  entry: [
    path.join(dirApp, 'index.js' ),
    path.join(dirStyles, 'index.scss')
  ],
  resolve: {
    modules: [
      dirApp,
      dirShared,
      dirStyles,
      dirNode
    ]
  },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './shared', to: '' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
                options: {
                publicPath: "",
            },
          },
            "css-loader",
            "postcss-loader",
            "sass-loader",
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif|svg|webp|mp4)$/,
        type: "asset/resource",
        generator: {
        filename: "images/[hash][ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
        filename: "fonts/[hash][ext]"
        }
      },
      {
        test: /\.(glsl|frag|vert)$/,
        type: "asset/source", // replaced raw-loader
        exclude: /node_modules/,
      },
    ],
  }
}
