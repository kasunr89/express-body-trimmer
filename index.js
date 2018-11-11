'use strict';

const trimmer = require('./lib/trimmer');

/**
 * Express middleware to trim request body
 *
 * @author Kasun R <kasunrc123@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */

module.exports = function() {
    return function(req, res, next) {    
        if (req.body) {
            req.body = trimmer(req.body);            
        }
        next();
    }   
}



