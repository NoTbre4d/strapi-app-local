'use strict';

/**
 * tikect service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tikect.tikect');
