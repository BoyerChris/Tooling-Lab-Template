const path = require(`path`);

module.exports = {
  entry: `./resources/scripts/index.js`,

  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `main.js`
  }
};