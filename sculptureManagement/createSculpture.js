class CreateSculpture {
  constructor(sculptureDataBase) {
    this.sculptureDataBase = sculptureDataBase;  
  }

  newSculpture(sculptureData) {
    if (!sculptureData.name || !sculptureData.theme || !sculptureData.creationDate) {
      throw new Error('Todos los campos son obligatorios');
    }

    const sculpture = {
      id: this.sculptureDataBase.sculptures.length + 1,  
      name: sculptureData.name,
      theme: sculptureData.theme,
      creationDate: sculptureData.creationDate
    };

    this.sculptureDataBase.sculptures.push(sculpture);  
    return sculpture;
  }

  getAllSculptures() {
    return this.sculptureDataBase.getDataBase(); 
}
}

module.exports = CreateSculpture;


