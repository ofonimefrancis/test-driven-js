if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise(resolve => resolve(value));
    },

    manipulateRemoteData : function(url) {
      let result = [];
      return fetch(url).then(response => response.json())
        .then(data => {
          data.people.forEach(item => result.push(item));
      });
      return result.sort();
    }
  };
});
