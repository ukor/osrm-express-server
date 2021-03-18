const express = require('express');
const { configureMiddlewares, configureRoutes, configureOSRM } = require('../config');

const driveServer = express();

// path to osrm graph profile for drive
const OSRM_GRAPH_DRIVE = '../../osrm-data/test';

configureMiddlewares(driveServer);
configureRoutes('Drive', driveServer);
configureOSRM(driveServer, { osrmDataPath: process.env.OSRM_GRAPH_DRIVE || OSRM_GRAPH_DRIVE })

module.exports = {driveServer};