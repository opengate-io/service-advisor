'use strict';
var dataProvider = require('../../../data/service/{id}/start.js');
/**
 * Operations on /service/{id}/start
 */
module.exports = {
    /**
     * summary: 
     * description: Start training &#39;Service&#39; specs in the system.
     * parameters: id
     * produces: 
     * responses: 201, default
     */
    put: function startTrainingService(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['put']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
