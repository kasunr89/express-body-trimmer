'use strict';

const _ = require('lodash');

/**
 * Trim object or array
 *
 * @author Kasun R <kasunrc123@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 */

module.exports = function trimmer(body)  {
    return _.transform(body, (result, value, key) => {        
        if (_.isObject(value)) {
            _.set(result, key, trimmer(value));            
        } else {
            if (_.isString(value)) {
                _.set(result, key, _.trim(value));
            } else {
                _.set(result, key, value);
            }            
        }
    }); 
};