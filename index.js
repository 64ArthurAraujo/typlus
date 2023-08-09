const { arrayPrototype } = require("./src/array");

function prototypeSetup() {
  arrayPrototype();
};

module.exports = { prototypeSetup };