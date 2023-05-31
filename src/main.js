require("dotenv").config();
const { driveServer } = require("./drive_profile/server");
const { bikeServer } = require("./bike_profile/server");
const { footServer } = require("./foot_profile/server");

const DRIVE_PORT = 6000;
const BIKE_PORT = 6100;
const FOOT_PORT = 6200;

// driverServer.get('/', (request,  reesponse) => {});
// bikeServer.get('/', (request, response) => {});
// footServer.get('/', (request, response) => {});

driveServer.listen(DRIVE_PORT, () => {
  console.log(`Drive server listening on port ${DRIVE_PORT}`);
});

bikeServer.listen(BIKE_PORT, () => {
  console.log(`Bike server listening on port ${BIKE_PORT}`);
});

footServer.listen(FOOT_PORT, () => {
  console.log(`Foot server listening on port ${FOOT_PORT}`);
});
