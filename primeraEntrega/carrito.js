// inicializacion
let costeMeses = 0
let costeCertificado = 0
let duracion = 0
let costeCopia = 0
let subtotal = 0
let precioFinal = 0
let descuentos = 0
let calcDescuentos = 0
let respaldo = ""
let certOpcion = ""
let sistema = ""
let copiaSeguridad = ""
let certificado = ""
let descuento = ""
let plan = ""

//Calculo impuesto iva
function impIva(valor) {
    let valorIva = valor * 0.21
    return valorIva
}

//Calculos de descuentos
const desc25 = (descontarMedio) => { return descontarMedio * 0.25 }

const desc50 = (descontarMayor) => { return descontarMayor * 0.50 }


//Entrada de datos
do {
    plan = prompt("Selecciona el plan que deseas [Lite, Plus, Full]")
} while (!((plan == "lite") || (plan == "plus") || (plan == "full")))

// procesamiento de entrada 
switch (plan) {
    case "lite":
        costePlan = 149 // valores por 1 mes
        break;
    case "plus":
        costePlan = 269 // valores por 1 mes
        break;
    case "full":
        costePlan = 399 // valores por 1 mes
        break;
}

//Entrada de cantidad de meses del servicio
do {
    duracion = parseInt(prompt("Por favor ingrese la cantidad de meses que desea contratar de servicio (1, 6, 12)"))
} while (!((duracion == 1) || (duracion == 6) || (duracion == 12)))

switch (duracion) {
    case 1:
        costeMeses = costePlan
        break;
    case 6:
        costeMeses = costePlan * 6
        break;
    case 12:
        costeMeses = costePlan * 12
        break;
}
//Descuento por año utilizando la funcion desc25
if (duracion == 12) {
    alert("Los planes con duracion de un año poseen un descuento del 25%")
    costeMeses = costeMeses - desc25(costeMeses)
}
//Entrada de el sistema operativo
do {
    sistema = prompt("Seleccionaste el plan " + plan + "\nAhora Indica el sistema operativo [Windows o Linux]")

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
} else {
    alert("Este sistema operativo no tiene sistema de respaldo")
    respaldo = "no posee"
}


//Entrada de servicio ssl 
do {
    certificado = prompt("Indique si desea agregar Certificado SSl por $1000/año (s/n)")
} while (!((certificado == "s") || (certificado == "n")))

if (certificado == "s") {
    costeCertificado = 1000
    certOpcion = "SI"
} else {
    certOpcion = "NO"
}


// procesamiento de datos/calculos

subtotal = costeMeses + costeCopia + costeCertificado
totalImp = impIva(subtotal)
calculoTotal = totalImp + subtotal

descuento = prompt("Si tiene codigo de descuento ingreselo a continuacion: ")
if (descuento === "cybermonday") {
    calcDescuentos = desc25(calculoTotal)
} else if (descuento === "hFnfqu5") {
    calcDescuentos = desc50(calculoTotal)
} else {
    console.log("Codigo de descuento incorrecto. No aplica el descuento")
}

precioFinal = calculoTotal - calcDescuentos


// alert con resumen para el usuario
alert("RESUMEN DE COMPRA: \n * Duracion del servicio: " + duracion + " Mes/es = $" + costeMeses + "\n * Sistema operativo: " + sistema.toUpperCase() + "\n * Copia de seguridad: " + respaldo + " = $" + costeCopia + "\n * Certificado SSL: " + certOpcion + " = $" + costeCertificado + "/año \n \n SUBTOTAL: $" + subtotal + "\n--------------------------\n +IVA: $" + totalImp + "\n--------------------------\nTOTAL: $" + calculoTotal + "\nDescuentos : -" + calcDescuentos + "\nTOTAL A PAGAR: $" + precioFinal.toFixed(2))


//resumen de los calculos 
const totales = []

totales.push(
    { 'costeMeses': costeMeses },
    { 'costeCopia': costeCopia },
    { 'costeCertificado': costeCertificado },
    { 'totalImp': totalImp },
    { 'calculoTotal': calculoTotal },
    { 'precioFinal': precioFinal }
)

// resumen de totales por consola
console.log(totales)

