const express = require('express');
const { configureMiddlewares, configureRoutes, configureOSRM } = require('../config');

const bikeServer = express();

// path to osrm graph profile for bike
const OSRM_GRAPH_BIKE = '../../osrm-data/test';

configureMiddlewares(bikeServer);
configureRoutes('Bike', bikeServer);
configureOSRM(bikeServer, { osrmDataPath: process.env.OSRM_GRAPH_BIKE || OSRM_GRAPH_BIKE })

module.exports = {bikeServer};