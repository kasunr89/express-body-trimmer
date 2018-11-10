'use strict';
const _ = require('lodash');

/**
 * Express middleware to trim request body
 *
 * @author Kasun R <kasunrc123@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */

module.exports = function (req, res, next) {
    if (req.body) {
       req.body = trimBody(req.body);
    }
    next();
}

/**
 * Iterate and trim entire request body
 * 
 * @param {Object} body - Request body
 */
function trimBody(body) {
    return _.transform(body, (result, value, key) => {        
        if (_.isObject(value)) {
            _.set(result, key, trimBody(value));            
        } else {
            _.set(result, key, _.trim(value));
        }
    }); 
}