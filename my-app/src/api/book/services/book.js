'use strict';

/**
 * book service
 */
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1ODYyOTU4LCJleHAiOjE2Nzg0NTQ5NTh9.1jwFaN0yfbBEvCIIAn40Gr49vP6FM1H8yYHOsEOSvc0
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book.book');