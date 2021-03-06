const https = require('https');

function getAndPrintHTML() {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    let responseData = '';
    response.on('data', (data) => {
      responseData += data;
    });

    response.on('end', () => {
      console.log(responseData);
    });
  });
}

getAndPrintHTML();