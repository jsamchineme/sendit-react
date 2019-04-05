const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack= require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

dotenv.config();

module.exports = {
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DEV_API_URL: JSON.stringify(process.env.DEV_API_URL),
        API_URL: JSON.stringify(process.env.API_URL),
        MAP_API_KEY: JSON.stringify(process.env.MAP_API_KEY),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CopyPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            }
          }
        ]
      }
    ]
  }
};