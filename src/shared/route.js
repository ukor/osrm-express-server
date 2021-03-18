const { Router } = require('express');

const router = Router();

router.post('/', () => {
    try {
        const {
            coordinates, alternatives, annotations,
            geometries,overview, continue_straight
        } = request.body;
        if (!coordinates){
            return response.status(422).json({
                status: 'ERROR', description: 'Coordinates are missing.'
            });
        }
        const osrm = req.app.get("osrm");
        const options = {
            coordinates: coordinates,
            alternatives: alternatives || false,
            // Return route steps for each route leg
            steps: steps || true,
            // Return annotations for each route leg
            annotations: annotations || false,
            // Returned route geometry format. Can also be geojson
            geometries: geometries || "geojson",
            // Add overview geometry either full, simplified according to
            // highest zoom level it could be display on, or not at all
            overview: overview || "false",
            // Forces the route to keep going straight at waypoints and don't do
            // a uturn even if it would be faster. Default value depends on the profile
            continue_straight: continue_straight || false
        };
        osrm.route(options, (error, osrmResp) => {
            if (error) {
                return response.status(422).json({ status: 'ERROR', description: err.message });
            }
            return response.json(osrmResp);
        });
    } catch (error) {
        return response.status(500).json({
            'status': 'ERROR',
            'description': error.message
        });
    }
});

module.exports = router;