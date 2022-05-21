const request = require('request');
const fs = require("fs");
const urlArg = process.argv[2];
const localFilePath = process.argv[3];

request(urlArg, (error, response, body) => {
  if (error) {
    console.log(error);
  }
  fs.writeFile(`${localFilePath}`, body, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    }
  });
});