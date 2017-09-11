function getAndPrintHTML(options) {
  const https = require('https');

  https.get(options, (response) => {
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

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);