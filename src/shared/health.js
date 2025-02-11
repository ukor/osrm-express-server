const { Router } = require('express');

const router = Router()

router.post('/', (request, response) => {
    response.status(200).json({
        'status': 'SUCCESS',
        'description': `${request.method}`,
        'dateReceived': new Data(),
    })
});

router.get('/', (request, response) => {
    const profile = request.app.get('osrmProfile');
    response.status(200).json({
        'status': 'OK',
        'description': `[ ${request.method} ] - ${profile} profile is receiving the request`,
        'dateReceived': new Date(),
    });
});

module.exports = router
