if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise(resolve => resolve(value));
    },

    manipulateRemoteData : function(url) {
      let deferred = $.Deferred();

      $.ajax(url).then(function (resp) {
        var people = resp.people.map(function (person) {
          return person.name;
        });
        deferred.resolve(people.sort());
      });

      return deferred.promise();
    }
  };
});
