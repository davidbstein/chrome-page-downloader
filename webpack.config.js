const path = require("path");

module.exports = {
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "background.js",
  },
  //watch: true,

};
