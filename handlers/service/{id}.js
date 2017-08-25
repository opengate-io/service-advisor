'use strict';
var dataProvider = require('../../data/service/{id}.js');
/**
 * Operations on /service/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: Returns &#39;Service&#39; specs from the system.
     * parameters: id
     * produces: 
     * responses: 200, default
     */
    get: function getServiceById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: Update &#39;Service&#39; specs into the system.
     * parameters: id, body
     * produces: 
     * responses: 200, default
     */
    put: function updateService(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description: Remove &#39;Service&#39; specs out of the system.
     * parameters: id
     * produces: 
     * responses: 200, default
     */
    delete: function deleteService(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
