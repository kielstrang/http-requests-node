const https = require('https');

module.exports = function getHTML(options, callback) {

  https.get(options, (response) => {
    response.setEncoding('utf8');

    let responseData = '';
    response.on('data', (data) => {
      responseData += data;
    });

    response.on('end', () => {
      callback(responseData);
    });
  });
};