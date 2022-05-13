'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findOneWithMostStock: async (ctx) => {
        const entity = await strapi.services.product.find({ _limit: 1, _sort: 'stock:desc' });
        return sanitizeEntity(entity, { model: strapi.models.product });
    }
};
