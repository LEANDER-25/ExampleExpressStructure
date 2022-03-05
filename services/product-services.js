const products = require('../data/product-data');

//get by name
const getByName = (name) => {
    console.log(name);
    return products.filter((item)=>{return item.name.includes(name)});
}
//add product
const addNewProduct = (product) => {
    if(!product) throw "MissingProductError";
    let created = products.push(product);
    return created;
}
//update
//update phai dung ID de tim cai san pham do
const updateProduct = (product) => {
    if(!product) throw "MissingProductError";
    if(!product.id) throw "MissingProductIDError";
    let productExist = products.find((item)=>{item.id === product.id});
    productExist.name = product.name;
    return 1;
}
//delete
// const deleteProduct = (product) => {
//     if(!product) throw "MissingProductError";
//     if(!product.id) throw "MissingProductIDError";
//     products.
// }
module.exports = {
    getByName,
    addNewProduct,
    updateProduct
};
