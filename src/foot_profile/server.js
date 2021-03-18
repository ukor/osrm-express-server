require('dotenv').config();
const express = require('express');

const { configureMiddlewares, configureRoutes, configureOSRM } = require('../config');

const footServer = express();

// path to osrm graph profile for foot (update the path to your defined location)
const OSRM_GRAPH_FOOT = '../../osrm-data/test';

configureMiddlewares(footServer);
configureRoutes('Foot', footServer);
configureOSRM(footServer, { osrmDataPath: process.env.OSRM_GRAPH_FOOT || OSRM_GRAPH_FOOT })

module.exports = {footServer};