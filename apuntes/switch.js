let entrada = prompt(" Ingrese nombre ").toLowerCase()

switch (entrada) {
    case "ALEJANDRO":
        alert("Hola alejandro")
        break;
    case "Facundo":
        alert("Hola facundo")
    default:
        alert("Quien eres?")
        break;
}
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


if (seguridad == "s") {
    seguridad = 80 * tiempo
} else {
    if (tiempo == 12) {
        let certificado = prompt("Ingrese si desea adquirir certificado ssl por $990/año (s/n)").toLowerCase().trim()
        if ((certificado == "s") || (certificado == "n")) {
            if (certificado == "s") {
                valorCertificado = 1080
            }
        } else {
            alert("ingrese un dato valido (s/n)")
        }
    }

}