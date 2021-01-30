const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  plugins: [new ESLintPlugin({extensions: ['js','jsx']})],
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{contentBase:'./dist'},
  module: {
      rules: [
          {
            test:/\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
    ]
  },
  resolve: {
      extensions: ['.js','.jsx']
  }
};