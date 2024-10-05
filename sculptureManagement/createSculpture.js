class CreateSculpture {
  constructor(sculptureDataBase) {
    this.sculptureDataBase = sculptureDataBase;  // Pasamos la instancia de la base de datos correctamente
  }

  newSculpture(sculptureData) {
    if (!sculptureData.name || !sculptureData.theme || !sculptureData.creationDate) {
      throw new Error('Todos los campos son obligatorios');
    }

    const sculpture = {
      id: this.sculptureDataBase.sculptures.length + 1,  // Accedemos a this.sculptureDataBase.sculptures
      name: sculptureData.name,
      theme: sculptureData.theme,
      creationDate: sculptureData.creationDate
    };

    this.sculptureDataBase.sculptures.push(sculpture);  // Añadimos la nueva escultura a la base de datos
    return sculpture;
  }

  getAllSculptures() {
    return this.sculptureDataBase.getDataBase();  // Aseguramos que estamos accediendo a la base de datos correctamente
  }
}

module.exports = CreateSculpture;


