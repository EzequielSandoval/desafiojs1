alert("Programa para cargar datos de una persona")

let personas = parseInt(prompt("Ingrese para cuantas personas desea cargar datos [max 3]").trim())

if ((personas <= 3) && (personas > 0)) {

    for (let i = 1; i <= personas; i++) {

        // carga de datos
        do {
            nombre = prompt("Ingrese nombre y apellido")
        } while (!isNaN(nombre))
        do {
            dni = parseInt(prompt("Ingrese un dni").trim())
        } while (dni == NaN)
        do {
            telefono = parseInt(prompt("Ingrese un telefono").trim())
        } while (telefono == NaN)

        // datos por consola

        console.log("Estos son los datos de la persona: " + i + "\n Nombre y apellido: " + nombre + "\n DNI : " + dni + "\n Telefono : " + telefono)

        // repeticion de alertas por cada ciclo 

        if (personas == i) {
            alert("Fin de programa, verifique la consola")
        } else {
            alert("***Siguiente persona****")
        }
    }



} else {
    alert("¡¡¡¡ERROR!!!! Debes ingresar un valor entre 1 y 3")
}