// Global scope

// Are accesible throughout the program. A variable declared outside a function. it means that all scripts and functions on a webpage can access it. 

// Only Var can be reassigned

var diego = 'abogado'
var diego = 'developer'

console.log(diego)

// You can acces to global scope when variables are declared globally. But you can't redeclared Let or Const values.g

var hola = 'holi'
let hola2 = 'hola'
const hola3 = 'holanda'

const myFunction = () => {
    console.log(hola)
    console.log(hola2)
    console.log(hola3)
}
myFunction();

