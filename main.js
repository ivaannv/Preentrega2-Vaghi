const productos = []
let total = 0;


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 0
    }
}

productos.push(new Producto('RemeraNegra', 7500))
productos.push(new Producto('RemeraBlanca', 7500))
productos.push(new Producto('BuzoNegro', 12000))
productos.push(new Producto('BuzoBlanco', 12000))
//metodos array 
//metodo find
const metodoFind = productos.find(elemento => elemento.precio == 7500);
console.log(metodoFind)
//metodo filter 
const metodoFilter = productos.filter(el => el.precio == 7500);
console.log(metodoFilter)
//metodo map
const metodoMap = productos.map(el => el.precio == 7500);
console.log(metodoMap)



function envio() {
    if (total >= 18500) {
        alert('el envio es gratis')
    } else {
        total += 1650
        alert('el costo del envio es de 1650, el total es de: ' + total)
    }
}

function metodoDePago() {
    let metodo = prompt('ingrese el metodo de pago, tarjeta o efectivo')
    if (metodo == 'tarjeta' || metodo == 'TARJETA' || metodo == 'Tarjeta') {
        total += 1750
        alert('hay un recargo de 1750, el total es de: ' + total)
    } else if (metodo == 'efectivo' || metodo == 'EFECTIVO' || metodo == 'Efectivo') {
        total -= 2500

        alert('hay un descuento de 2500, el total es de: ' + total)

    } else {
        alert('Escriba un metodo de pago valido')
        metodoDePago()
    }
}



function getProducts() {
    saludoEntrada()
    // verificacion de su el usuario quiere comprar o quiere cancelar.
    function saludoEntrada() {
        alert('¡Bienvenidos a la Iven Clothes!')
    }

    const question = prompt('Ingrese "comprar" para ver la lista de productos, o "cancelar" para salir');

    // condicional dependiendo que elija el usuario
    if (question == 'comprar' || question == 'COMPRAR' || question == 'Comprar') {
        let seleccionarProductos = Number(prompt('1-RemeraNegra $7500 2-RemeraBlanca $7500 3-BuzoNegro $12000 4-BuzoBlanco $12000'))

        // ejecutar el while
        while (seleccionarProductos != 0) {
            // el switch se va a fijar en que producto eligio, y va a ir a buscarlo al array de objetos dependiendo
            // el "case" que suceda.
            switch (seleccionarProductos) {
                case 1:
                    productos[0].cantidad += Number(prompt('El producto seleccionado es RemeraNegra, ingrese la cantidad'))
                    total += productos[0].cantidad * productos[0].precio
                    break;
                case 2:
                    productos[1].cantidad += Number(prompt('El producto seleccionado es RemeraBlanca, ingrese la cantidad'))
                    total += productos[1].cantidad * productos[1].precio
                    break;
                case 3:
                    productos[2].cantidad += Number(prompt('El producto seleccionado es BuzoNegro, ingrese la cantidad'))
                    total += productos[2].cantidad * productos[2].precio
                    break;
                case 4:
                    productos[3].cantidad += Number(prompt('El producto seleccionado es BuzoBlanco, ingrese la cantidad'))
                    total += productos[3].cantidad * productos[3].precio
                    break;
                default:
                    break;
            }

            seleccionarProductos = Number(prompt('Seleccione otro producto o ingrese 0 para finlazinar la compra.\n 1-RemeraNegra $19500 2-RemeraBlanca $17750 3-BuzoNegro $21500 4-BuzoBlanco $7500'))
        }
    } else if (question == 'cancelar' || question == 'CANCELAR' || question == 'Cancelar') {
        alert('Gracias por venir')
        // CORTAR EL FLUJO DEL WHILE.
        return
    } else {
        alert('Ingrese una palabra valida para continuar')
        getProducts()
    }
    envio()
    metodoDePago()
    alert('El total de la compra es de: ' + total)

    function saludoSalida() {
        alert('Gracias por tu Compra!')
    }
    saludoSalida()

}

getProducts()




