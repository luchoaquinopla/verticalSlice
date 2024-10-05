const express = require('express');
const addToCartController = require('./addToCart/addToCartController');  
const sculptureRoutes= require('./routes/sculptureRoutes');
const sculptorRoutes= require('./routes/sculptorRoutes');

const app = express();
app.use(express.json());
app.use('/carrito', addToCartController);  // Integra el router
app.use('/sculptures', sculptureRoutes);
app.use('/sculptors', sculptorRoutes);

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

