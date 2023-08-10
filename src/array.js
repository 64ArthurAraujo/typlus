function arrayPrototype() {
  if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
  }
  
  if (!Array.prototype.first) {
      Array.prototype.first = function () {
          return this[0];
      };
  }

  if(!Array.prototype.isEmpty) {
      Array.prototype.isEmpty = function () {
          return this.length <= 0;
      };
  }

  if(!Array.prototype.isNotEmpty) {
    Array.prototype.isNotEmpty = function () {
        return this.length > 0;
    };
}

  if(!Array.prototype.removeFirst) {
      Array.prototype.removeFirst = function () {
          this.shift();
          return this;
      };
  }

  if (!Array.prototype.selectRandom) {
    Array.prototype.selectRandom = function () {
      return this[Math.floor(Math.random() * this.length)];
    }
  }

  if (!Array.prototype.withoutDuplicates) {
    Array.prototype.withoutDuplicates = function () {
      return this.filter((item, index) => this.indexOf(item) === index);
    }
  }

  if (!Array.prototype.without) {
    Array.prototype.without = function (element) {
      let array = [...this];
      let index = array.indexOf(element);

      if (index !== -1) {
        array.splice(index, 1);
      }

      return array;
    }
  }
}

module.exports = { arrayPrototype };