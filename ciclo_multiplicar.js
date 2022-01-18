// Tabla de multiplicar


let numero = parseInt(prompt())

if (isNaN(numero)) {
    alert("Ingrese un numero")
} else {
    for (let i = 1; i <= 10; i++) {
        let producto = numero * i
        alert(numero + " * " + i + " = " + producto)
    }
}

