const services = require('../services/product-services');

const getProductsByName = (req, res) => {
    let queryString = req.query;
    try {
        let products = services.getByName(queryString.name);
        console.log(products);
        if(products.length === 0) {
            return res.sendStatus(404);
        }
        return res.status(200).json({message: products});
    } catch (error) {
        return res.sendStatus(500);
    }

}
module.exports = {
    getProductsByName
};
