if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let timer;

      const counting = () => {
        console.log(start++);

        if (start <= end) {
          timer = setTimeout(counting, 100);
        }
      }

     counting();

      return {
        cancel: () => {
          timer && clearTimeout(timer);
        }
      }
    }
  };
});