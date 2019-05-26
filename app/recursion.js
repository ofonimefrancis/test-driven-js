if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function (fileData, dirName) {
      let result = [];
      let data = [];
      let self = this;

      if(typeof fileData === 'object') {
        fileData.files.map(function(item) {
          result = result.concat(self.listFiles(item));
        })
      }
      if(typeof fileData === 'string') {
        result.push(fileData);
      }
  
      if(arguments[1]) {
        result.forEach(item => {
          if(item.includes(`.${dirName}`)) {
            data.push(item);
          }
        })
      }
      return (arguments[1]) ? data : result;
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
