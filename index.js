// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTime } = require('./iss');

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

fetchISSFlyOverTime({ latitude: 49.16837, longitude: -122.579975 }, (error, times) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked:", times);
});