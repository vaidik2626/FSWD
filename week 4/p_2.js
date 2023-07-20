const urlModule = require('url');

function getAbsoluteUrl(baseUrl, relativePath) {
  const absoluteUrl = urlModule.resolve(baseUrl, relativePath);
  return absoluteUrl;
}

const baseUrl = 'https://vaidikjetani/';
const relativePath = 'path/to/resume/';

const absoluteUrl = getAbsoluteUrl(baseUrl, relativePath);
console.log('Absolute URL:', absoluteUrl);
