// PRIVATE CLOSURE 


// Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.


const persona = () => {
  var saveName = 'name';
  return {
    getName: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name;
    }
  }
}

newPerson = persona();

console.log(newPerson.getName())

newPerson.setName('diego')

console.log(newPerson.getName())