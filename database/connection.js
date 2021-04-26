const mongoose = require('mongoose')
module.exports = () => {
    mongoose.connect("mongodb+srv://ecommerce:ecommerce2104@cluster0.mwpbf.mongodb.net/ecommercedb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    });
    console.log('database connected successfully')
}