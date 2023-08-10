function stringPrototype() {
  if (!String.prototype.matchesOf) {
    String.prototype.matchesOf = function (string) {
      const regex = new RegExp(string, 'g');
      return this.match(regex) ?? [];
    };
  }
}

module.exports = { stringPrototype }