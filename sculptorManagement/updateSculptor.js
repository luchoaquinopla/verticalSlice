class UpdateSculptor {
    constructor(sculptorDataBase) {
        this.sculptorDataBase = sculptorDataBase;  
      }
    
  
    updateSculptor(id, updatedData) {
      const sculptorIndex = this.sculptorDataBase.sculptors.findIndex(sculptor => sculptor.id === parseInt(id));
  
      if (sculptorIndex === -1) {
        throw new Error('Escultor no encontrado');
      }
  
      const sculptorToUpdate = this.sculptorDataBase.sculptors[sculptorIndex];
      this.sculptorDataBase.sculptors[sculptorIndex] = {
        ...sculptorToUpdate,
        ...updatedData
      };
  
      return this.sculptorDataBase.sculptors[sculptorIndex];
    }
  }
  
  module.exports = UpdateSculptor;
  
  