// let perro = {
//     nombre: "Firulais", 
//     edad: 5,
//     vive: true
// }

// es una variable que tiene muchos atributos

// let perro2 = {
//     nombre: "tomy",
//     edad: 3,
//     vive: false
// }
// console.log(perro2)

function Perro(nombre, edad, vive) {
    this.nombre = nombre;
    this.edad = edad;
    this.vive= vive;
}
let perro1 = new Perro ("rex", 5, true)

let perro2 = new Perro ("firulais", 6, false)

let perro3 = new Perro ("Tommy", 13, false)
console.log(perro3)