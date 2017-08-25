'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getServiceById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}',
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
                path: '/service/{id}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Update &#39;Service&#39; specs into the system.
     * parameters: id, body
     * produces: 
     * responses: 200, default
     * operationId: updateService
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Remove &#39;Service&#39; specs out of the system.
     * parameters: id
     * produces: 
     * responses: 200, default
     * operationId: deleteService
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/service/{id}',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
