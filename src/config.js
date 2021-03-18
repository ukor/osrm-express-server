const helmet = require('helmet');
const { loadMapGraph } = require('./bin/osrm');

function configureMiddlewares(app) {
  app.use(helmet());
}

function configureRoutes(profile, app){
    app.use('/', (request, response) => {
        response.send(`${profile} Profile is recieving the request`);
    });
    app.use('./shared/route', route);
}

function configureOSRM(app, options){
    loadMapGraph(options)
    app.set("osrm", osrm);
}

module.exports = { configureMiddlewares, configureRoutes, configureOSRM };