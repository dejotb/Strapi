"use strict";

/**
 * selling service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::selling.selling");
