const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true
  },
  module: {
    rules:[
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.module.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[local]--[hash:base64:3]",
              }
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"]
              },
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\.module.scss$/],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"]
              },
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                plugins: [
                  { cleanupIDs: false },
                  { convertPathData: false },
                  { mergePaths: false }
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|ico|woff|ttf|wav|mp3)$/,
        type: 'asset/resource'
      }
    ], 
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      scss: path.resolve(__dirname, './src/scss'),
      assets: path.resolve(__dirname, './src/assets'),
      screens: path.resolve(__dirname, './src/App/screens'),
      components: path.resolve(__dirname, './src/App/components'),
      hooks: path.resolve(__dirname, './src/App/hooks')
    },
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico'
    })
  ]
}
