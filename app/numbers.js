if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {
      return str.toString(10);
    },

    convertToBinary: function(num) {
      return num.toString(2);
    },

    multiply: function(a, b) {
      var parsedA = a.toString().split('.');
      var parsedB = b.toString().split('.');

      var aPrecision = 0;
      var bPrecision = 0;

      if (parsedA.length > 1) {
        aPrecision = parsedA[1].length;
      }

      if (parsedB.length > 1) {
        bPrecision = parsedB[1].length;
      }

      var precision = Math.max(aPrecision, bPrecision);


      return parseFloat((a * b).toFixed(precision));
    }
  };
});

