const helmet = require('helmet');
const { loadMapGraph } = require('./bin/osrm');
const OSRMroute = require('./shared/route');
const OSRMtable = require('./shared/table');
const health = require('./shared/health');

function configureMiddlewares(app) {
  app.use(helmet());
}

function configureRoutes(profile, app){
    app.use('/route', OSRMroute);
    app.use('/table', OSRMtable);
    app.use('/health', (request, response, next) => {
        app.set('osrmProfile', profile);
        next();
    }, health);
}

function configureOSRM(app, options){
    const osrm = loadMapGraph(options);
    app.set("osrm", osrm);
}

module.exports = { configureMiddlewares, configureRoutes, configureOSRM };