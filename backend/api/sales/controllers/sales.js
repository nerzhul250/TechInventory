'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    sellProduct: async (ctx) => {
        const { productId, qty } = ctx.request.body
        const entity = await strapi.services.product.findOne({ id: productId });
        if(entity.stock<qty){
            ctx.throw(400, 'Not enough stock');
        }else if(!entity){
            ctx.throw(400,'product not found')
        }else{
            const newSale = await strapi.services.sales.create({
                product: productId,
                quantity: qty
            })
            await strapi.services.product.update({ id: entity.id },
                { $set: {"stock": entity.stock-qty} })
            return newSale
        }
    },
    mostSoldProduct: async (ctx) => {
        const result = strapi.query('sales').model.aggregate(
            [
                { $group: { "_id": "$product", totalQuantity: { $sum: "$quantity"} }},
                { $sort: { totalQuantity: -1 } }
            ]
        );
        console.log(result)
        return result
    }
};
