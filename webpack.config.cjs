const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      "@src":        path.resolve( __dirname, "src"),
      "@assets":     path.resolve( __dirname, "src/assets"),
      "@components": path.resolve( __dirname, "src/components"),
      "@contexts":   path.resolve( __dirname, "src/contexts"),
      "@hooks":      path.resolve( __dirname, "src/hooks"),
      "@interfaces":      path.resolve( __dirname, "src/interfaces"),
      "@layouts":    path.resolve( __dirname, "src/layouts"),
      "@pages":      path.resolve( __dirname, "src/pages"),
      "@routes":     path.resolve( __dirname, "src/routes"),
      "@services":   path.resolve( __dirname, "src/services"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: '' },
      ],
    }),
    new Dotenv({
      systemvars: true
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devServer: {      
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './dist'),
    }
  }
};