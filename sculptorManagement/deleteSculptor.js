class deleteSculptor{
    constructor(sculptorDataBase) {
        this.sculptorDataBase = sculptorDataBase;  
      }
    
    deleteSculptor(id){
        const sculptorIndex = this.sculptorDataBase.sculptors.findIndex(sculptor => sculptor.id === parseInt(id));
  
        if (sculptorIndex === -1) {
          throw new Error('Escultor no encontrado');
        }
        
        this.sculptorDataBase.sculptors.splice(sculptorIndex, 1); 

    return { message: 'Escultura eliminada correctamente' };
  }
}
module.exports = deleteSculptor;