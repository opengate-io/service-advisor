'use strict';
var dataProvider = require('../data/services.js');
/**
 * Operations on /services
 */
module.exports = {
    /**
     * summary: 
     * description: Returns &#39;Service&#39; list that is capable to call from client according to OpenAPI 3.0 or Swagger 2.0.
     * parameters: name
     * produces: 
     * responses: 200, default
     */
    get: function getServices(req, res, next) {
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
     * description: Create &#39;Service&#39; specs into the system.
     * parameters: body
     * produces: 
     * responses: 201, default
     */
    post: function createService(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
