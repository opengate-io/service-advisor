'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: getServices
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/services',
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
                path: '/services',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Create &#39;Service&#39; specs into the system.
     * parameters: body
     * produces: 
     * responses: 201, default
     * operationId: createService
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/services',
                operation: 'post',
                response: '201'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/services',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
