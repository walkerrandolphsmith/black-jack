var path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, './app/Entry.jsx')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {stage: 0}
      },
    ]
  }
};
