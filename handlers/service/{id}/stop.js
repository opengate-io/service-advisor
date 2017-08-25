'use strict';
var dataProvider = require('../../../data/service/{id}/stop.js');
/**
 * Operations on /service/{id}/stop
 */
module.exports = {
    /**
     * summary: 
     * description: Stop training &#39;Service&#39; specs in the system.
     * parameters: id
     * produces: 
     * responses: 201, default
     */
    put: function stopTrainingService(req, res, next) {
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
