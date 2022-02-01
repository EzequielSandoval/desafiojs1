console.log("Arrays")

/*Un arrar se guarda en una variable por lo tanto cualquier tipo es valido*/
const arrayA = []
const arrayB = [1, 2]
const arrayC = ["C1", "AA", "TTT"]

let arrayD = [true, false, true, false]

const arrayR = [1, false, "Esto es un string"]

const numeros = [1, 2, 3, 4, 5]
/*Los arrays comienzan desde 0*/

// acceder a items del array
console.log(numeros[0])

let numero = numeros[1]

let resultado = numero + numeros[3]

// recorrido del array
for (let index = 0; index < 5; index++) {
    console.log (numeros [index])
    
}