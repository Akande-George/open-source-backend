const Product = require('../database/models/productModels')

module.exports.createProduct = async (req, res) => {
    try {
        let product = new Product(req.body)
        console.log(product)
        let result = await product.save()
        return result.toObject()
    } catch (error) {
        console.log('something went wrong', error)
        throw new Error(error)
    }
}