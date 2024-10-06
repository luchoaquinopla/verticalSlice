const request = require('supertest');
const express = require('express');
const scupRouter = require('../routes/sculptorRoutes');  // Asegúrate de tener bien configurado el router

const app = express();
app.use(express.json());
app.use('/sculptors', scupRouter);

describe('Carrito API', () => {
    test('debería agregar un producto al carrito', async () => {
        const scupultor = {name: "Auguste Rodina", biography: "Famoso escultaaor francés conocido por 'El Pensador'.", contact: "rodin@example.com", previousWorks: ["El Pensador", "La Puerta del Infierno"] };
        const response = await request(app) .post('/sculptors').send(scupultor) .expect(201); 
        expect(response.status).toBe(201);
    });

    // Prueba para devolver los productos del carrito
    test('debería devolver los productos del carrito', async () => {
        const response = await request(app).get('/sculptors').expect(200); 
        expect(response.body).toContainEqual({"biography": "Famoso escultaaor francés conocido por 'El Pensador'.", "contact": "rodin@example.com", "id": 1, "name": "Auguste Rodina", "previousWorks": ["El Pensador", "La Puerta del Infierno"]});
    });
});