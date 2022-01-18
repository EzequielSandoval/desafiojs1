
let nacimiento = parseFloat(prompt("Ingrese su año de nacimiento").trim())

if (nacimiento <= 2004) {
    alert("eres mayor de edad")
} else {
    alert("eres menor de edad")


}

let nombre = prompt("Ahora ingresa tu nombre").trim()

console.log("Tu nombre es: " + nombre)

let numero = parseFloat(prompt("Adivina el numero entre 1 y 10").trim())

if (numero >= 1 && numero <= 10) {
    if (numero == 7) {
        alert("Muy bien, lo adivinaste! El numero oculto es " + numero)
    } else {
        alert("El numero que ingresaste no es el oculto!")
    }

} else {
    alert("¡¡¡¡ERROR!!!! Tienes que ingresar un numero entre 1 y 10")
}

