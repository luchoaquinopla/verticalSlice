class CreateSculptor {
    constructor(sculptorDataBase) {
      this.sculptorDataBase = sculptorDataBase;  
    }
  
    newSculptor(sculptorData) {
      if (!sculptorData.name || !sculptorData.biography || !sculptorData.contact || !sculptorData.previousWorks) {
        throw new Error('Todos los campos son obligatorios');
      }
  
      const sculptor = {
        id: this.sculptorDataBase.sculptors.length + 1,  
        name: sculptorData.name,
        biography: sculptorData.biography,
        contact: sculptorData.contact,
        previousWorks: sculptorData.previousWorks
      };
  
      this.sculptorDataBase.sculptors.push(sculptor); 
      return sculptor; 
    }
  
    getAllSculptors() {
      return this.sculptorDataBase.getDataBase();  
    }
  }
  
  module.exports = CreateSculptor;
  