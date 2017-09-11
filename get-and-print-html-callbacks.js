function getHTML(options, callback) {
  const https = require('https');

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
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);