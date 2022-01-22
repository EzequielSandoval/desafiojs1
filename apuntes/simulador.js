alert("Mi compra / servicios")
// Ingresa el dato de sistema operativo
let meses = 0
let tiempo = 0

tiempo = parseInt(prompt("Seleccione la cantidad de meses que desea contratar el servicio \n 1, 6 o 12 Meses"))

switch (tiempo) {
    case 1:
        meses = 490
        break;
    case 6:
        meses = 2400
        break;
    case 12:
        meses = 2160
        break;
    default:
        alert("Seleccione un valor valido (1, 6, o 12 meses")
        break;
}



let sistema = parseInt(prompt("Por favor seleccione el sistema operativo: 1 Windows, 2 Linux").trim())

if ((sistema == 1) || (sistema == 2)) {

    if (sistema == 1) {
        alert("tenga en cuenta que este SO no tiene copia de seguridad diaria")

    } else {

    }


    if (tiempo == 12) {
        let certificado = prompt("Ingrese si desea adquirir certificado ssl por $990/año (s/n)").toLowerCase().trim()
        if ((certificado == "s") || (certificado == "n")) {
            if (certificado == "s") {
                valorCertificado = 990
            }
        } else {
            alert("ingrese un dato valido (s/n)")
        }
    }
} else {
    alert("Por favor ingrese un dato valido")

}

