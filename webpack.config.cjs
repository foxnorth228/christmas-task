const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
      "@layouts":    path.resolve( __dirname, "src/layouts"),
      "@pages":      path.resolve( __dirname, "src/pages"),
      "@routes":     path.resolve( __dirname, "src/routes"),
      "@services":   path.resolve( __dirname, "src/services"),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
};