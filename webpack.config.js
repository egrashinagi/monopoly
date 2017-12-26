const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: "source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  }
};