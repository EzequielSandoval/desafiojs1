// inicializacion
let costeMeses = 0
let costeCertificado = 0
let duracion = 0
let costeCopia = 0
let subtotal = 0
let precioFinal = 0
let calcDescuentos = 0
let costePlan = 0
let respaldo = ""
let certOpcion = "NO"
let sistema = ""
let copiaSeguridad = ""
let certificado = ""


//Calculo impuesto iva
function impIva(valor) {
    let valorIva = valor * 0.21
    return valorIva
}

//Calculos de descuentos
const desc25 = (descontarMedio) => { return descontarMedio * 0.25 }

const desc50 = (descontarMayor) => { return descontarMayor * 0.50 }



// Seleccion de planes 
let inputPlan1 = document.getElementById("plan1")
let inputPlan2 = document.getElementById("plan2")
let inputPlan3 = document.getElementById("plan3")
inputPlan1.onchange = () => {
    plan = "Lite";
    costePlan = 149;
};
inputPlan2.onchange = () => {
    plan = "Plus";
    costePlan = 269;
};
inputPlan3.onchange = () => {
    plan = "Full";
    costePlan = 399;
};


// Seleccion de duracion
let inputDuracion1 = document.getElementById("duracion1")
let inputDuracion2 = document.getElementById("duracion2")
let inputDuracion3 = document.getElementById("duracion3")

inputDuracion1.onchange = () => {
    duracion = 1;
    costeMeses = costePlan
};
inputDuracion2.onchange = () => {
    duracion = 6;
    costeMeses = costePlan * duracion;
};
inputDuracion3.onchange = () => {
    duracion = 12;
    costeMeses = costePlan * duracion;
    Swal.fire('Los planes con duracion de un año poseen un descuento del 25%');
    calcDescuentos = desc25(costeMeses)
    // costeMeses = costeMeses - calcDescuentos;

};

// Seleccion de sistema operativo
let inputSo1 = document.getElementById("soLin")
let inputSo2 = document.getElementById("soWin")

inputSo1.onchange = () => {
    sistema = "Linux";
    Swal.fire({
        title: '¿Deseas agregar sistema de respaldo por $90/mes?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Agregado!', '', 'success');
            respaldo = "Si";
            costeCopia = 90 * duracion;
        } else if (result.isDenied) {
            Swal.fire('No agregaste la copia de seguridad!', '', 'info');
            respaldo = "No";
        }
    })
};
inputSo2.onchange = () => {
    sistema = "Windows";
    respaldo = "No";
    Swal.fire({
        title: 'Este sistema no posee copia de seguridad',
        icon: 'info',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'OK',
    })
};

// Seleccion de ssl
 let inputSsl = document.getElementById("ssl")
 inputSsl.onchange = () => { costeCertificado = 1000; certOpcion = "SI"; };


// Submit de total 
let myForm = document.getElementById("formulario");
myForm.addEventListener("submit", validar);
function validar(e) {

    e.preventDefault();


    // procesamiento de datos/calculos
    subtotal = costeMeses + costeCopia + costeCertificado
    totalImp = impIva(subtotal)
    calculoTotal = totalImp + subtotal
    precioFinal = calculoTotal - calcDescuentos


    // ----------------------
    const resumen = []
    class Resumen {

        constructor(typePlan, pricePlan, durationPlan, systemPlan, backupPlan, priceBackup, sslPlan, priceSSL) {

            this.typePlan = typePlan;
            this.pricePlan = pricePlan;
            this.durationPlan = durationPlan;
            this.systemPlan = systemPlan;
            this.backupPlan = backupPlan;
            this.priceBackup = priceBackup;
            this.sslPlan = sslPlan;
            this.priceSSL = priceSSL;
        }


    }

    resumen.push(new Resumen(plan, costeMeses, duracion, sistema, respaldo, costeCopia, certOpcion, costeCertificado))
    // ----------------------


    // ----------------------
    const totales = []
    class Totales {

        constructor(totImp, totDiscount, total, finalPrice) {
            this.totImp = totImp;
            this.totDiscount = totDiscount;
            this.total = total;
            this.finalPrice = finalPrice;
        }

    }

    totales.push(new Totales(totalImp, calcDescuentos, calculoTotal, precioFinal))
    // ----------------------


    const padre = document.getElementById("resumen")

    for (const resumenProductos of resumen) {

        let contenedor = document.querySelector(".resumenProductos")

        contenedor.innerHTML = `
                                <h4>Plan:                       ${resumenProductos.typePlan}</h4>
                                <p>Coste:                       $${resumenProductos.pricePlan}</p>
                                <p>Meses de duracion:           ${resumenProductos.durationPlan}</p>   
                                <p>Sistema:                     ${resumenProductos.systemPlan}</p>   
                                <p>Copia de seguridad:          ${resumenProductos.backupPlan}</p>   
                                <p>Coste:                       $${resumenProductos.priceBackup}</p>   
                                <p>Certificado SSL:             ${resumenProductos.sslPlan}</p>    
                                <p>Coste:                       $${resumenProductos.priceSSL}</p>    
                            `

        padre.appendChild(contenedor)
    }

    for (const preciosTotales of totales) {

        let contenedorTotales = document.querySelector(".totales")

        contenedorTotales.innerHTML = `
                                    <h4>Total:                                    </h4>
                                    <p>Total impuestos:                           $${preciosTotales.totImp.toFixed(2)}</p>
                                    <p>Total Descuentos:                          $${preciosTotales.totDiscount.toFixed(2)}</p>
                                    <p>Total:                                     $${preciosTotales.total.toFixed(2)}</p>
                                    <p class="precioFinal">Precio final:          $${preciosTotales.finalPrice.toFixed(2)}</p>
    
    
                                  `
        padre.appendChild(contenedorTotales)
    }



}