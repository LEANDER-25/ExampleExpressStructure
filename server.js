const express = require('express');
const app = express();

const productRoute = require('./routers/product-route');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/', (req, res) => {
    res.status(200).json({message: "DONE"});
})
//middleware: can thiep vao req,res
app.use('/products', productRoute);

app.listen(5000, () => console.log('Start listen at port: 5000'));