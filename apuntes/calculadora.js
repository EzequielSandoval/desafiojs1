function calculadora(operacion, numero1, numero2) {
    switch (operacion) {
        case "+":
            return numero1 + numero2
            break
        case "-":
            return numero1 - numero2
            break
        case "*":
            return numero1 * numero2
            break
        case "/":
            return numero1 / numero2
            break
        default:
            return 0
            break

    }
}


calculadora("*", 2, 4)
calculadora("+", 7, 8)