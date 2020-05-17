const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: `${path.join(__dirname, '/client/index.jsx')}`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css/,
      loaders: ['style-loader', 'css-loader?modules=true'],
      include: `${__dirname}/client/styles.css`,
    },
    // {
    //   test: /\.css/,
    //   loader: ExtractTextPlugin.extract('css-loader'),
    // }
    ],
  },
  // plugins: [
  //   new ExtractTextPlugin('styles.css'),
  // ],
  resolve: { extensions: ['.js', '.jsx', '.css'] },
};
