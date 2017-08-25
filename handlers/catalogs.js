'use strict';
var dataProvider = require('../data/catalogs.js');
/**
 * Operations on /catalogs
 */
module.exports = {
    /**
     * summary: 
     * description: Get &#39;Service&#39; specs calalogs in the system.
     * parameters: 
     * produces: 
     * responses: 200, default
     */
    get: function getServiceCatalogs(req, res, next) {
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
    }
};
