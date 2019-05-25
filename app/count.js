if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let timer;

      function logNumber(start) {
        console.log(start);
      }

      const counting = () => {
        start++;

        if (start <= end) {
          timer = setTimeout(logNumber(start), 100);
        }
      }

     counting();

      return {
        cancel: () => clearTimeout(timer),
      }
    }
  };
});