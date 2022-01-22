let tiempo = 0
do {
    tiempo = parseInt(prompt("Seleccione la cantidad de meses que desea contratar el servicio \n 1, 6 o 12 Meses"))

} while ((tiempo != 1) || (tiempo != 6) || (tiempo != 12))
alert("Listo el tiempo seleccionado es " + tiempo)