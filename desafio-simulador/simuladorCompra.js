// inicializacion
let costeMeses = 0
let costeCertificado = 0
let duracion = 0
let costeCopia = 0
let subtotal = 0
let precioFinal = 0
let descuentos = 0
let respaldo = ""
let certOpcion = ""
let sistema = ""
let copiaSeguridad = ""
let certificado = ""
let descuento = ""

//Calculo impuesto iva
function impIva(valor) {
    let valorIva = valor * 0.21
    return valorIva
}

//Funciones de descuento
const desc25 = (descontarMedio) => { return descontarMedio * 0.25 }

const desc50 = (descontarMayor) => { return descontarMayor * 0.50 }


// inicio de programa
alert("Servicio de hosting basico")
// cantidad de meses de servicio
do {
    duracion = parseInt(prompt("Por favor ingrese la cantidad de meses que desea contratar de servicio (1, 6, 12)"))
} while (!((duracion == 1) || (duracion == 6) || (duracion == 12)))

switch (duracion) {
    case 1:
        costeMeses = 490
        break;
    case 6:
        costeMeses = 2400
        break;
    case 12:
        costeMeses = 2160
        break;
}
// seleccion de sistema operativo
do {
    sistema = prompt("Por favor indique el sistema operativo (Windows o Linux)")
} while (!((sistema == "windows") || (sistema == "linux")))

if (sistema == "linux") {
    // servicios adicionales linux
    do {
        copiaSeguridad = prompt("Indique si desea agregar sistema de respaldo por $90/mes (s/n)")
    } while (!((copiaSeguridad == "s") || (copiaSeguridad == "n")))

    if (copiaSeguridad == "s") {
        respaldo = "SI"
        costeCopia = 90 * duracion
    } else if (copiaSeguridad == "n") {
        alert("no se agrego respaldo")
        respaldo = "NO"
    }
} else if (sistema = "windows") {
    alert("Este sistema operativo no tiene sistema de respaldo")
    respaldo = "no posee"
}
// servicios adicionales
do {
    certificado = prompt("Indique si desea agregar Certificado SSl por $1000/año (s/n)")
} while (!((certificado == "s") || (certificado == "n")))

if (certificado == "s") {
    costeCertificado = 1000
    certOpcion = "SI"
} else if (certificado == "n") {
    certOpcion = "NO"
}

// procesamiento de datos
subtotal = costeMeses + costeCopia + costeCertificado
totalImp = impIva(subtotal)
calculoTotal = totalImp + subtotal

// calculo descuentos
descuento = prompt("Si tiene codigo de descuento ingreselo a continuacion: ")
if (descuento === "cybermonday") {
    calcDescuentos = desc25(calculoTotal)
} else if (descuento === "hFnfqu5") {
    calcDescuentos = desc50(calculoTotal)
}
// calculo precio final
precioFinal = calculoTotal - calcDescuentos

// alert con resumen
alert("RESUMEN DE COMPRA: \n * Duracion del servicio: " + duracion + "Mes/es = $" + costeMeses + "\n * Sistema operativo: " + sistema.toUpperCase() + "\n * Copia de seguridad: " + respaldo + " = $" + costeCopia + "\n * Certificado SSL: " + certOpcion + " = $" + costeCertificado + "/año \n \n SUBTOTAL: $" + subtotal + "\n--------------------------\n +IVA: $" + totalImp + "\n--------------------------\nTOTAL: $" + calculoTotal + "\n Descuentos : -" + calcDescuentos + "\n TOTAL A PAGAR: $" + precioFinal.toFixed(2))




