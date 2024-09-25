const express = require('express');
const CartRepository = require('./cartRepository');
const AddToCartService = require('./addToCartService');  // Importa la clase

const repository = new CartRepository();
const addToCartService = new AddToCartService(repository);  // Instancia única del servicio

const router = express.Router();

router.use(express.json());

// Ruta POST para agregar productos al carrito
router.post('/', (req, res) => {
    const data = req.body;
    try {
        addToCartService.addProduct(data);  // Llamamos al servicio para añadir el producto
        return res.status(201).send('Producto agregado al carrito');
    } catch (error) {
        return res.status(400).send(error.message);  // Manejamos cualquier error que ocurra
    }
});

// Ruta GET para obtener todos los productos del carrito
router.get('/', (req, res) => {
    const products = addToCartService.getAllProducts();  // Llamamos al servicio para obtener los productos
    return res.json(products);
});

module.exports = router;

