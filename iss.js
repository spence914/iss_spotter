const request = require('request');


const fetchMyIP = function (callback) {
  const url = 'https://api.ipify.org?format=json';

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function (ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }



    if (JSON.parse(body).success === false) {
      const message = `Success status was ${JSON.parse(body).success}. Server message says: ${JSON.parse(body).message} when fetching for IP ${JSON.parse(body).ip}`;
      callback(Error(message), null);
      return;
    }

    const latitude = JSON.parse(body).latitude;
    const longitude = JSON.parse(body).longitude;

    const results = {
      "latitude": latitude,
      "longitude": longitude
    };
    callback(null, results);
  });
};

const fetchISSFlyOverTime = function (coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const parsedBody = JSON.parse(body);

    callback(null, parsedBody.response);
  });
};



module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTime };


