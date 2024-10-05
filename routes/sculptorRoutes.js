const express = require('express');
const CreateSculptor = require('../sculptorManagement/createSculptor');
const SculptorDataBase = require('../sculptorManagement/sculptorDataBase');
const UpdateSculptor = require('../sculptorManagement/updateSculptor');
const DeleteSculptor = require('../sculptorManagement/deleteSculptor');

const router = express.Router();
const db = new SculptorDataBase(); 

const createSculptor = new CreateSculptor(db);  // Pasamos la instancia compartida de la base de datos
const updateSculptor = new UpdateSculptor(db);  // Instancia de la clase UpdateSculptor
const deleteSculptor = new DeleteSculptor(db);
// Ruta para crear un escultor
router.post('/', (req, res) => {
  try {
    const newSculptor = createSculptor.newSculptor(req.body);
    res.status(201).json(newSculptor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener todos los escultores
router.get('/', (req, res) => {
  const sculptors = createSculptor.getAllSculptors();
  res.json(sculptors);
});

// Ruta para actualizar un escultor por su ID
router.put('/:id', (req, res) => {
  try {
    const updatedSculptor = updateSculptor.updateSculptor(req.params.id, req.body);  
    res.status(200).json(updatedSculptor);  
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
    try {
      const delSculptor = deleteSculptor.deleteSculptor(req.params.id, req.body);
      res.status(200).json(delSculptor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

module.exports = router;

