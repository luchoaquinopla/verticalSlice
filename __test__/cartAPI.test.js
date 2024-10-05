const request = require('supertest');
const express = require('express');
const cartRouter = require('../addToCart/addToCartController');  // Asegúrate de tener bien configurado el router

const app = express();
app.use(express.json());
app.use('/carrito', cartRouter);

describe('Carrito API', () => {
    test('debería agregar un producto al carrito', async () => {
        const product = { name: 'heladera', price: 2000 };
        const response = await request(app) .post('/carrito').send(product) .expect(201); 
        expect(response.text).toBe('Producto agregado al carrito');
    });

    // Prueba para devolver los productos del carrito
    test('debería devolver los productos del carrito', async () => {
        const response = await request(app).get('/carrito').expect(200); 

        expect(response.body).toContainEqual({ name: 'heladera', price: 2000 });
    });
});
