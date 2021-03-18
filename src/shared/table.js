const { Router } = require('express');

const router = Router();

router.post('/', (request, response) => {

    const { coordinates, sources, destinations } = request.body;

    if (!coordinates){
        return response.status(422).json({
            status: 'ERROR', description: 'Coordinates are missing.'
        });
    }
    const options = {coordinates}
    if (sources){
        options['sources'] = sources;
    }
    if(destinations){
        options['destinations'] = destinations
    }

    const osrm = request.app.get('osrm');

    try {
        osrm.table(options, (error, osrmResp) => {
            if (error) {
                return response.status(422).json({ status: 'ERROR', description: err.message });
            }
            return response.json(osrmResp);
        });
    }catch(error){
        return response.status(500).json({
            'status': 'ERROR',
            'description': error.message
        });
    }
});

module.exports = router;