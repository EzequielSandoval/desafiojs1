class Producto {

    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
    }


}


class Carrito {

    constructor() {
        this.subtotal = 0
        this.cantidadTotal = 0
    }
    addProducto(producto) {
        this.subtotal = this.subtotal + producto.price
        this.cantidadTotal++
    }



}



console.log("Bienvenido a la tienda")
let producto1 = new Producto("ceveza", 120, 3)
let producto2 = new Producto("vino", 230, 5)
let producto3 = new Producto("Fernet", 150, 3)

let carrito = new Carrito()




