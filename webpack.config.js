//webpack.config.js
const path = require('path');

module.exports = {
  mode: "production",
  // mode: "development",
  // devtool: "inline-source-map",
  entry: {
    main: "./src/present.ts",
  },
  output: {
    path: path.resolve(__dirname, './sphinxext/presentations/static/js/'),
    filename: "present.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};