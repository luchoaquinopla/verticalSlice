class deleteSculpture{
    constructor(sculptureDataBase) {
        this.sculptureDataBase = sculptureDataBase;  // Pasamos la instancia de la base de datos correctamente
      }
    
    deleteSculpture(id){
        const sculptureIndex = this.sculptureDataBase.sculptures.findIndex(sculpture => sculpture.id === parseInt(id));
        
        
        if (sculptureIndex === -1) {
            throw new Error('Escultura no encontrada');
          }
        
        this.sculptureDataBase.sculptures.splice(sculptureIndex, 1); 

    return { message: 'Escultura eliminada correctamente' };
  }
}
module.exports = deleteSculpture;



    
