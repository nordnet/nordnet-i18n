module.exports = {
  context: __dirname,

  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?optional=runtime'],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  }
}