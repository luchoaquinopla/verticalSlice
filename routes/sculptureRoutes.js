const express = require('express');
const CreateSculpture = require('../sculptureManagement/createSculpture');
const UpdateSculpture = require('../sculptureManagement/updateSculpture');
const SculpturesDataBase = require('../sculptureManagement/sculptureDataBase');
const DeleteSculpture = require('../sculptureManagement/deleteSculpture');

const router = express.Router();

const db = new SculpturesDataBase();  // Instancia compartida de la base de datos

const createSculpture = new CreateSculpture(db);  // Pasa la instancia compartida a CreateSculpture
const updateSculpture = new UpdateSculpture(db); // Pasa la misma instancia compartida a UpdateSculpture
const deleteSculpture = new DeleteSculpture(db); // Pasa la misma instancia compartida a DeleteSculpture

// Ruta para crear una escultura
router.post('/', (req, res) => {
  try {
    const newSculpture = createSculpture.newSculpture(req.body);
    res.status(201).json(newSculpture);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener todas las esculturas
router.get('/', (req, res) => {
  const sculptures = createSculpture.getAllSculptures();
  res.json(sculptures);
});

// Ruta para actualizar una escultura
router.put('/:id', (req, res) => {
  try {
    const updatedSculpture = updateSculpture.updateSculpture(req.params.id, req.body);
    res.status(200).json(updatedSculpture);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const delSculpture = deleteSculpture.deleteSculpture(req.params.id, req.body);
    res.status(200).json(delSculpture);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});




module.exports = router;
