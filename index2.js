const { nextISSTimesForMyLocation } = require('./iss_promised');
const {logTimes} = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    logTimes(passTimes);
  })
  .catch((error) => {
    console.log("it didn't work: ", error.message);
  });