'use strict';

/**
 * librarian service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::librarian.librarian');
