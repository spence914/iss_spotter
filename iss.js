const request = require('request');


const fetchMyIP = function (callback) {
  const url = 'https://api.ipify.org?format=json';

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);

    callback(null, data['ip']);
  });

};

module.exports = { fetchMyIP };


// 'https://api.ipify.org?format=json'