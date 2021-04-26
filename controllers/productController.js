const productService = require('../services/productService')
module.exports.createProduct = async (req, res) => {
    let response = {}
    try {
        const responseFromService = await productService.createProduct(req, res)
        response.status = 201
        response.message = 'product created Succesfully!'
        response.body = responseFromService
    } catch (error) {
        console.log(error)
        response.status = 400
        response.message = 'something went wrong'
        response.body = {}
    }
    return res.status(response.status).send(response)
}