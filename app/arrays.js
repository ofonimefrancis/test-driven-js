if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) return i;
      }
      return -1;
    },

    sum : function(arr) {
      let sum = 0;
      for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      return arr.filter(ele => ele !== item)
    },

    removeWithoutCopy : function(arr, item) {
      for (var i in arr) {
        if (arr[i] == item) {
          arr.splice(i, 1)
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift(arr);
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      let count = 0;
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          count += 1;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      let object = {};
      let result = [];

      arr.forEach(function (item) {
        if(!object[item])
          object[item] = 0;
        object[item] += 1;
      });

      for (var prop in object) {
        if(object[prop] >= 2) {
          result.push(prop);
        }
      }
      return result;
    },

    square : function(arr) {
      return arr.map(item => item * item);
    },

    findAllOccurrences : function(arr, target) {
      let occurrences = [];
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
          occurrences.push(i);
        }
      }
      return occurrences;
    }
  };
});
