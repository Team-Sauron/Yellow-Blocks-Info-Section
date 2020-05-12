const path = require('path');

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
    }],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
