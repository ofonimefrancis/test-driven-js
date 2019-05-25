if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function (string) {
        return str + ', ' + string;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map((item) => {
        return () => fn(item);
      });
    },

    partial : function(fn, str1, str2) {
      return function(str) {
        return fn(str1, str2, str)
      }
    },

    useArguments : function() {
      var args = [...arguments];
      return args.reduce(function(total, item) {
        return total + item;
      }, 0);
    },

    callIt : function(fn) {
      var args = [...arguments];
      return fn.apply(this, args.slice(1));
    },

    partialUsingArguments :  (fn, ...args) => (...args2) => fn(...args, ...args2),
    curryIt :(fn, ...args) => (fn.length <= args.length) ? fn(...args) : (...more) => curryIt(fn, ...args, ...more),
  };
});
