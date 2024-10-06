const request = require('supertest');
const express = require('express');
const sculptureRouter = require('../routes/sculptureRoutes');  // Asegúrate de tener bien configurado el router

const app = express();
app.use(express.json());
app.use('/sculptures', sculptureRouter);

describe('Sculpture API', () => {
    // Prueba para agregar una escultura
    test('debería agregar una nueva escultura', async () => {
        const sculpture = {
            name: "El Pensador",
            theme: "Filosofía",
            creationDate: "1902-08-16"
        };
        const response = await request(app)
            .post('/sculptures')
            .send(sculpture)
            .expect(201);

        expect(response.status).toBe(201);
    });

    // Prueba para devolver todas las esculturas
    test('debería devolver todas las esculturas', async () => {
        const response = await request(app)
            .get('/sculptures')
            .expect(200);

        expect(response.body).toContainEqual({
            id: 1,
            name: "El Pensador",
            theme: "Filosofía",
            creationDate: "1902-08-16"
        });
    });
});
