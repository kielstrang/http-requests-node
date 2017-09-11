var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  const replacements = [
    {from: /ck/g, to: 'x'},
    {from: /er/g, to: '0r'},
    {from: /you/g, to: 'j00'},
    {from: /a/g, to: '4'},
    {from: /e/g, to: '3'},
    {from: /l/g, to: '1'},
    {from: /o/g, to: '0'},
    {from: /s/g, to: '5'},
    {from: /t/g, to: '7'}
  ];

  for(const replacement of replacements) {
    html = html.replace(replacement.from, replacement.to);
  }
  console.log(html);
}

getHTML(requestOptions, print1337);
