const Joi = require('joi')

module.exports.createProductSchema = Joi.object().keys({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    price: Joi.number().required()
})