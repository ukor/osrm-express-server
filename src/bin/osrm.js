const os = require('os');
const OSRM = require('osrm');

process.env.UV_THREADPOOL_SIZE = Math.ceil(os.cpus().length * 1.5);

function loadMapGraph(options){
    console.log(options);

    const config = { path: options.osrmDataPath, algorithm: "CH" };
    return new OSRM(config);
}

module.exports = { loadMapGraph };