const express = require('express');
const addToCartController = require('./addToCart/addToCartController');  

const app = express();
app.use(express.json());
app.use('/carrito', addToCartController);  // Integra el router

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
