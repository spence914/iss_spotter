// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTime, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP("42", (error, data) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log("It worked!", data);


// });

// fetchISSFlyOverTime({ latitude: 49.16837, longitude: -122.579975 }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked:", times);
// });

const logTimes = function (passTimes) {
  for (const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  logTimes(passTimes);
});