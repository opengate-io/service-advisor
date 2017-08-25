'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: getServiceCatalogs
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/catalogs',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
