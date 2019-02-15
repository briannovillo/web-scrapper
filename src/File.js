const fs = require('fs');

const saveIntoFile = (fileName, data) => {
  fs.writeFile(fileName, data, function(err) {
    if(err) {
      return console.log(err);
    }
  });
};

module.exports = saveIntoFile;
