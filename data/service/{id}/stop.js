'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: stopTrainingService
     */
    put: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}/stop',
                operation: 'put',
                response: '201'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}/stop',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    }
};
