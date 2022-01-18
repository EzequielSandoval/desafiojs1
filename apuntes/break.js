


for (let i = 1; i <= 5; i++) {

    let nombre = prompt().toLowerCase()

    if (nombre == "luis mera") {
        alert("TU NO PUEDES ENTRAR, SE ACABARON LOS TURNOS")
        break
    }
    if (nombre == "javier") {
        i--
        continue // next
    }

    let mensaje = "Turno N° " + i + " para el usuario " + nombre
    alert(mensaje)
    console.log(mensaje)
}