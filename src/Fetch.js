const nodeFetch = require('node-fetch');

const fetch = url => nodeFetch(url).then(data => data.text()).catch(err => console.error('ERROR FETCHING DATA -->', err));

module.exports = fetch;
