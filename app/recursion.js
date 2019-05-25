if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

    },

    permute: function(arr) {
      let result = [];

      for (let i = 0; i < arr.length; i++) {
        let rest = this.permute(arr.slice(0, i).concat(arr.slice(i + 1)));

        if (!rest.length) {
          result.push(arr[i]);
        } else {
          for (let j = 0; j < rest.length; j++) {
            result.push([ arr[i] ].concat(rest[j]));
          }
        }
      }
      return result;
    }
  };
});
