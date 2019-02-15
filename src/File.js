const fs = require('fs');

const saveArrayIntoFile = (fileName, data) => {
  const file = fs.createWriteStream(fileName);
  file.on('error', err => new Error(err));
  data.forEach(line => file.write(line + '\n'));
  file.end();
};

module.exports = saveArrayIntoFile;
