const comidas = ["Lasagna", "Sopa", "Kebab", "Asado"]

const eliminar = (meal) => {
    let index = meals.indexOf(meal)

    if (index > 0) {
        meals.splice(index, 1)
    }
}