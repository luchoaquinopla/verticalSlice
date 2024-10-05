class UpdateSculpture {
  constructor(sculptureDataBase) {
    this.sculptureDataBase = sculptureDataBase;  // Pasamos la instancia de la base de datos correctamente
  }

  updateSculpture(id, updatedData) {
    const sculptureIndex = this.sculptureDataBase.sculptures.findIndex(sculpture => sculpture.id === parseInt(id));

    if (sculptureIndex === -1) {
      throw new Error('Escultura no encontrada');
    }

    const sculptureToUpdate = this.sculptureDataBase.sculptures[sculptureIndex];
    this.sculptureDataBase.sculptures[sculptureIndex] = {
      ...sculptureToUpdate,
      ...updatedData
    };

    return this.sculptureDataBase.sculptures[sculptureIndex];
  }
}

module.exports = UpdateSculpture;


