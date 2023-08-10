const { arrayPrototype } = require("./src/array");
const { stringPrototype } = require("./src/string");

function prototypeSetup() {
  arrayPrototype();
  stringPrototype();
};

module.exports = { prototypeSetup };