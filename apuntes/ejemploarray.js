const listaNombres = []
let cantidad = 5

while(listaNombres.length < cantidad){
    let nombre = prompt("ingresar nombre")
    listaNombres.push(nombre)
    console.log("Tamaño: " + listaNombres.length)
}

const nuevaLista = listaNombres.concat("Andres", "Paula")

alert (listaNombres.join("\n"))
