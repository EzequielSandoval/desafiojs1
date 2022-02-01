// Copiar pedazos
const nombre = ["martin", "Nedelcou", "mauricio", "willian"]
// 1 >= X < 3
const grupo1 = nombre.slice(1, 3)

// Conocer posicion de un elemento
let index = nombre.indexOf("Nedelcou")
const element = nombre[index]


// Saber si un eleemento existe en el array

console.log(nombre.includes("mauricio"))

console.log(nombre.includes("al profe"))

// CONSEGUIR EL ARRAY AL REVES


const alrevez = nombre.reverse()