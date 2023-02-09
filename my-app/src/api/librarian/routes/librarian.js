'use strict';

/**
 * librarian router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::librarian.librarian');
